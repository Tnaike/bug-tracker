import { z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;

export const SignUpUserSchema = z.object({
  firstName: z.string().min(1, 'First name is required').min(3, 'First name must be at least 3 characters'),
  lastName: z.string().min(1, 'Last name is required').min(3, 'Last name must be at least 3 characters'),
  email: z.string().min(1, 'Email address is required').email('Email address is invalid'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be more than 6 characters')
    .regex(passwordRegex, 'Password must contain a number, special character, both capital and small letter'),
});

export type SignUpUserInput = z.infer<typeof SignUpUserSchema>;