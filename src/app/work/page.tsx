import type { Metadata } from "next";
import { Head, SubHead, Para, CustomImg, MinHead, UL } from "../components/decoration";

export const metadata: Metadata = {
    title: "About Me | My Portfolio",
    description: "Learn more about me and my background.",
};


export default function Work() {
    return (
        <>
            <Head>Work & <span className="text-rose-400">Experience</span> </Head>
            <Para>
                This Page showcases my work and experience in web development, featuring projects I’ve completed for real clients. Each project has given me the chance to apply modern technologies, create responsive and user-friendly designs, and deliver solutions that align with client goals. Working on real-world projects has strengthened my technical skills while also improving my ability to communicate, adapt, and solve problems effectively. These experiences reflect both my professional growth and my commitment to building websites that make a meaningful impact.
            </Para>

            <section className="mt-12 flex flex-col gap-20 lg:gap-16">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 ">
                    <div className="order-2 lg:order-1" >
                        <div className="glass-effect rounded-3xl p-8 card-hover">
                            <div className="flex  mb-1 gap-3">
                                <CustomImg src="/notifybreach-favicon.webp" alt="notify breach logo" width={30} height={30}></CustomImg>
                                <div>
                                    <SubHead>Notify Breach </SubHead>
                                    <span className="text-zinc-400 text-sm font-light">April 2025 - June 2025</span>
                                </div>
                            </div>

                            <Para>
                                NotifyBreach is a freelancing project I worked on for a client in the cybersecurity space. The goal was to create a clean, light-themed website that not only introduced their services but also offered interactive tools for their users.
                            </Para>
                            <MinHead>What I Built</MinHead>
                            <UL>
                                <li className="list-disc marker:text-rose-400"> <span className="text-white underline">Full UI/UX Design + Development</span> → I designed and coded core pages like Blog, About Us, Contact Us, and a custom Service Request Form.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Operation Dashboard</span> → Collaborated with the client’s API developer to create a tool at <a href="https://operation.notifybreach.com/" className="text-rose-500 hover:text-rose-400">operation.notifybreach.com</a> . This dashboard lets users view and analyze live cyber logs, making the site more than just informational — it’s functional.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Lightweight & Responsive</span>  → Focused on a light theme, modern UI, and mobile-friendly design so the site feels approachable and professional.</li>
                            </UL>

                            <a href="https://notifybreach.com/" rel="nofollow" target="_blank" className="flex flex-wrap gap-4 mt-5">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600/90  px-3.5 py-2.5 hover:from-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 text-white cursor-pointer font-medium focus-visible:outline-2 focus-visible:outline-offset-2 "
                                >
                                    Notifybreach.com
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.6"
                                            d="m12 19l7-7l-7-7m7 7H5"
                                        />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 hover:scale-102 hover:brightness-105 duration-200 transition">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/80 to-orange-500/80 rounded-3xl blur-xl opacity-30"></div>
                            <div className="relative bg-zinc-800 rounded-3xl p-8 border border-orange-400/60 shadow-lg">
                                <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl h-96 flex items-center justify-center">
                                    <div className="rounded-xl w-full h-full relative ">
                                        <CustomImg src="/nb.webp" alt="notify breach ui" fill={true} classNames="w-full h-full rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 ">
                    <div className="order-2 lg:order-1" >
                        <div className="glass-effect rounded-3xl p-8 card-hover">
                            <div className="flex  mb-1 gap-3">
                                <CustomImg src="/ck-fav.webp" alt="notify breach logo" width={30} height={30}></CustomImg>
                                <div>
                                    <SubHead>Cyber Katha </SubHead>
                                    <span className="text-zinc-400 text-sm font-light">June 2025 - July 2025</span>
                                </div>
                            </div>

                            <Para>
                                CyberKatha is an NGO that focuses on spreading cybersecurity awareness across schools, institutions, and even in collaboration with the police. They run workshops, events, and awareness drives to make people safer online.
                            </Para>
                            <MinHead>What I Built</MinHead>
                            <UL>
                                <li className="list-disc marker:text-rose-400"> <span className="text-white underline">Core Pages</span> → Designed and developed pages like About, Contact, Events, and Donate with fully responsiveness.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Event Registrations</span> → Added a simple yet effective event registration form so people can directly sign up for upcoming workshops and awareness drives.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Donation System</span>  → Integrated Instamojo for secure donations, making it easy for supporters to contribute online.</li>
                            </UL>

                            <a href="https://cyberkatha.com/" rel="nofollow" target="_blank" className="flex flex-wrap gap-4 mt-5">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-rose-500 to-rose-600/90  px-3.5 py-2.5 hover:from-rose-400 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 text-white cursor-pointer font-medium focus-visible:outline-2 focus-visible:outline-offset-2 "
                                >
                                    CyberKatha.com
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.6"
                                            d="m12 19l7-7l-7-7m7 7H5"
                                        />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 hover:scale-102 hover:brightness-105 duration-200 transition">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/80 to-rose-500/80 rounded-3xl blur-xl opacity-30"></div>
                            <div className="relative bg-zinc-800 rounded-3xl p-8 border border-rose-400/60 shadow-lg">
                                <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl h-96 flex items-center justify-center">
                                    <div className="rounded-xl w-full h-full relative">
                                        <CustomImg src="/cyber.webp" alt="cyber katha ui" fill={true} classNames="w-full h-full rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 ">
                    <div className="order-2 lg:order-1" >
                        <div className="glass-effect rounded-3xl p-8 card-hover">
                            <div className="flex  mb-1 gap-3">
                                <CustomImg src="/adv_prabhat.webp" alt="notify breach logo" width={30} height={30}></CustomImg>
                                <div>
                                    <SubHead>Advocate Prabhat – Portfolio </SubHead>
                                    <span className="text-zinc-400 text-sm font-light">July 2025</span>
                                </div>
                            </div>

                            <Para>
                                Advocate Prabhat is a law professional specializing in litigation and legal consultancy. He needed a clean and professional online presence to showcase his profile and allow clients to easily reach out.
                            </Para>
                            <MinHead>What I Built</MinHead>
                            <UL>
                                <li className="list-disc marker:text-rose-400"> <span className="text-white underline">Home/About Page</span> → A polished one-page layout that highlights his background, expertise, and practice areas in a clear and trustworthy way.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Consultation Page</span> → A dedicated section where potential clients can book a consultation or get in touch directly.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Design Approach</span>  → Focused on a minimalist and professional UI, ensuring the site feels authoritative yet simple for visitors.</li>
                            </UL>

                            <a href="https://cyberkatha.com/" rel="nofollow" target="_blank" className="flex flex-wrap gap-4 mt-5">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600/90  px-3.5 py-2.5 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 text-white cursor-pointer font-medium focus-visible:outline-2 focus-visible:outline-offset-2 "
                                >
                                    Advocateprabhat.com
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.6"
                                            d="m12 19l7-7l-7-7m7 7H5"
                                        />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 hover:scale-102 hover:brightness-105 duration-200 transition">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/80 to-amber-500/80 rounded-3xl blur-xl opacity-30"></div>
                            <div className="relative bg-zinc-800 rounded-3xl p-8 border border-amber-400/60 shadow-lg">
                                <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl h-96 flex items-center justify-center">
                                    <div className="rounded-xl w-full h-full relative">
                                        <CustomImg src="/prabhat.webp" alt="advocate prabhat ui" fill={true} classNames="w-full h-full rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 ">
                    <div className="order-2 lg:order-1" >
                        <div className="glass-effect rounded-3xl p-8 card-hover">
                            <div className="flex  mb-1 gap-3">
                                <CustomImg src="/fontkart_fav.png" alt="notify breach logo" width={30} height={30}></CustomImg>
                                <div>
                                    <SubHead>FontKart - Fonts Maker </SubHead>
                                    <span className="text-zinc-400 text-sm font-light">February 2024 - March 2024</span>
                                </div>
                            </div>

                            <Para>
                                FontKart is a fun and experimental project where users can generate stylish and fancy fonts for games, Instagram bios, and other social media platforms. The idea was to create a playful tool that goes beyond simple text styling.
                            </Para>
                            <MinHead>What I Built</MinHead>
                            <UL>
                                <li className="list-disc marker:text-rose-400"> <span className="text-white underline">Font Generator </span> → Users can instantly generate unique fonts, nicknames, emoticons, and even text art.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Themes</span> → Added both light and dark modes, so users can switch the experience according to their preference.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Save & Favorite </span>  → Users can mark and save their favorite fonts for later use.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Playful UI  </span>  → Designed with a cool and fun aesthetic, making the tool engaging rather than boring.</li>
                            </UL>

                            <a href="https://fontkart.com/" rel="nofollow" target="_blank" className="flex flex-wrap gap-4 mt-5">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600/90  px-3.5 py-2.5 hover:from-indigo-400 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 text-white cursor-pointer font-medium focus-visible:outline-2 focus-visible:outline-offset-2 "
                                >
                                    Fontkart.com
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.6"
                                            d="m12 19l7-7l-7-7m7 7H5"
                                        />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 hover:scale-102 hover:brightness-105 duration-200 transition">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/80 to-indigo-500/80 rounded-3xl blur-xl opacity-30"></div>
                            <div className="relative bg-zinc-800 rounded-3xl p-8 border border-indigo-400/60 shadow-lg ">
                                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl h-96 flex items-center justify-center  ">
                                    <div className="rounded-xl w-full h-full relative">
                                        <CustomImg src="/fontkart.webp" alt="fontkart ui" fill={true} classNames="w-full h-full rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 ">
                    <div className="order-2 lg:order-1" >
                        <div className="glass-effect rounded-3xl p-8 card-hover">
                            <div className="flex  mb-1 gap-3">
                                <CustomImg src="/tc_favicon.webp" alt="notify breach logo" width={30} height={30}></CustomImg>
                                <div>
                                    <SubHead>Tier Cards - My Creation </SubHead>
                                    <span className="text-zinc-400 text-sm font-light">July 2024 - December 2024</span>
                                </div>
                            </div>

                            <Para>
                                 TierCards is my biggest and most playful project so far — a full-fledged website where anyone can create, customize, and share tier lists. Whether it’s ranking video game characters, favorite foods, or the weirdest memes, TierCards makes it fun and effortless.
                            </Para>
                            <MinHead>What I Built</MinHead>
                            <UL>
                                <li className="list-disc marker:text-rose-400"> <span className="text-white underline">Drag & Drop Ranking  </span> → Smooth and responsive drag-and-drop interaction for desktop and mobile..</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Full Customization</span> → Users can change themes, colors, borders, aspect ratios, tooltips, and even pick from pre-made templates.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Login, Save & Share</span>  → Users can login and their tier lists can be saved privately, published, or even embedded elsewhere.</li>
                                <li className="list-disc marker:text-rose-400 "> <span className="text-white underline">Lightweight & Responsive </span>  → Focused on performance and mobile usability, making sure it loads fast and works everywhere.</li>
                            </UL>

                            <a href="https://tiercards.com/" rel="nofollow" target="_blank" className="flex flex-wrap gap-4 mt-5">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600/90  px-3.5 py-2.5 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 text-white cursor-pointer font-medium focus-visible:outline-2 focus-visible:outline-offset-2 "
                                >
                                    TierCards.com
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.6"
                                            d="m12 19l7-7l-7-7m7 7H5"
                                        />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 hover:scale-102 hover:brightness-105 duration-200 transition">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/80 to-blue-500/80 rounded-3xl blur-xl opacity-30"></div>
                            <div className="relative bg-zinc-800 rounded-3xl p-8 border border-blue-400/60 shadow-lg">
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-96 flex items-center justify-center">
                                    <div className="rounded-xl w-full h-full relative">
                                        <CustomImg src="/tiercard.webp" alt="tier cards ui" fill={true} classNames="w-full h-full rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}