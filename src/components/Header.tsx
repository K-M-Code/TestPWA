'use client'

import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@/public/logo.png' 
import siteLinks from '@/components/siteLinks'
import { useState } from 'react'

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    const handleCloseMenu = () => {
        setShowMobileMenu(false)
    }

    return (
        <header className='sticky inset-0 z-50 mx-auto mt-1 max-w-[1200px] rounded-full bg-blue-950/85 backdrop-blur-xl'>
            <div>
                <nav className='mx-auto flex max-w-6xl gap-8 px-6 py-4 transition-all duration-200 ease-in-out'>
                    <div className='relative flex items-center'>
                        <Link className='text-xl font-bold text-slate-900' href='/'>
                            <Image src={LogoImage} alt='Billawar Logo' width={40} height={40} />
                        </Link>
                    </div>
                    <ul className='hidden items-center justify-center gap-6 md:flex'>
                        {siteLinks.map(link => (
                            <li key={link.label} className='text-lg text-white lg:text-xl'>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className='grow'></div>
                    <div className='hidden items-center justify-center gap-6 md:flex'>
                        <a
                            href='#'
                            className='rounded-xl bg-yellow-300 bg-gradient-to-br px-3 py-1.5 text-lg font-medium text-black shadow-md shadow-black/25 transition-transform duration-200 ease-in-out hover:scale-105'
                        >
                            Sign In
                        </a>
                    </div>
                    <div className='relative flex items-center justify-center md:hidden'>
                        <button type='button' onClick={toggleMobileMenu}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                                className='h-6 w-auto text-white'
                            >
                                <path
                                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                ></path>
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
            {showMobileMenu && (
                <div
                    className='fixed inset-0 z-50 bg-blue-900/90 backdrop-blur-md'
                    onClick={handleCloseMenu}
                >
                    <div
                        className='absolute right-0 top-0 h-screen w-[300px] flex-row bg-blue-950'
                        onClick={e => e.stopPropagation()}
                    >
                        <div className='flex w-full items-center justify-center pt-10'>
                            <Image
                                src={LogoImage}
                                alt='Billawar Logo'
                                width={100}
                                height={100}
                                className=''
                            />
                        </div>
                        <div className='flex flex-col justify-center gap-20 p-10 text-white'>
                            <ul>
                                {siteLinks.map(link => (
                                    <li key={link.label} className='pt-1.5 text-xl text-white'>
                                        <Link href={link.href} onClick={handleCloseMenu}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <a
                                    href='#'
                                    className='rounded-md bg-yellow-300 bg-gradient-to-br px-3 py-1.5 text-sm font-medium text-black shadow-md shadow-black/25 transition-transform duration-200 ease-in-out hover:scale-105'
                                    onClick={handleCloseMenu}
                                >
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
export default Header
