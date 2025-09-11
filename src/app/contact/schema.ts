import { z } from "zod";

export const contactSchema = z.object({
  "fullName": z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(30, "Message must be at least 30 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
