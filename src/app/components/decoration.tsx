"use client"
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";


type Tags = {
    title: string,
    icon: string,
    iconSize: string,
}

export function MyTag({ title, icon, iconSize }: Tags) {
    return (
        <div className="text-zinc-300 px-4 py-3 bg-gradient-to-b from-zinc-700 to-zinc-800 w-max rounded-full relative z-10 after:absolute after:-z-10 after:inset-[0.11em] after:bg-zinc-800 after:rounded-full flex items-center gap-2.5 font-medium shadow shadow-zinc-950/70 cursor-default hover:scale-105 hover:brightness-125 transition duration-200 text-sm sm:text-base">
            <Icon icon={icon} className={`${iconSize ?? 'size-5 sm:size-6'}`} />
            <span>{title}</span>
        </div>
    )
}

type Cards = {
    tlIconColor: any,
    icon: string,
    title: string,
    p: string
}


export function DoCards({ tlIconColor, icon, title, p }: Cards) {

    return (
        <div
            className="bg-gradient-to-b from-zinc-700 to-zinc-800 px-8 py-7 rounded-xl relative  after:absolute after:inset-[0.11em] after:bg-zinc-800 after:rounded-xl z-10 after:-z-10 flex gap-7 items-start shadow-lg shadow-zinc-950/45 hover:scale-103 hover:brightness-125 transition duration-200">
            <div className={`p-3.5 ${tlIconColor[0]} w-max aspect-square rounded-full shadow-lg shadow-zinc-900/30`}>
                <Icon icon={icon} className={`${tlIconColor[1]} size-8 sm:size-9`} />
            </div>
            <div>
                <h3 className="text-white text-lg sm:text-xl font-medium mb-1.5">{title}</h3>
                <p className="text-zinc-300 font-light text-sm sm:text-base">{p}</p>
            </div>
        </div>
    )
}

type ChildProp = {
    children: React.ReactNode
}

export function Head({ children }: ChildProp) {
    return (
        <h1
            className="py-1 text-3xl font-semibold sm:text-4xl text-white">
            {children}
        </h1>
    )
}

export function SubHead({ children }: ChildProp) {
    return (
        <h2 className="text-xl font-semibold sm:truncate sm:text-2xl text-white">
            {children}
        </h2>
    )
}

export function MinHead({ children }: ChildProp) {
    return (
        <h3 className="text-base font-medium sm:truncate sm:text-lg text-white mt-5">
            {children}
        </h3>
    )
}

export function Para({ children }: ChildProp) {
    return (
        <p
            className="mt-3.5 font-light text-sm sm:text-base text-zinc-300/95 hover:text-white transition duration-200 flex flex-col gap-3.5">
            {
                children
            }
        </p>
    )
}



export function UL({ children }: ChildProp) {
    return (
        <ul className={`mt-1 font-normal leading-7 ml-6 relative  text-sm sm:text-base text-zinc-300 hover:text-white transition duration-200`} >
            {children}
        </ul>
    )
}

type inpProp = {
    title: string,
    id: string,
    type: "text" | "email" | "password" | "number",
    autoComplete?: string,
    placeholder?: string,
    register: UseFormRegister<any>,   // 👈
    error?: FieldError,               // 👈
};

export function MyInput({ title, id, type, autoComplete, placeholder, register, error }: inpProp) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">{title}</label>
            <div className="mt-2.5">
                <input
                    id={id}
                    {...register(id)}   // 👈 hook form connection
                    type={type}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    className={`block w-full rounded-xl px-4 py-3.5 text-base text-white outline-1 -outline-offset-1 
          ${error ? "outline-red-500 focus:outline-red-500" : "outline-zinc-600 focus:outline-rose-400 focus:outline-2"} 
          placeholder:text-zinc-400/75 bg-zinc-800`}
                />
                {error && <p className="mt-1 text-sm text-red-400">{error.message}</p>}
            </div>
        </div>
    );
}

type textareaProp = {
    title: string,
    id: string,
    placeholder?: string,
    register: UseFormRegister<any>,   // 👈
    error?: FieldError,               // 👈
};

export function MyTextarea({ title, id, placeholder, register, error }: textareaProp) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">{title}</label>
            <div className="mt-2.5">
                <textarea
                    id={id}
                    {...register(id)}   // 👈 hook form connection
                    placeholder={placeholder}
                    rows={5}
                    className={`block w-full rounded-xl px-4 py-3.5 text-base text-white outline-1 -outline-offset-1
          ${error ? "outline-red-500 focus:outline-red-500" : "outline-zinc-600 focus:outline-rose-400 focus:outline-2"} 
          placeholder:text-zinc-400/75 bg-zinc-800 resize-none`}
                />
                {error && <p className="mt-1 text-sm text-red-400">{error.message}</p>}
            </div>
        </div>
    );
}

type cImgProp = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    classNames?: string,
};

export function CustomImg({
    src,
    alt,
    width,
    height,
    fill = false,
    sizes,
    classNames
}: cImgProp) {
    const [isImgLoading, setImgLoading] = useState(true);
    return (
        <div className={`relative ${classNames}`}>
            {
                isImgLoading && (
                    <div className="absolute inset-0 z-20 bg-zinc-700 animate-pulse rounded-[inherit]"></div>
                )
            }
            <Image
                src={src}
                alt={alt}
                sizes={sizes}
                {...(fill
                    ? { fill: true }
                    : { width: width, height: height })}
                onLoadingComplete={() => setImgLoading(false)}
                className={`transition-opacity duration-300 rounded-[inherit] aspect-[inherit] ${isImgLoading ? 'opacity-0' : 'opacity-100'}`}
            />
        </div>
    );
}


export function Logo() {
    return (
        <div className="flex lg:flex-1">
            <span className='text-zinc-200 text-xl'>{"< "} <span className='font-extrabold bg-logo text-transparent bg-clip-text'>Suraj</span> {"/>"}</span>
        </div>
    )
}



