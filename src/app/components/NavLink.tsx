"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavProps = {
    href: string,
    children: React.ReactNode
}

export default function NavLink({href, children}: NavProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`group/link ${isActive ? 'active text-white pointer-events-none' : 'text-zinc-200/85 hover:after:w-full hover:after:left-0 hover:text-rose-500'} text-base  transition relative after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[0.1em] after:bg-rose-400 after:transition-all after:duration-300`}>
            {children}
            <div className="absolute top-full left-1/2 -translate-x-1/2 group-[.active]/link:size-1.5 rounded-full translate-y-1.5 group-[.active]/link:bg-rose-400 group-[.active]/link:animate-pulse"></div>
        </Link>
    )
}

