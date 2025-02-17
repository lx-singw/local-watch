// src/components/Navbar.tsx
"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-4">
                        <Link
                            href="/"
                            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                ${pathname === '/'
                                    ? 'text-blue-600'
                                    : 'text-gray-700 hover:text-blue-600'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                ${pathname === '/about'
                                    ? 'text-blue-600'
                                    : 'text-gray-700 hover:text-blue-600'
                                }`}
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar