

import Link from 'next/link'
import React from 'react'
import Nav from './Nav'


import MobileNav from './MobileNav'
import { Button } from './ui/button'
import { Scale } from 'lucide-react'

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className="container mx-auto flex items-center justify-between">
                <Link href='/'>
                    <h1 className='text-4xl font-semibold '>
                        Badr<span className='text-accent'>.</span>
                    </h1>
                </Link>
                <div className='hidden xl:flex items-center gap-8'>
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                <div className='xl:hidden'>
                    <MobileNav />
                </div>

            </div>
        </header>
    )
}

export default Header