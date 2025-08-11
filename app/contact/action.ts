'use server'

import { z } from 'zod'
import { Resend } from 'resend';

// Define a schema for form validation
const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First Name is required.'),
  lastName: z.string().min(1, 'Last Name is required.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().optional(),
  message: z.string().optional(),
})

// Initialize Resend client using the environment variable
const resend = new Resend('re_fYBD6PH2_9QDAmSA2gnADpCd13V9QRQLZ');

export async function submitContactForm(prevState: any, formData: FormData) {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  // Validate the form data
  const parsed = contactFormSchema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      message: 'Validation failed. Please check your inputs.',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  if (parsed.success) {
    const { firstName, lastName, email, subject, message } = parsed.data;

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // <--- ENSURE THIS IS VERIFIED IN RESEND
        to: 'dakshethg@gmail.com', // <--- YOUR RECIPIENT EMAIL
        subject: subject ? `Contact Form: ${subject}` : 'New Contact Form Submission',
        html: `
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message || 'No message provided.'}</p>
        `,
      });
      return {
        success: true,
        message: 'Your message has been sent successfully!',
      };
    } catch (error: any) {
      console.error('Failed to send email:', error); // <--- CHECK YOUR LOGS FOR THIS ERROR
      return {
        success: false,
        message: 'Failed to send your message. Please try again later.',
        errors: { server: error.message || 'Unknown error' },
      };
    }
  }
}
