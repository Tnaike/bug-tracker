import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import NavBar from '@/shared/components/Narbar';
import Footer from '@/shared/components/Footer';

export default function Home() {
  return (
    <>
      <NavBar>
        <div className='flex items-center gap-10'>
          <nav>
            <ul className='flex gap-6 font-medium'>
              <li className='hover:text-blue-300'>
                <Link href='/'>Features</Link>
              </li>
              <li className='hover:text-blue-300'>
                <Link href='/'>Support</Link>
              </li>
              <li className='hover:text-blue-300'>
                <Link href='/'>Pricing</Link>
              </li>
              <li className='hover:text-blue-300'>
                <Link href='/'>Docs</Link>
              </li>
            </ul>
          </nav>

          <div className='flex gap-2 space-x-4'>
            <Link href='/' className='button'>
              Login
            </Link>

            <Link href='/' className=''>
              Sign up
            </Link>
          </div>
        </div>
      </NavBar>
      <main className='relative scroll-smooth bg-white'>
        <section className='pt-12 pb-12 px-4 md:px-0 bg-[#f9f9f9]'>
          <div className='container md:container px-4 md:px-8 mx-auto'>
            <div className='grid grid-cols-1 md:gap-8 md:grid-cols-2'>
              <div className='flex items-top row-start-2 md:row-start-1'>
                <div>
                  <h1 className='flex flex-col text-xl md:text-xxl mt-5 font-bolder text-gray-500'>
                    Streamline Issue Tracking with BugTracker
                  </h1>
                  <div className='font-display text-sm md:text-base lg:text-md'>
                    <p className='my-4'>
                      A simple, fast and scalable bug tracking system that helps
                      you manage, track and resolve issues efficiently,
                      delivering great products on time.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex w-full items-center justify-center'>
                <Image
                  className='w-full'
                  src='/images/landing-bg.svg'
                  alt='Bug Tracker App'
                  width={1000}
                  height={982}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className='py-6 px-4 md:py-8 md:px-0 md:my-4'>
          <div className='container md:container mx-auto'>
            <h2 className='font-display text-base font-medium mt-6 md:mt-0 xl:text-lg mb-8 text-center text-gray-400/80'>
              Thousands of businesses scale faster and more efficiently by
              building on BugTracker.
            </h2>
            <div className='relative flex w-full items-center justify-start overflow-x-clip'>
              <Marquee autoFill>
                <div className='flex w-full justify-center'>
                  <div className='mx-6 flex items-center justify-center md:mx-8 xl:mx-10'>
                    <Image
                      src='/aws_logo.svg'
                      width={77}
                      height={35}
                      alt='Amazon Web Services'
                    />
                  </div>
                  <div className='mx-6 flex items-center justify-center md:mx-8 xl:mx-10'>
                    <Image
                      src='/next.svg'
                      width={77}
                      height={35}
                      alt='Nextjs'
                    />
                  </div>
                  <div className='mx-6 flex items-center justify-center md:mx-8 xl:mx-10'>
                    <Image
                      src='/Tubi_logo_1.svg'
                      width={77}
                      height={35}
                      alt='AWS'
                    />
                  </div>
                  <div className='mx-6 flex items-center justify-center md:mx-8 xl:mx-10'>
                    <Image
                      src='/ByteDance_logo.svg'
                      width={77}
                      height={35}
                      alt='ByteDance'
                    />
                  </div>
                  <div className='mx-6 flex items-center justify-center md:mx-8 xl:mx-10'>
                    <Image
                      src='/GSK_logo.svg'
                      width={77}
                      height={35}
                      alt='GSK'
                    />
                  </div>
                  <div className='mx-6 flex items-center justify-center md:mx-8 xl:mx-10'>
                    <Image
                      src='/vercel.svg'
                      width={77}
                      height={35}
                      alt='Vercel'
                    />
                  </div>
                </div>
              </Marquee>
              <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-r from-slate-50 to-5%'></div>
              <div className='absolute right-0 top-0 h-full w-full bg-gradient-to-l from-slate-50 to-5%'></div>
            </div>
          </div>
        </section>
        <section className='py-6 px-4 md:py-8 md:px-0'>
          <div className='container md:container mx-auto'>
            <h2 className='text-md font-bold mt-10 md:mt-0 md:text-xl mb-10 text-center text-gray-400/80'>
              Why BugTracker for issue tracker app?
            </h2>
            <div className='flex flex-col gap-4 lg:gap-8 sm:grid sm:grid-cols-1 sm:gap-8 lg:grid-cols-3 lg:space-y-0'>
              <div className='overflow-hidden flex flex-col p-6 sm:py-8 rounded-2xl bg-[#e2f8e2] hover:bg-gray-100'>
                <h2 className='font-display text-md md:text-xl font-bold mb-4 text-gray-400'>
                  Customizable Tracker
                </h2>
                <div>
                  <p className='font-display text-sm md:text-base mb-2'>
                    With BugTracker, you can build a custom issue tracker app
                    that perfectly fits your tem&apos;s workflow. Use
                    drag-and-drop widgets to add features like issue logging,
                    tracking, and resolution without writing a single line of
                    code.
                  </p>
                </div>
              </div>
              <div className='overflow-hidden flex flex-col p-6 sm:py-8 rounded-2xl bg-[#fce8e0] hover:bg-gray-100'>
                <h2 className='font-display text-md md:text-xl leading-normal font-bold mb-4 text-gray-400'>
                  Seamless Integration
                </h2>
                <div>
                  <p className='font-display text-sm md:text-base mb-2'>
                    BugTracker allows you to integrate your issue tracker app
                    with your existing databases or third-party APIs. Fetch and
                    update issue data in real-time, ensuring your team always
                    has the most accurate and up-to-date information.
                  </p>
                </div>
              </div>
              <div className='overflow-hidden flex flex-col p-6 sm:py-8 rounded-2xl bg-[#c7d8ff] hover:bg-gray-100'>
                <h2 className='font-display text-md md:text-xl font-bold mb-4 text-gray-400'>
                  User-friendly Interface
                </h2>
                <div>
                  <p className='font-display text-sm md:text-base mb-2'>
                    BugTracker&apos;s user-friendly interface makes it easy for
                    anyone to build an issue tracker app. Its pre-built widgets
                    and intuitive design tools eliminate the need for extensive
                    coding skills, making app development accessible to all team
                    members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-8 px-4 md:py-16 md:px-0 mt-8 md:mt-14 bg-[#0b1229]'>
          <div className='container md:container mx-auto'>
            <div className='flex flex-col gap-6 md:gap-12 sm:grid sm:grid-cols-2 items-center sm:gap-8 md:space-y-0'>
              <h2 className='font-display text-md md:text-xxl font-bold mb-4 text-white'>
                Tackle bugs before <br /> they see it coming!
              </h2>
              <div>Sign Up For Free</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
