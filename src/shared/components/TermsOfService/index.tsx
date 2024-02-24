import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="relative max-sm:mt-16 scroll-smooth bg-white">
      <div className="container md:container px-4 md:px-8 mx-auto">
        <h1 className="flex mb-6 font-semibold md:text-2xl">BugTracker Terms of Service</h1>
        <div className="flex flex-col py-2 text-sm md:text-base text-gray-800">
          <p className="mb-8">
            Welcome to BugTracker! These Terms of Service ("Terms") govern your access to and use of BugTracker,
            including any content, functionality, and services offered on or through the BugTracker website or mobile
            application (collectively, the "Services"). Please read these Terms carefully before using the Services.
          </p>
          <h3 className="mb-1 font-semibold">1. Acceptance of Terms</h3>
          <p className="mb-8">
            By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do
            not agree to these Terms or our Privacy Policy, you may not access or use the Services.
          </p>
          <h3 className="mb-1 font-semibold">2. Use of Services</h3>
          <div className="mb-8">
            <p className="mb-1">
              a. Eligibility: You must be at least 18 years old to use the Services. By using the Services, you
              represent and warrant that you are at least 18 years old.
            </p>
            <p className="mb-1">
              b. Your Account: You may need to create an account to use certain features of the Services. You are
              responsible for maintaining the confidentiality of your account and password and for restricting access to
              your account. You agree to accept responsibility for all activities that occur under your account.
            </p>
            <p className="mb-4">
              c. Prohibited Activities: You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="gap-1 mb-2 list-disc list-inside">
              <li className="">Violating any applicable laws or regulations.</li>
              <li className="">Using the Services for any illegal or unauthorized purpose.</li>
              <li className="">
                Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions
                to or from the servers running the Services.
              </li>
              <li className="">Uploading or transmitting viruses, worms, or any other malicious code.</li>
              <li className="">
                Accessing or using the Services to collect any market research for a competing business.
              </li>
            </ul>
            <p className="mb-1">
              d. Termination: We reserve the right to terminate or suspend your access to all or any part of the
              Services at any time, with or without cause, with or without notice, effective immediately.
            </p>
          </div>
          <h3 className="mb-1 font-semibold">3. Intellectual Property</h3>
          <div className="mb-8">
            <p className="mb-1">
              a. Ownership: BugTracker and its licensors own all rights, title, and interest in and to the Services,
              including all associated intellectual property rights. You do not acquire any ownership interest in the
              Services.
            </p>
            <p className="mb-1">
              b. License: BugTracker grants you a limited, non-exclusive, non-transferable, revocable license to access
              and use the Services for your own personal or internal business purposes.
            </p>
          </div>
          <h3 className="mb-1 font-semibold">4. Privacy</h3>
          <p className="mb-8">
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and disclose information
            about you. By using the Services, you consent to the collection and use of your information in accordance
            with our Privacy Policy.
          </p>
          <h3 className="mb-1 font-semibold">5. Disclaimer of Warranties</h3>
          <p className="mb-8">
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED. BUGTRACKER DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <h3 className="mb-1 font-semibold">6. Limitation of Liability</h3>
          <p className="mb-8">
            IN NO EVENT SHALL BUGTRACKER, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR
            USE OF THE SERVICES.
          </p>
          <h3 className="mb-1 font-semibold">7. Governing Law</h3>
          <p className="mb-8">
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without
            regard to its conflict of law provisions.
          </p>
          <h3 className="mb-1 font-semibold">8. Changes to Terms</h3>
          <p className="mb-8">
            BugTracker reserves the right to modify or revise these Terms at any time. We will notify you of any changes
            by posting the revised Terms on the BugTracker website or mobile application. By continuing to access or use
            the Services after any revisions become effective, you agree to be bound by the revised Terms.
          </p>
          <h3 className="mb-1 font-semibold">9. Contact Us</h3>
          <p className="mb-4">
            If you have any questions or concerns regarding this Agreement, please contact us at{' '}
            <Link href="mailto:contact@bugtracker.com" className="text-blue-300">
              contact@bugtracker.com
            </Link>
            .
          </p>
          <p className="mb-8">
            By using BugTracker, you agree to these Terms of Service. Thank you for using BugTracker!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
