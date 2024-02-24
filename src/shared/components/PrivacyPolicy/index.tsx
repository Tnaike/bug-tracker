import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="relative scroll-smooth bg-white">
      <div className="container md:container px-4 md:px-8 mx-auto">
        <div className="flex flex-col py-2 text-sm md:text-base text-gray-800">
          <p className="mb-8 font-medium md:text-2xl">
            At BugTracker, we are committed to protecting your privacy. This Privacy Policy outlines how we collect,
            use, disclose, and safeguard your personal information when you use our website or mobile application
            ("Services").
          </p>
          <h3 className="mb-1 font-semibold">Information We Collect</h3>
          <div className="mb-8">
            <ul className="gap-1 mb-2 list-disc pl-4">
              <li>
                We collect personal information that you provide voluntarily when you use our Services, such as your
                name, email address, and any other information you choose to provide.
              </li>
              <li>
                We may also automatically collect certain information about your device, including your IP address,
                browser type, and operating system.
              </li>
            </ul>
          </div>
          <h3 className="mb-1 font-semibold">How We Use Your Information</h3>
          <div className="mb-8">
            <ul className="gap-1 mb-2 list-disc pl-4">
              <li>
                We use your personal information to provide and improve our Services, communicate with you, and
                customize your experience.
              </li>
              <li>
                We may also use your information to send you promotional emails and other communications about
                BugTracker.
              </li>
            </ul>
          </div>
          <h3 className="mb-1 font-semibold">Information Sharing</h3>
          <div className="mb-8">
            <ul className="gap-1 mb-2 list-disc pl-4">
              <li>We do not sell, trade, or rent your personal information to third parties.</li>
              <li>
                We may share your information with third-party service providers who assist us in operating our Services
                or conducting our business.
              </li>
            </ul>
          </div>
          <h3 className="mb-1 font-semibold">Data Security</h3>
          <div className="mb-8">
            <ul className="gap-1 mb-2 list-disc pl-4">
              <li>
                We take reasonable measures to protect your personal information from unauthorized access, disclosure,
                alteration, or destruction.
              </li>
            </ul>
          </div>
          <h3 className="mb-1 font-semibold">Your Choices</h3>
          <div className="mb-8">
            <ul className="gap-1 mb-2 list-disc pl-4">
              <li>
                You may opt-out of receiving promotional emails from us by following the instructions provided in those
                emails.
              </li>
              <li>
                You may also access, update, or delete your personal information by contacting us.
              </li>
            </ul>
          </div>
          <h3 className="mb-1 font-semibold">Children's Privacy</h3>
          <div className="mb-8">
            <ul className="gap-1 mb-2 list-disc pl-4">
              <li>
                Our Services are not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13.
              </li>
            </ul>
          </div>
          <h3 className="mb-1 font-semibold">Changes to This Privacy Policy</h3>
          <div className="mb-8">
            <ul className="gap-1 mb-2 list-disc pl-4">
              <li>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.
              </li>
            </ul>
          </div>
          <h3 className="mb-1 font-semibold">Contact Us</h3>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
            <Link href="mailto:contact@bugtracker.com" className="text-blue-300">
              contact@bugtracker.com
            </Link>
            .
          </p>
          <p className="mb-8">
            By using BugTracker, you consent to the terms of this Privacy Policy. Thank you for trusting BugTracker with
            your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
