import Image from "next/image";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import React from "react";

import { MyTag, DoCards, SubHead } from "./components/decoration";

const cSkills = [
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
    iconSize: 'size-5'
  },
  {
    title: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon'
  },
  {
    title: 'React',
    icon: 'devicon:react'
  },
  {
    title: 'Next JS',
    icon: 'devicon:nextjs'
  },
  {
    title: 'Type Script',
    icon: 'skill-icons:typescript',
  }
];

const toolSkills = [
  {
    title: 'Github',
    icon: 'ph:github-logo-duotone',
  },
  {
    title: 'Git',
    icon: 'skill-icons:git'
  },
  {
    title: 'VS Code',
    icon: 'devicon:vscode',
    iconSize: 'size-5'
  },
  {
    title: 'Figma',
    icon: 'skill-icons:figma-dark',
  }
]

const cardContent = [
  {
    title: 'Frontend Development',
    p: 'Building interactive, responsive, eye pleasing interfaces with React & Next.js.',
    icon: 'streamline-plump:graphic-template-website-ui',
    iconColor: 'orange'
  },
  {
    title: 'Backend Development',
    p: 'Creating APIs and server-side logic with Node.js & Express.',
    icon: 'heroicons:server-stack',
    iconColor: 'sky'
  },
  {
    title: 'Full-Stack Projects',
    p: 'Designing complete solutions from UI to database.',
    icon: 'hugeicons:web-design-02',
    iconColor: 'emerald'
  },
  {
    title: 'Continuous Learning',
    p: 'Exploring AI integrations, performance optimization, and modern tools.',
    icon: 'hugeicons:online-learning-04',
    iconColor: 'pink'
  }
]

export default function Home() {
  return (<>
    <div className="flex min-h-full flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-[116px] hidden w-64 shrink-0 lg:block h-[calc(100vh-148px)]">
          <Sidebar />
        </aside>

        <main className="flex-1">
          <div>
            <section className="text-white mt-3">
              <h1 className="relative w-max py-1 text-3xl font-semibold sm:text-5xl text-white z-10 after:absolute  after:inset-0 after:-z-10 after:rounded-full after:bg-cyan-200/75 after:opacity-15 after:blur-xl hover:after:opacity-25">
                Hi, I'm <span className=" bg-logo text-transparent bg-clip-text ">
                  Suraj Kumar
                </span>
              </h1>
              <p className="mt-5 font-light text-zinc-300/95 hover:text-white transition duration-200 flex flex-col gap-4">
                <span>
                  Over the past few years, I’ve had the chance to work with startups across a range of industries, including cybersecurity, legal services, design, and tech tools. From building websites for ethical hacking tools to creating online platforms for lawyers and creative professionals, I’ve worn multiple hats – blending technical skills with a strong eye for design and usability.
                </span>
                <span>
                  I love experimenting with new tools and often spend my free time building side projects, tools, and websites – not just for fun, but also to make useful, free-to-use products for others. Whether it’s a UI idea or a mini-app, I enjoy crafting things from scratch and watching them come to life.
                </span>
                <span>
                  I completed my graduation in July 2022 with a B.Sc. in Mathematics from Himachal Pradesh University, and my interest in problem-solving naturally led me into the world of web development.
                </span>
                <span>
                  Always curious and driven to learn, I keep up with the latest technologies to improve my workflow and deliver better results.
                </span>
              </p>
            </section>
            <section className="mt-12">
              <SubHead txt="What I Do?" />
              <div className="mt-5 grid grid-cols-2 grid-rows-2 gap-8">
                {
                  cardContent.map((item) => (
                    <DoCards key={item.title} tlIconColor={item.iconColor} title={item.title} p={item.p} icon={item.icon} />
                  ))
                }
              </div>
            </section>
            <section className="mt-12">
              <SubHead txt="Coding Skills" />
              <ul className="mt-5 flex gap-4 flex-wrap">
                {
                  cSkills.map((item: any) => (
                    <MyTag key={item.title} title={item.title} icon={item.icon} iconSize={item.iconSize} />
                  ))
                }
              </ul>
            </section>
            <section className="mt-12">
              <SubHead txt="Tools I Worked With" />
              <ul className="mt-5 flex gap-4 flex-wrap">
                {
                  toolSkills.map((item: any) => (
                    <MyTag key={item.title} title={item.title} icon={item.icon} iconSize={item.iconSize} />
                  ))
                }
              </ul>
            </section>
          </div>
        </main>

      </div>
    </div>
  </>
  );
}
