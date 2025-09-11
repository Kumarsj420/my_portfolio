"use client"
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MNavProp = {
    href: string,
    children: React.ReactNode,
    icon: string,
    iconSize: string
}

function MenuNav({ href, children, icon, iconSize }: MNavProp) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={`group ${isActive ? 'active' : ''}`}>
            <div className="py-1.5 flex flex-col gap-1  items-center group-[.active]:bg-rose-500">
                <div className="flex size-7 sm:size-8 justify-center items-center">
                    <Icon icon={icon} className={` ${iconSize} text-zinc-400 group-[.active]:text-rose-200`} />
                </div>
                <span className="text-xs text-white font-light">{children}</span>
            </div>
        </Link>
    )
}

export default function BottomMenu() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-zinc-800 z-50  border-t border-t-zinc-700 lg:hidden">
            <div className="max-w-7xl ">
                <div className="grid w-full grid-cols-5 divide-x divide-zinc-700">
                    <MenuNav href='/' icon='akar-icons:info' iconSize="size-5 sm:size-6">About</MenuNav>
                    <MenuNav href='/work' icon='gg:work-alt' iconSize="size-6 sm:size-7">Work</MenuNav>
                    <MenuNav href='/project' icon='ant-design:project-outlined' iconSize="size-6 sm:size-7">Projects</MenuNav>
                    <MenuNav href='/case' icon='ant-design:read-outlined' iconSize="size-6 sm:size-7">Case</MenuNav>
                    <MenuNav href='/contact' icon='icon-park-outline:message' iconSize="size-5 sm:size-6">Contact</MenuNav>
                </div>
            </div>
        </div>
    )
}