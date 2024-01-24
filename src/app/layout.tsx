import './globals.css';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'BugTracker | Free Issue Tracker System ',
  description:
    'BugTracker is an online bug tracker and issue resolution software, that help you to track, identify, and swiftly fix bugs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={ptSans.className}>
      <body>{children}</body>
    </html>
  );
}
