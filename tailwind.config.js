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
      container: {
        screens: {
          sm: '640px', // default min-width for small screens
          md: '768px', // default min-width for medium screens
          lg: '1024px', // default min-width for large screens
          xl: '1128px', // default min-width for extra-large screens
          '2xl': '1280px', // default min-width for 2xl screens
        },
        padding: {
          default: '1.25rem', // default padding for all screens
          sm: '2rem', // padding for small screens
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        display: ['"PT Sans"', 'sans-serif'],
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
          500: '#190f36',
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
        green: {
          500: '#02361D',
          400: '#046235',
          300: '#93ECC1',
          200: '#94B6A3',
          100: '#D3FDE9',
          50: '#E2FEF0',
        },
        text: '#0b1e4b',
        input: '#989BA1',
        icon: '#98A2B3',
        stroke: { 200: '#D0D5DD', 100: '#d9d9d9' },
        error: '#D92D20',
      },
      fontSize: {
        xxs: ['0.625rem', '1rem'],
        xs: ['0.75rem', '1.125rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.35rem'],
        md: ['1.25rem', '1.5rem'],
        lg: ['1.5rem', '1.75rem'],
        xl: ['2rem', '2.5rem'],
        xxl: ['4rem', '4.5rem'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        bolder: 800,
      },
    },
  },
  plugins: [],
};
