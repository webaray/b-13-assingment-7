import Link from 'next/link';
import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
            <aside>
                <h2 className='text-6xl font-bold'>KeenKeeper</h2>
                <p className="">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

            </aside>
            <nav>
                <p className='font-semibold'>Social Links</p>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaFacebook className='bg-amber-100 text-5xl text-black p-3 rounded-full' />
                    </a>
                    <a>
                        <BsYoutube className='bg-amber-100 text-5xl text-black p-3 rounded-full' />
                    </a>
                    <a>
                        <FaXTwitter className='bg-amber-100 text-5xl text-black p-3 rounded-full' />
                    </a>
                </div>
            </nav>
            <div className=" flex container flex-col">

                <div className="divider"></div>

            </div>

            <div className='flex container mx-auto justify-between'>
                <div>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className='flex gap-10 list-none'>
                    <li><Link href={'/'}>Privacy Policy </Link></li>
                    <li><Link href={'/'}> Terms of Service </Link></li>
                    <li><Link href={'/'}> Cookies </Link></li>
                </div>
            </div>
        </footer>
    );
};

export default Footer;