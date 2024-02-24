import Footer from '@/shared/components/Footer';
import NavBar from '@/shared/components/Narbar';
import PageSectionHeader from '@/shared/components/PageSectionHeader';
import TermsOfService from '@/shared/components/TermsOfService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BugTracker | Terms of Service',
};

function Terms() {
  return (
    <div>
      <NavBar />
      <div className='mt-16 md:mt-0'>
        <PageSectionHeader title='Terms of Service' />
      </div>
      <div className="py-8">
        <TermsOfService />
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
