import { z } from "zod";

export const SERVICES = [
  "Preconstruction Planning",
  "Architectural Modelling",
  "Construction Management",
  "Ready-Mix Concrete",
  "Other",
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(120),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\-\s]{7,20}$/, "Enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z.enum(SERVICES),
  message: z.string().trim().min(10, "Please tell us a little more (10+ characters)").max(2000),
  website: z.string().max(0).optional(),
});
export type EnquiryValues = z.infer<typeof enquirySchema>;
