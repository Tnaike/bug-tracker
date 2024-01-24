import NavBar from '@/shared/components/Narbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar>
        <div className='flex items-center gap-10'>
          <nav>
            <ul className='flex gap-6'>
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
            <Link
              href='/'
              className=""
            >
              Login
            </Link>

            <Link
              href='/'
              className=""
            >
              Sign up
            </Link>
          </div>
        </div>
      </NavBar>
    </>
  );
}
