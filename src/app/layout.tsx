import { Montserrat } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'BugTracker | Free Issue Tracker System ',
  description:
    'BugTracker is an online bug tracker and issue resolution software, that help you to track, identify, and swiftly fix bugs.',
  name: 'BugTracker',
  url: 'http://',
  image: 'https://res.cloudinary.com/dt9rspla9/image/upload/v1708379563/Tnaike/bugTracker-meta.png',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:site_name" content={metadata.name} />
        <meta property="og:image" content={metadata.image} />
      </head>
      <body className={montserrat.className}>
        <main className="flex h-screen flex-col">{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
