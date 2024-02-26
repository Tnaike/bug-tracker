import Footer from '@/shared/components/Footer';
import NavBar from '@/shared/components/Narbar';
import PageSectionHeader from '@/shared/components/PageSectionHeader';
import PricingField from '@/shared/components/PricingField';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | BugTracker',
};

function Pricing() {
  return (
    <div>
      <NavBar />
      <div className="mt-16 md:mt-0">
        <PageSectionHeader title="Pricing" />
      </div>
      <div>
        <PricingField />
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
