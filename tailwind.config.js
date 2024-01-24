/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        gray: {
          400: '#000812',
          300: '#CBD6E0',
          200: '#E2E9F0',
          100: '#EDF2F7',
          50: '#F6F9FB',
        },
        blue: {
          400: '#023985',
          300: '#0367f2',
          200: '#0367f3',
          100: '#b1d0fb',
          50: '#f4f9ff',
        },
        disabled: '#F7F7F8',
        green: '#94B6A3',
        error: '#D92D20',
      },
      fontSize: {
        xxs: ['0.625rem', '1rem'],
        xs: ['0.75rem', '1.125rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        md: ['1.25rem', '1.75rem'],
        lg: ['1.5rem', '2rem'],
        xl: ['2rem', '3rem'],
        xxl: ['3rem', '4rem'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
