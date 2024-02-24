import { z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;

const commonPasswordRules = z.string().min(1, 'Password is required').min(6, 'Password must be more than 6 characters');
const commonEmailRules = z.string().min(1, 'Email address is required').email('Email address is invalid');

export const SignUpUserSchema = z.object({
  firstName: z.string().min(1, 'First name is required').min(3, 'First name must be at least 3 characters'),
  lastName: z.string().min(1, 'Last name is required').min(3, 'Last name must be at least 3 characters'),
  email: commonEmailRules,
  password: commonPasswordRules.regex(
    passwordRegex,
    'Password must contain a number, special character, both capital and small letter',
  ),
});

export type SignUpUserInput = z.infer<typeof SignUpUserSchema>;

export const SignInUserSchema = z.object({
  email: commonEmailRules,
  password: commonPasswordRules.regex(
    passwordRegex,
    'Password must contain a number, special character, both capital and small letter',
  ),
});

export type SignInUserInput = z.infer<typeof SignInUserSchema>;

export const ForgotPasswordSchema = z.object({
  email: commonEmailRules,
});

export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;

export const ChangePasswordSchema = z
  .object({
    oldPassword: commonPasswordRules,
    newPassword: commonPasswordRules,
    confirmPassword: z.string().min(1, 'Confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type ChangePasswordInput = z.infer<typeof ChangePasswordSchema>;
