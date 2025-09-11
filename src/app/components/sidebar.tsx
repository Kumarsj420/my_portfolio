"use client"
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CustomImg } from "./decoration";

const myList = [
    { icon: 'clarity:email-line', title: 'Email', value: 'kumarsj420@gmail.com', link: 'mailto:kumarsj420@gmail.com' },
    { icon: 'lineicons:phone', title: 'Phone', value: '+91 8219575377', link: 'tel:8219575377' },
    { icon: 'fluent:location-20-regular', title: 'Location', value: 'Solan (Himachal Pradesh)', link: 'https://www.google.com/maps/place/Solan,Himachal+Pradesh' }
]

export function SidebarContent() {

    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto h-full px-6 py-2">
            <div className="flex flex-col gap-3.5 pt-4 pb-8 border-b-zinc-700 border-b">
                <div className="rounded-3xl m-auto w-3/5 aspect-square z-10 relative group-hover:after:absolute group-hover:after:w-[calc(100%+4px)] group-hover:after:h-[calc(100%+4px)] group-hover:after:-z-10  group-hover:after:top-[-2px] group-hover:after:left-[-2px] group-hover:after:rounded-3xl gr-bg transition duration-500 after:opacity-0 group-hover:after:opacity-100 ">
                    <div className="w-full h-full rounded-3xl relative bg-zinc-800">
                        <div className="absolute bottom-0  left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-br to-zinc-500/90 from-zinc-800 rounded-3xl ring-[0.11em] ring-zinc-500/70 group-hover:ring-0">
                            <CustomImg
                                src="/me.png"
                                alt="Hero image"
                                fill={true}
                                sizes="125px"
                                classNames="object-cover brightness-90 saturate-90 w-full h-full rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
                <h2 className="s-title text-3xl font-medium text-white text-center mt-3 relative after:absolute after:top-1/3 after:-translate-y-1/2 after:translate-x-3 after:size-2.5 after:bg-green-500 after:rounded-full after:z-10">Suraj Kumar</h2>
                <span className="bg-zinc-900/70 text-center rounded-lg text-zinc-400 px-3.5 py-1.5 text-sm font-light w-max m-auto ring-1 ring-inset ring-zinc-700">Full Stack Web Developer</span>
            </div>
            <div className="py-5">
                <ul className="flex flex-col gap-7">
                    {
                        myList.map((item) => (
                            <li key={item.title} className="flex flex-row gap-4">
                                <div className="size-12 aspect-square bg-gradient-to-r from-zinc-600/70 to-zinc-800 flex items-center justify-center rounded-xl shadow shadow-zinc-950/55 relative before:absolute before:inset-[1px] before:bg-zinc-800 before:rounded-xl before:-z-10 z-10">
                                    <Icon icon={item.icon} className="size-5 text-rose-500" />
                                </div>
                                <div className="flex flex-col gap-0.5 overflow-hidden">
                                    <span className="text-zinc-400 text-sm font-medium">{item.title}</span>
                                    <a href={item.link} target="blank" className="block truncate text-white font-light hover:text-rose-400">{item.value}</a>
                                </div>
                            </li>
                        ))
                    }

                </ul>
                <div className="mt-7 flex items-center justify-center gap-2.5">
                    <a href="https://www.linkedin.com/in/suraj-kumar-502b4a146" target="_blank" className="text-zinc-400/80 hover:text-rose-400">
                        <Icon icon="mdi:linkedin" className="size-6" />
                    </a>
                    <a href="https://github.com/Kumarsj420" target="_blank" className="text-zinc-400/80 hover:text-rose-400">
                        <Icon icon="mdi:github" className="size-6" />
                    </a>
                    <a href="https://www.instagram.com/suraj_k.11/?next=%2F" target="_blank" className="text-zinc-400/80 hover:text-rose-400">
                        <Icon icon="mdi:instagram" className="size-6" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Sidebar() {
    return (
        <div className="group relative bg-gradient-to-l from-zinc-700 to-zinc-800/85 before:pointer-events-none rounded-3xl h-full after:absolute  after:inset-[0.11em] z-10 after:-z-10 after:bg-zinc-800/85 after:rounded-3xl max-h-[1000px] overflow-hidden">
            <SidebarContent />
        </div>
    )
}
