'use client';

import Link from 'next/link';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link
                 className="btn btn-ghost text-xl" href="/">
                    KeenKeeper
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">

                    <li>
                        <Link
                            href="/"
                            className={isActive('/') ? 'text-white  font-semibold bg-[#244D3F]' : ''}
                        >
                            <IoHome />
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/Timeline"
                            className={isActive('/Timeline') ? 'text-white  font-semibold bg-[#244D3F]' : ''}
                        >
                            <RiTimeLine />
                            Timeline
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/stats"
                            className={isActive('/stats') ? 'text-white  font-semibold bg-[#244D3F]' : ''}
                        >
                            <ImStatsDots />
                            Stats
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;