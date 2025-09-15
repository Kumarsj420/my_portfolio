'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Icon } from "@iconify/react";

import { SidebarContent } from './sidebar';
import { Logo } from './decoration';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-zinc-800 shadow-lg shadow-zinc-950/25 sticky top-0 z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <Link href='/'>
                    <Logo />
                </Link>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-7" />
                    </button>
                </div>
                <div className='hidden lg:flex gap-x-10 items-center'>
                    <div className="hidden lg:flex lg:gap-x-10 ">
                        <NavLink href='/'>About</NavLink>
                        <NavLink href='/work'>Work & Experience</NavLink>
                        <NavLink href='/case'>Case Study</NavLink>
                    </div>
                    <Link href="/contact" className="hidden lg:flex lg:flex-1 lg:justify-end ">
                        <button
                            type="button"
                            className="rounded-lg bg-gradient-to-t from-rose-400 to-rose-700 px-3.5 py-2 text-sm font-medium text-white hover:brightness-122 focus-visible:outline-2 focus-visible:outline-offset-2  shadow-lg shadow-rose-500/45 hover:shadow-rose-500/65 hover:scale-107 transition-all duration-400 relative after:absolute after:inset-[2px] after:bg-rose-500 z-10 after:-z-10 after:rounded-lg flex items-center gap-2 cursor-pointer"
                        >
                            <Icon icon="icon-park-outline:message" className='size-5' />
                            Contact
                        </button>
                    </Link>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden transition duration-200">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  p-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10 bg-zinc-900 dark:sm:ring-zinc-100/10">
                    <div className="flex items-center justify-between">
                        <Logo />
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-zinc-400"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-7" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <SidebarContent />
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
