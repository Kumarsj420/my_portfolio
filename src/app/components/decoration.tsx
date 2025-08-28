import { Icon } from "@iconify/react";

type Tags = {
    title: string,
    icon: string,
    iconSize: string,
}

export function MyTag({ title, icon, iconSize }: Tags) {
    return (
        <li className="text-zinc-300 px-4 py-3 bg-gradient-to-b from-zinc-700 to-zinc-800 w-max rounded-full relative z-10 after:absolute after:-z-10 after:inset-[0.11em] after:bg-zinc-800 after:rounded-full flex items-center gap-2.5 font-medium shadow shadow-zinc-950/70 cursor-default hover:scale-105 hover:brightness-125 transition duration-200">
            <Icon icon={icon} className={`${iconSize ?? 'size-6'}`} />
            <span>{title}</span>
        </li>
    )
}

type Cards = {
    tlIconColor: string,
    icon: string,
    title: string,
    p: string
}

export function DoCards({ tlIconColor, icon, title, p }: Cards) {
    return (
        <div className="bg-gradient-to-b from-zinc-700 to-zinc-800 px-8 py-7 rounded-xl relative  after:absolute after:inset-[0.11em] after:bg-zinc-800 after:rounded-xl z-10 after:-z-10 flex gap-7 items-start shadow-lg shadow-zinc-950/45 hover:scale-103 hover:brightness-125 transition duration-200">
            <div className={`p-3.5 bg-${tlIconColor}-500/20 w-max aspect-square rounded-full shadow-lg shadow-zinc-900/30`}>
                <Icon icon={icon} className={`text-${tlIconColor}-500 size-9`} />
            </div>
            <div>
                <h3 className="text-white text-lg sm:text-xl font-medium mb-1.5">{title}</h3>
                <p className="text-zinc-300 font-light text-sm sm:text-base">{p}</p>
            </div>
        </div>
    )
}

export function SubHead(prop: any) {
    return (
        <h2 className="text-2xl/7 font-semibold sm:truncate sm:text-3xl text-white">
            {prop.txt}
        </h2>
    )
}
