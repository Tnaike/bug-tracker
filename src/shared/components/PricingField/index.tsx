import Button from '@/shared/components/Button';

const PricingField = () => {
  return (
    <div className="relative scroll-smooth bg-white">
      <h1 className="flex py-10 font-bold text-lg md:text-3xl justify-center px-4">
        The optimal solution for bug tracking, at the best value.
      </h1>
      <div className="flex bg-slate-50 py-6">
        <div className="container md:container px-4 md:px-8 mx-auto">
          <section className="flex max-sm:flex-col gap-7 sm:gap-10 py-4 text-sm md:text-base justify-center text-gray-800">
            <div className="flex flex-col bg-white border border-gray-200 md:w-[450px] p-8 rounded-2xl shadow-[1px_1px_1px_hsla(0,6%,90%,.5)]">
              <div className="flex flex-col pt-5">
                <h2 className="flex justify-center text-md font-bold text-blue-300 mb-4 uppercase">Free Forever</h2>
                <div className="flex flex-col gap-2 mb-6">
                  <p className="text-5xl font-bold">$0</p>
                  <p className="text-sm text-gray-600">Forever</p>
                </div>
                <div className="flex mb-6">
                  <Button label="Free Forever" variant="info" size="medium" className="w-full" />
                </div>
                <div className="flex">
                  <ul className="[&_>_li]:py-1 text-sm text-gray-800 list-image-[url(/images/check.svg)] list-inside marker:text-lg">
                    <li>100MB Storage</li>
                    <li>Unlimited Tasks</li>
                    <li>Unlimited Free Plan Members</li>
                    <li>Collaborative Docs</li>
                    <li>Everything View</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 md:w-[450px] p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,.2)]">
              <div className="flex flex-col pt-5">
                <h2 className="flex justify-center font-display text-md font-bold text-gray-900 mb-4 uppercase">
                  Pro Monthly plan
                </h2>
                <div className="flex flex-col gap-2 mb-6">
                  <p className="text-5xl font-bold relative">
                    $12 <span className="absolute top-1 text-md indent-3">/month</span>
                  </p>
                  <p className="text-sm text-gray-600">Billed once a month</p>
                </div>
                <div className="flex mb-6">
                  <Button label="Get Started" variant="primary" size="medium" className="w-full" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">EVERYTHING IN FREE FOREVER AND</p>
                  <ul className="[&_>_li]:py-1 text-sm text-gray-800 list-image-[url(/images/check.svg)] list-inside marker:text-lg marker:bg-blue-300">
                    <li>Unlimited Storage</li>
                    <li>Unlimited Integrations</li>
                    <li>Unlimited Dashboards</li>
                    <li>Advanced Dashboard Features</li>
                    <li>Guests with Permissions</li>
                    <li>Unlimited Custom Fields</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PricingField;
