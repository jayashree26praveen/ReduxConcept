// components/Navbar.js
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar() {
  // Get total quantity from Redux store
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="bg-black shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold text-white">
          Ecommerce
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-white font-medium text-lg">
          <Link href="/" className="hover:text-blue-500 transition-colors duration-200">
            Home
          </Link>

          <Link href="/cart" className="relative hover:text-blue-500 transition-colors duration-200">
            <span>Cart</span>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-4 text-xs bg-red-600 text-white rounded-full px-2 py-0.5 font-bold">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
