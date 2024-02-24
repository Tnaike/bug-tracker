import Footer from '@/shared/components/Footer';
import NavBar from '@/shared/components/Narbar';
import TermsOfService from '@/shared/components/TermsOfService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BugTracker | Terms of Service',
};

function Terms() {
  return (
    <div>
      <NavBar />
      <div className="py-5">
        <TermsOfService />
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
