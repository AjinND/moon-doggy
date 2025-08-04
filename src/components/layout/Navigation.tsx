import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-gray-700 hover:text-blue-600 font-medium">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
