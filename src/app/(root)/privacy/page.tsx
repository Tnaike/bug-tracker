import Footer from '@/shared/components/Footer';
import NavBar from '@/shared/components/Narbar';
import PageSectionHeader from '@/shared/components/PageSectionHeader';
import PrivacyPolicy from '@/shared/components/PrivacyPolicy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BugTracker',
};

function Privacy() {
  return (
    <div>
      <NavBar />
      <div className="mt-16 md:mt-0">
        <PageSectionHeader title="Privacy Policy" />
      </div>
      <div className="py-8">
        <PrivacyPolicy />
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
