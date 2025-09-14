"use client";

import { MyInput, MyTextarea, SubHead, Para, MotionRight, MotionUp, MotionLeft } from "../components/decoration";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "./schema";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }, //
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState({ txt: 'Kindly complete the contact form, and I’ll reach out to you as soon as possible .', type: '' })

    const onSubmit = async (data: ContactFormData) => {
        try {
            setIsLoading(true);
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (res.ok) {
                setMsg({ txt: '✅ Message sent successfully!', type: 'text-green-400' });
            } else {
                setMsg({ txt: `❌ Failed: ${result.message}`, type: 'text-red-400' })
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setMsg({ txt: `❌ Something went wrong.`, type: 'text-red-400' })
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div >
                <MotionRight>
                    <SubHead>
                        Contact Form
                    </SubHead>
                </MotionRight>
                <MotionUp>
                    <Para> <span className={msg.type}>{msg.txt}</span></Para>
                </MotionUp>
            </div>
            <MotionLeft>
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-5">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <MyInput
                            title="Full Name"
                            type="text"
                            id="fullName"
                            placeholder="Your Name"
                            register={register}
                            error={errors.fullName}
                        />
                        <MyInput
                            title="Email"
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            register={register}
                            error={errors.email}
                        />
                        <div className="sm:col-span-2">
                            <MyInput
                                title="Subject"
                                type="text"
                                id="subject"
                                placeholder="Enter Subject"
                                register={register}
                                error={errors.subject}
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <MyTextarea
                                title="Message"
                                id="message"
                                placeholder="Write Message"
                                register={register}
                                error={errors.message}
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="rounded-lg disabled:from-zinc-700 disabled:shadow-none disabled:text-zinc-300/80 disabled:pointer-events-none disabled:to-zinc-600 disabled:after:bg-zinc-700 bg-gradient-to-t from-rose-400 to-rose-700 px-4 py-2.5 text-sm font-medium text-white hover:brightness-122 focus-visible:outline-2 focus-visible:outline-offset-2  shadow-lg shadow-rose-500/45 hover:shadow-rose-500/65 hover:scale-107 transition-all duration-400 relative after:absolute after:inset-[2px] after:bg-rose-500 z-10 after:-z-10 after:rounded-lg cursor-pointer flex ml-auto"
                        >
                            {
                                isLoading && (
                                    <span className="flex items-center gap-2">
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4  animate-spin text-rose-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="white" />
                                        </svg>
                                        Loading...
                                    </span>
                                )
                            }
                            <span className={isLoading ? 'hidden' : 'flex items-center gap-2'}>
                                <Icon
                                    icon="material-symbols:phone-in-talk-outline-sharp"
                                    className="size-5"
                                />
                                Let's Talk
                            </span>
                        </button>
                    </div>
                </form>
            </MotionLeft>
        </>
    );
}
