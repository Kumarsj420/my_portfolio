"use client"
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState, useRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { motion, useInView, Easing } from "motion/react"

const animationPresets = {
    slideRight: {
        initial: { x: 30, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    },
    slideLeft: {
        initial: { x: -30, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    },
    slideUp: {
        initial: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    },
    slideDown: {
        initial: { y: -30, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    },
    fadeScale: {
        initial: { scale: 0.6, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    },
    fadeOnly: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    }
};

export function usePageAnimation(
    preset: keyof typeof animationPresets = 'slideRight',
    customConfig?: {
        duration?: number;
        ease?: Easing | Easing[];
        delay?: number;
    }
) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const { initial, animate } = animationPresets[preset];
    const { duration = 0.3, ease = "easeInOut", delay = 0 } = customConfig || {};

    return {
        ref,
        initial,
        animate: isInView ? animate : initial,
        transition: { duration, ease, delay },
        viewport: { once: false }
    };
}

type Tags = {
    title: string,
    icon: string,
    iconSize: string,
}

export function MyTag({ title, icon, iconSize }: Tags) {
    const tagAnime = usePageAnimation('fadeScale', { duration: 0.2 });
    return (
        <motion.div
            {...tagAnime}
            whileHover={{ scale: 1.05, filter: 'brightness(1.26)' }}
            className="text-zinc-300 px-4 py-3 bg-gradient-to-b from-zinc-700 to-zinc-800 w-max rounded-full relative z-10 after:absolute after:-z-10 after:inset-[0.11em] after:bg-zinc-800 after:rounded-full flex items-center gap-2.5 font-medium shadow shadow-zinc-950/70 cursor-default  text-sm sm:text-base">
            <Icon icon={icon} className={`${iconSize ?? 'size-5 sm:size-6'}`} />
            <span>{title}</span>
        </motion.div>
    )
}

type Cards = {
    tlIconColor: any,
    icon: string,
    title: string,
    p: string
}


export function DoCards({ tlIconColor, icon, title, p }: Cards) {
    const doAnime = usePageAnimation('fadeScale', { duration: 0.3 });
    return (
        <motion.div
            {...doAnime}
            whileHover={{ scale: 1.04, filter: 'brightness(1.26)' }}
            className="bg-gradient-to-b from-zinc-700 to-zinc-800 px-6 py-5 lg:px-8 lg:py-7 rounded-xl relative  after:absolute after:inset-[0.11em] after:bg-zinc-800 after:rounded-xl z-10 after:-z-10 flex gap-7 items-start shadow-lg shadow-zinc-950/45">
            <div className={`p-3.5 ${tlIconColor[0]} w-max aspect-square rounded-full shadow-lg shadow-zinc-900/30`}>
                <Icon icon={icon} className={`${tlIconColor[1]} size-8 sm:size-9`} />
            </div>
            <div>
                <h3 className="text-white text-lg sm:text-xl font-medium mb-1.5">{title}</h3>
                <p className="text-zinc-300 font-light text-sm sm:text-base">{p}</p>
            </div>
        </motion.div>
    )
}

type ChildProp = {
    children: React.ReactNode
}

export function MotionLeft({ children }: ChildProp) {
    const animationProps = usePageAnimation('slideLeft', { duration: 0.3 });
    return (
        <motion.div
            {...animationProps}
        >
            {children}
        </motion.div>
    )
}

export function MotionScale({ children }: ChildProp) {
    const animationProps = usePageAnimation('fadeScale', { duration: 0.3 });
    return (
        <motion.div
            {...animationProps}
        >
            {children}
        </motion.div>
    )
}

export function MotionRight({ children }: ChildProp) {
    const animationProps = usePageAnimation('slideRight', { duration: 0.3 });
    return (
        <motion.div
            {...animationProps}
        >
            {children}
        </motion.div>
    )
}

export function MotionUp({ children }: ChildProp) {
    const animationProps = usePageAnimation('slideUp', { duration: 0.3 });
    return (
        <motion.div
            {...animationProps}
        >
            {children}
        </motion.div>
    )
}

export function Head({ children }: ChildProp) {
    const animationProps = usePageAnimation('slideRight', { duration: 0.3 });
    return (
        <motion.h1
            {...animationProps}
            className="py-1 text-3xl font-semibold sm:text-4xl text-white">
            {children}
        </motion.h1>
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
            className="mt-3.5 font-light text-sm sm:text-base text-zinc-300/95 hover:text-white flex flex-col gap-3.5">
            {
                children
            }
        </p>
    )
}

export function MotionPara({ children }: ChildProp) {
    const animationProps = usePageAnimation('slideUp', { duration: 0.3 });

    return (
        <motion.p
            {...animationProps}
            className="mt-3.5 font-light text-sm sm:text-base text-zinc-300/95 hover:text-white flex flex-col gap-3.5"
        >
            {children}
        </motion.p>
    );
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
            <span className='text-zinc-300/90 text-2xl flex gap-1 items-center'>{"< "} 
                 <CustomImg src="/slogo.webp" alt='logo' width={24} height={24} />
                 {"/>"}</span>
        </div>
    )
}



