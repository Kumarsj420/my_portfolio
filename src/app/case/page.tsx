import type { Metadata } from "next";
import { Head, SubHead, Para, UL, MyTag, MinHead, CustomImg } from "../components/decoration";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
    title: "Case Study Demo Title",
    description: "case demo description",
};

const frontendTech = [
    {
        icon: 'devicon:html5',
        title: 'HTML5'
    },
    {
        icon: 'devicon:css3',
        title: 'CSS'
    },
    {
        icon: 'logos:javascript',
        title: 'Java Script',
        iconSize: 'size-4 sm:size-5'
    },
]

const backendTech = [
    {
        icon: 'skill-icons:php-dark',
        title: 'PHP',
    },
    {
        icon: 'vscode-icons:file-type-sql',
        title: "SQL"
    }
]

const designTech = [
    {
        title: 'Figma',
        icon: 'skill-icons:figma-dark',
    }
]

const vcontrolTech = [
    {
        title: 'Github',
        icon: 'ph:github-logo-duotone',
    },
    {
        title: 'Git',
        icon: 'skill-icons:git'
    }
]


const hostingTech = [
    {
        title: 'Hostinger',
        icon: 'simple-icons:hostinger'
    }
]

export default function Work() {
    return (
        <>
            <section className="mt-3">
                <Head>
                    Building A <span className="text-rose-400">Tier List </span>  Playground
                </Head>
                <Para>
                    Hey everyone! In this case study, I’m going to share my journey of creating a website for tier lists. It wasn’t all smooth sailing—I came across quite a few challenges along the way, from design decisions to technical roadblocks. But with some trial, error, and problem-solving, I managed to turn those hurdles into valuable learning experiences. Here’s a breakdown of how I built it, the issues I faced, and the solutions that helped me bring the project to life.
                </Para>
            </section>
            <section className="mt-12">
                <SubHead>TierCards: My Creation for Ranking Everything from A to D</SubHead>
                <Para>
                    <span>
                        TierCards is a fun and flexible web app where users can create tier lists for literally anything — from favorite games and characters to snacks or movies. You can upload your own images, grab them from the internet, or use the ones already saved in TierCards’ database
                    </span>
                    <span>
                        Make your tier list truly yours by customizing colors, backgrounds, and titles, give it a unique name, and even embed it in your own projects. Want a copy? Download your tier list as a PNG or JPEG, or publish it online with detailed image info, categories, and let others vote on your creation.
                        TierCards is all about creativity, personalization, and sharing your rankings in a fun way.
                    </span>
                </Para>
                <div className="mt-7 flex gap-2 items-center">
                    <span className="text-lg sm:text-xl text-zinc-400 font-light">Visit</span>
                    <a href="https://tiercards.com/template" target="_blank" className="group text-lg sm:text-xl text-rose-500 hover:text-rose-400 font-medium tracking-wide flex items-center">
                        Tiercards.com
                        <Icon icon='uil:arrow-right' className="size-7 transition-transform duration-200 group-hover:translate-x-1.5 translate-y-0.5"></Icon>
                    </a>
                </div>
                <a href="https://tiercards.com/template" target="_blank" className=" block p-2 mt-6 hover:scale-102 transition duration-200 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 blur-lg opacity-15 group-hover:opacity-25"></div>
                    <CustomImg
                        src='/images/template.webp'
                        alt='Tier Card Image'
                        classNames="rounded-3xl ring-1 ring-rose-500/20 aspect-video hover:ring-rose-500"
                        fill
                        sizes="(min-width: 1340px) 912px, (min-width: 1040px) calc(85.71vw - 219px), (min-width: 680px) calc(98.82vw - 52px), (min-width: 560px) calc(108vw - 93px), calc(10.83vw + 434px)"
                    />
                </a>

            </section>
            <section className="mt-12">
                <SubHead>Tier Lists Should Be Fun… But They Weren’t</SubHead>
                <Para>
                    I’ve always enjoyed making tier lists — it’s fun to argue whether pizza belongs in S-tier or just A-tier. But every time I used the existing tier-list websites, I kept running into the same frustrations:
                </Para>
                <UL>
                    <li className="list-disc marker:text-rose-400">The UI felt clunky and straight out of the early 2000s.</li>
                    <li className="list-disc marker:text-rose-400">No customization — you were stuck with whatever bland look the site gave you.</li>
                    <li className="list-disc marker:text-rose-400">Couldn’t even add simple titles or tooltips to images (so half the time, no one knew what I was ranking 😅).</li>
                    <li className="list-disc marker:text-rose-400">
                        And seriously… no embed option? I wanted to share my tier list inside other projects, but nope, not possible.
                    </li>
                    <li className="list-disc marker:text-rose-400">
                        Overall, the experience just wasn’t fun — and tier lists are supposed to be fun!
                    </li>
                </UL>
                <Para>
                    So I decided to fix all that and build my own version of a tier-list website — one that actually feels modern, customizable, and enjoyable to use. 🎉
                </Para>
            </section>
            <section className="mt-12 flex flex-col md:flex-row gap-6 md:gap-7">
                <div className="flex-1">
                    <SubHead>What I Was Aiming For</SubHead>
                    <Para>
                        When I decided to build TierCards, I wanted it to feel modern, smooth, and fun to use — not like those clunky old tier list sites that make you feel like you’re stuck in 2009. So my main goals were:
                    </Para>
                    <UL>
                        <li className="relative before:absolute before:content-['*'] before:-translate-x-4 before:text-sky-400">A beautiful UI ✨ → Clean, responsive, and actually nice to look at.</li>
                        <li className="relative before:absolute before:content-['*'] before:-translate-x-4 before:text-sky-400">Theme customization 🎨 → Let users pick from premade templates or go wild with custom colors, title styles, and backgrounds.</li>
                        <li className="relative before:absolute before:content-['*'] before:-translate-x-4 before:text-sky-400">Full control of images 🖼️ → Border radius, aspect ratio, and style tweaks, because why not?</li>
                        <li className="relative before:absolute before:content-['*'] before:-translate-x-4 before:text-sky-400">
                            Lightweight and fast ⚡ → Nobody wants a tier list that loads slower than a PowerPoint.
                        </li>
                        <li className="relative before:absolute before:content-['*'] before:-translate-x-4 before:text-sky-400">
                            Public or private 🔒 → Share your masterpiece with the world, or keep it to yourself.
                        </li>
                        <li className="relative before:absolute before:content-['*'] before:-translate-x-4 before:text-sky-400">
                            Download & share 📥 → Export as PNG/JPEG or embed it wherever you like.
                        </li>
                        <li className="relative before:absolute before:content-['*'] before:-translate-x-4 before:text-sky-400">
                            User-friendly 🧩 → No confusing menus, no extra clicks — just rank, drag, drop, done.
                        </li>
                    </UL>
                    <Para>
                        Basically, my goal was simple: make tier lists fun again.
                    </Para>
                </div>
                <div className="w-full md:w-1/3">
                    <CustomImg
                        src="/images/setting.webp"
                        alt="tier cards customisation image"
                        fill
                        classNames="rounded-2xl ring-1 ring-zinc-800 shadow shadow-zinc-950/90 max-w-lg m-auto w-3/4 sm:w-full aspect-[9/16]"
                        sizes="(min-width: 1340px) 309px, (min-width: 1040px) calc(28.57vw - 68px), (min-width: 780px) calc(33.33vw - 16px), 462px"
                    />
                </div>
            </section>
            <section className="mt-12">
                <SubHead>
                    Challenges & Solutions
                </SubHead>
                <MinHead>
                    Challenge 1: Making Drag & Drop Actually Work Everywhere
                </MinHead>
                <Para>
                    One key feature I wanted for TierCards was a smooth drag-and-drop — just grab an image and drop it into a tier, simple as that. I first tried building it from scratch with JavaScript’s native Drag & Drop API. It worked okay on desktops, but on mobile the touch controls were clunky, responsiveness broke, and the whole thing felt unusable. Since most users browse on phones, that wasn’t going to fly.
                </Para>
                <MinHead>
                    -Solution: Choosing the Right Library
                </MinHead>
                <Para>
                    Instead of wasting time reinventing the wheel, I researched drag-and-drop libraries. Two interesting options caught my eye: Draggable (by Shopify) and Dragula.
                    I tested both:
                </Para>
                <UL>
                    <li className="list-disc marker:text-green-400">
                        Dragula was simple but limited — it lacked smooth animations and felt too restrictive.
                    </li>
                    <li className="list-disc marker:text-green-400">
                        Draggable (Shopify), on the other hand, had a modern API, supported touch events out of the box, and gave me exactly the flexibility I needed.
                    </li>
                </UL>
                <Para>
                    After comparing performance and testing across devices, Draggable won hands down. It provided:
                </Para>
                <UL>
                    <li className="list-disc marker:text-green-400">
                        Reliable drag-and-drop across desktop and mobile
                    </li>
                    <li className="list-disc marker:text-green-400">
                        Smooth animations and transitions
                    </li>
                    <li className="list-disc marker:text-green-400">
                        Clean documentation and active support
                    </li>
                </UL>
                <Para>
                    By switching to Draggable, I turned a frustrating user experience into one that feels natural and fun. Now users can rank items effortlessly, whether they’re on a giant monitor or a tiny phone screen.
                </Para>
                <br />
                <MinHead>Challenge 2: Giving Users All the Customization Power</MinHead>
                <Para>
                    <span>
                        Tier lists aren’t just about ranking stuff — they should also look cool. I wanted users to have maximum control over how their lists appear: image styles (aspect ratio, border-radius, border width, border color), tooltips (on/off), and even full-blown themes.
                    </span>
                    <span>
                        The plan? Users could not only tweak things like title color, background, list background but also pick from pre-made, eye-pleasing templates. And here’s the kicker — these settings had to be saved. If users came back later, their customizations should still be there (cookies handled that). If they published, the exact design needed to be stored in the database.
                    </span>
                    <span>
                        Sounds fun, right? But the actual implementation was tricky. Handling so many moving parts meant I needed clean, modular code.
                    </span>
                </Para>
                <MinHead>-Solution: Centralized Settings + Flexible Functions</MinHead>
                <Para>
                    <span>
                        The solution was to introduce a single JavaScript settings object that kept track of everything a user customized. Every tweak — whether it was changing a border radius or selecting a gradient background — updated this object.
                        From there, I wrote individual functions like setTitleColor() or setBorderRadius() to update both the UI and the DB. For gradients, I built a custom color picker that even supported gradient text using bg-clip-text.
                    </span>
                    <span>
                        Result? A flexible system where users could design their tier list however they wanted — from subtle pastel themes to full rainbow chaos — and their work always saved and synced.
                    </span>
                </Para>
                <br />
                <MinHead>
                    Challenge 3: Making the UI Truly Responsive
                </MinHead>
                <Para>
                    TierCards had to work seamlessly on all screen sizes — from huge desktop monitors to tiny mobile phones. The tricky part was that tier lists themselves are grid-heavy and drag-and-drop intensive, which don’t naturally adapt well to small screens. On desktops, everything looked neat, but on phones the layout got squished, text overlapped, and dragging items became a mess.
                </Para>
                <MinHead>
                    -Solution: Mobile-First + Flexible Grids
                </MinHead>
                <Para>
                    <span>
                        I approached this with a mobile-first design using TailwindCSS. Instead of hardcoding widths/heights, I built flexible grid layouts that could shrink or expand smoothly. For drag-and-drop on smaller screens, I tweaked the spacing and touch targets to make interactions finger-friendly. I also introduced breakpoints for tier list scaling, so users could still see the whole list without endless side-scrolling.
                    </span>
                    <span>
                        The result: TierCards felt equally natural on a 6-inch phone as on a 27-inch desktop.
                    </span>
                </Para>
                <br />
                <MinHead>
                    Challenge 4: Handling Data with PHP + MySQL
                </MinHead>
                <Para>
                    TierCards wasn’t just about design — it needed to store and manage a lot of user data: tier lists, images, customization settings, published themes, votes, etc. The challenge? I was a beginner in backend development, and I needed a way to make everything both reliable and fast. My early code quickly turned messy, with repeated queries and inefficient database calls.
                </Para>
                <MinHead>
                    -Solution: Structured DB + Clean PHP API
                </MinHead>
                <Para>
                    <span>
                        I sat down and restructured the database to keep things modular — separate tables for users, tier lists, images, votes, and themes. This way, everything was linked by IDs instead of storing blobs of data in one place. On the PHP side, I built clean API endpoints to handle each operation: creating a tier list, saving customization, voting, etc. Using prepared statements in MySQL also helped prevent SQL injection and kept queries safe.
                    </span>
                    <span>
                        By the end, TierCards had a stable backend that could handle publishing, private lists, and live updates — without slowing down or breaking when more users jumped in
                    </span>
                </Para>

            </section>
            <section className="mt-12">
                <SubHead>Tier List Embed Example</SubHead>
                <br />
                <CustomImg src="/tiercard.webp" alt="tiercard image" fill classNames="w-full aspect-square rounded-xl ring-1 ring-zinc-700/80 shadow-zinc-950/80"></CustomImg>
            </section>
            <section className="mt-12 hidden sm:block">
                <SubHead>The Tech Stack That Made It Happen</SubHead>
                <UL >
                    <li className="flex gap-3 items-center mt-5">
                        <span className="font-semibold text-lg w-21">Frontend : </span>
                        <span className="flex gap-5 scale-80 -translate-x-7">
                            {
                                frontendTech.map((item: any) => (
                                    <MyTag key={item.title} title={item.title} icon={item.icon} iconSize={item.iconSize} />
                                ))
                            }
                        </span>
                    </li>
                    <li className="flex gap-3 items-center mt-2.5">
                        <span className="font-semibold text-lg w-21">Backend : </span>
                        <span className="flex gap-5 scale-80 -translate-x-2">
                            {
                                backendTech.map((item: any) => (
                                    <MyTag key={item.title} title={item.title} icon={item.icon} iconSize={item.iconSize} />
                                ))
                            }
                        </span>
                    </li>
                    <li className="flex gap-3 items-center mt-2.5">
                        <span className="font-semibold text-lg w-21">Design : </span>
                        <span className="flex gap-5 scale-80">
                            {
                                designTech.map((item: any) => (
                                    <MyTag key={item.title} title={item.title} icon={item.icon} iconSize={item.iconSize} />
                                ))
                            }
                        </span>
                    </li>
                    <li className="flex gap-3 items-center mt-2.5">
                        <span className="font-semibold text-lg w-21">Version : </span>
                        <span className="flex gap-5 scale-80 -translate-x-2.5">
                            {
                                vcontrolTech.map((item: any) => (
                                    <MyTag key={item.title} title={item.title} icon={item.icon} iconSize={item.iconSize} />
                                ))
                            }
                        </span>
                    </li>
                    <li className="flex gap-3 items-center mt-2.5">
                        <span className="font-semibold text-lg w-21">Hosting : </span>
                        <span className="flex gap-5 scale-80 ">
                            {
                                hostingTech.map((item: any) => (
                                    <MyTag key={item.title} title={item.title} icon={item.icon} iconSize={item.iconSize} />
                                ))
                            }
                        </span>
                    </li>
                </UL>
            </section>
            <section className="mt-12">
                <SubHead>Nailed It (and Learned a Ton Along the Way)</SubHead>
                <Para>
                    <span>
                        Looking back, I can proudly say TierCards turned out just the way I had imagined — maybe even better. 🚀 Over 6 months of building, breaking, fixing, and experimenting, I leveled up my skills big time. I became way more confident in JavaScript, got hands-on with AJAX, mastered DOM manipulation, and even picked up cool tricks like debouncing and throttling. Somewhere along the way, I also ended up creating my own little utility function library that kept everything clean and reusable.
                    </span>
                    <span>
                        This was the longest project I’ve ever worked on, and it genuinely pushed me to think like a problem-solver instead of just a coder. Sure, I kinda regret not diving into Next.js and Node.js at the time (since that would’ve made the app even more powerful), but honestly, I’m still amazed at how fast and responsive TierCards feels with just PHP + MySQL + plain JS.
                    </span>
                    <span>
                        At the end of the day, I set out to make a fun, customizable tier list builder that didn’t exist anywhere else — and I did it. Mission accomplished.
                    </span>
                </Para>
            </section>
        </>
    )
}