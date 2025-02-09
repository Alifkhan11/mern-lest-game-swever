import { z } from "zod";

const userRegistrationvalidationSchema = z.object({
    body: z.object({
      name: z.string().min(1, "Name is required."),
      isDeleted:z.boolean().default(false),
      email: z.string().email("Invalid email address."),
      password: z.string().min(6, "Password must be at least 6 characters long."),
      confirmPassword: z
        .string()
        .min(6, "Confirm Password must be at least 6 characters long."),
      role: z.enum(["user", "admin"]).optional().default("user"),
    }).refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match.",
      path: ["body", "confirmPassword"], // Target the confirmPassword field
    }),
  });
  

export const AuthValidation = {
    userRegistrationvalidationSchema,
};