import NavBar from '@/shared/components/Narbar';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export default function Home() {
  return (
    <>
      <NavBar>
        <div className='flex items-center gap-10'>
          <nav>
            <ul className='flex gap-6 font-medium'>
              <li>
                <Link href='/'>Features</Link>
              </li>
              <li>
                <Link href='/'>Support</Link>
              </li>
              <li>
                <Link href='/'>Pricing</Link>
              </li>
              <li>
                <Link href='/'>Docs</Link>
              </li>
            </ul>
          </nav>

          <div className='flex gap-3'>
            <Link href='/' className=''>
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
        <section className='py-6 px-4 md:py-8 md:px-0'>
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
            <h2 className='text-base font-bold mt-6 md:mt-0 xl:text-lg mb-8 text-center text-gray-400/80'>
              Why Appsmith for issue tracker app?
            </h2>
            <div className='relative flex w-full items-center justify-start overflow-x-clip'></div>
          </div>
        </section>
      </main>
    </>
  );
}
