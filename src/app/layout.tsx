import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
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
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
