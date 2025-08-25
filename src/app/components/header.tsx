'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white dark:bg-zinc-800/85">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <span className='bg-logo text-transparent bg-clip-text text-xl'>{"< " } <span className='font-extrabold'>SK</span> {"/>"}</span>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-zinc-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">

                    <a href="#" className="text-sm/6 font-medium text-zinc-900 dark:text-white transition relative after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[0.1em] after:bg-rose-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-rose-500">
                        About
                    </a>
                    <a href="#" className="text-sm/6 font-medium text-zinc-900 dark:text-white transition relative after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[0.1em] after:bg-rose-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-rose-500">
                        Work & Experience
                    </a>
                    <a href="#" className="text-sm/6 font-medium text-zinc-900 dark:text-white transition relative after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[0.1em] after:bg-rose-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-rose-500">
                       NextJS Projects
                    </a>
                    <a href="#" className="text-sm/6 font-medium text-zinc-900 dark:text-white transition relative after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[0.1em] after:bg-rose-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-rose-500">
                        Case Study
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button
                        type="button"
                        className="rounded-lg bg-gradient-to-t from-rose-400 to-rose-700 px-3.5 py-1.5 text-sm font-medium text-white hover:brightness-122 focus-visible:outline-2 focus-visible:outline-offset-2  shadow-lg shadow-rose-500/45 hover:shadow-rose-500/65 hover:scale-107 transition-all duration-400 relative after:absolute after:inset-[2px] after:bg-rose-500 z-10 after:-z-10 after:rounded-lg"
                    >
                        Contact Me
                    </button>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10 dark:bg-zinc-900 dark:sm:ring-zinc-100/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto dark:hidden"
                            />
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto not-dark:hidden"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-zinc-700 dark:text-zinc-400"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-zinc-500/10 dark:divide-white/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50 dark:text-white dark:hover:bg-white/5">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>

                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50 dark:text-white dark:hover:bg-white/5 "
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50 dark:text-white dark:hover:bg-white/5"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50 dark:text-white dark:hover:bg-white/5"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50 dark:text-white dark:hover:bg-white/5"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
