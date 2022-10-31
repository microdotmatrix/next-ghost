import Link from 'next/link';
import { getPages } from '../lib/ghost';

export default async function Nav() {
  const pages = await getPages()

  return (
    <nav className='site-nav'>
      <ul className='flex flex-row justify-around gap-8 items-center'>
        {pages.map((page, index) => (
          <li className='text-center' key={index}>
            <Link href={`/${page.slug}`}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

