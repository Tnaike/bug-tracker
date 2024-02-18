import FormField from '@/shared/components/FormField';
import PasswordInput from '@/shared/components/PasswordInput';
import TextInput from '@/shared/components/TextInput';
import React from 'react';
import Button from '../Button';

const SignUpForm = () => {
  return (
    <form>
      <div className='flex max-sm:flex-col gap-4 mb-4'>
        <FormField htmlFor='firstName' label='First Name' className='grow'>
          <TextInput
            type='text'
            id='firstName'
            placeholder='Enter first name'
          />
        </FormField>
        <FormField htmlFor='lastName' label='Last Name' className='grow'>
          <TextInput type='text' id='lastName' placeholder='Enter last name' />
        </FormField>
      </div>
      <div className='flex mb-4'>
        <FormField htmlFor='email' label='Email Address' className='grow'>
          <TextInput type='text' id='email' placeholder='Enter email address' />
        </FormField>
      </div>
      <div className='flex max-sm:flex-col gap-4 mb-5'>
        <FormField htmlFor='password' label='Password' className='grow'>
          <PasswordInput id='password' placeholder='Enter Password' />
        </FormField>
        <FormField
          htmlFor='confirmPassword'
          label='Confirm Password'
          className='grow'
        >
          <PasswordInput id='confirmPassword' placeholder='Enter Password' />
        </FormField>
      </div>
      <div className='flex flex-wrap mb-5 text-gray-700 text-sm items-center font-medium'>
        <p>By clicking continue, I agree to the </p>
        <div className='cursor-pointer text-blue-300 ml-1'>
          <Button label='Terms of Service' size='text' variant='basic' />
        </div>
      </div>
      <div className='mb-6 flex items-center justify-center'>
        <Button type='submit' size='medium' className='w-full' label='Create account' />
      </div>
    </form>
  );
};

export default SignUpForm;
