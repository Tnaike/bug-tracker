import { ZodSchema, z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;

function createPasswordRules(includeRegex: boolean = true): ZodSchema<string> {
  let passwordRules = z.string().min(1, 'Password is required').min(6, 'Password must be more than 6 characters');
  if (includeRegex) {
    passwordRules = passwordRules.regex(
      passwordRegex,
      'Password must contain a number, special character, both capital and small letter',
    );
  }
  return passwordRules;
}

function createEmailRules(): ZodSchema<string> {
  return z.string().min(1, 'Email address is required').email('Email address is invalid');
}

export const SignUpUserSchema = z.object({
  firstName: z.string().min(1, 'First name is required').min(3, 'First name must be at least 3 characters'),
  lastName: z.string().min(1, 'Last name is required').min(3, 'Last name must be at least 3 characters'),
  email: createEmailRules(),
  password: createPasswordRules(),
});

export type SignUpUserInput = z.infer<typeof SignUpUserSchema>;

export const SignInUserSchema = z.object({
  email: createEmailRules(),
  password: createPasswordRules(),
});

export type SignInUserInput = z.infer<typeof SignInUserSchema>;

export const ForgotPasswordSchema = z.object({
  email: createEmailRules(),
});

export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;

export const ChangePasswordSchema = z
  .object({
    oldPassword: createPasswordRules(false),
    newPassword: createPasswordRules(),
    confirmPassword: z.string().min(1, 'Confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type ChangePasswordInput = z.infer<typeof ChangePasswordSchema>;

export const UserSchema = z.object({
  name: z.string().min(1, 'Name is required').min(3, 'Nmae must be at least 3 characters').max(50),
  email: createEmailRules(),
  password: createPasswordRules(),
  image: z.string().optional(),
});

export type UserSchemaInput = z.infer<typeof UserSchema>;
