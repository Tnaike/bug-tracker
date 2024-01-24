import NavBar from '@/shared/components/Narbar';
import Image from 'next/image';
import Link from 'next/link';

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
      <main className='relative scroll-smooth'>
        <section className='pt-12 pb-12'>
          <div className='md:container sm:container md:px-8 mx-auto'>
            <div className='grid grid-cols-1 md:gap-8 md:grid-cols-2'>
              <div className='flex items-top row-start-2 md:row-start-1'>
                <div>
                  <h1 className='flex flex-col text-xxl font-bolder text-gray-00'>
                    Streamline Issue Tracking with BugTracker
                  </h1>
                  <div className='font-display text-xs md:text-base lg:text-md'>
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
      </main>
    </>
  );
}
