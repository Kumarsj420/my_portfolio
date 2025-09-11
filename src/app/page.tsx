
import React from "react";
import { MyTag, DoCards, SubHead, Para, Head } from "./components/decoration";

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
    iconSize: 'size-4 sm:size-5'
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
    iconSize: 'size-4 sm:size-5'
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
    iconColor: ['bg-orange-500/20', 'text-orange-500']
  },
  {
    title: 'Backend Development',
    p: 'Creating APIs and server-side logic with Node.js & Express.',
    icon: 'heroicons:server-stack',
    iconColor: ['bg-sky-500/20', 'text-sky-500']
  },
  {
    title: 'Full-Stack Projects',
    p: 'Designing complete solutions from UI to database.',
    icon: 'hugeicons:web-design-02',
    iconColor: ['bg-emerald-500/20', 'text-emerald-500']
  },
  {
    title: 'Continuous Learning',
    p: 'Exploring AI integrations, performance optimization, and modern tools.',
    icon: 'hugeicons:online-learning-04',
    iconColor: ['bg-pink-500/20', 'text-pink-500']
  }
]

export default function Home() {
  return (
    <div>
      <section className="mt-3">
        <Head>
          <span className="relative z-10 after:absolute  after:inset-0 after:-z-10 after:rounded-full after:bg-cyan-200/75 after:opacity-20 after:blur-xl hover:after:opacity-30">
            Hi, I'm <span className=" bg-logo text-transparent bg-clip-text">
              Suraj Kumar
            </span>
          </span>
        </Head>

        <Para>
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
        </Para>

      </section>
      <section className="mt-12">
        <SubHead>What I Do?</SubHead>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-8">
          {
            cardContent.map((item) => (
              <DoCards key={item.title} tlIconColor={item.iconColor} title={item.title} p={item.p} icon={item.icon} />
            ))
          }
        </div>
      </section>
      <section className="mt-12">
        <SubHead>Coding Skills</SubHead>
        <ul className="mt-5 flex gap-4 flex-wrap">
          {
            cSkills.map((item: any) => (
              <li key={item.title}>
                <MyTag title={item.title} icon={item.icon} iconSize={item.iconSize} />
              </li>

            ))
          }
        </ul>
      </section>
      <section className="mt-12">
        <SubHead>Tools I Worked With</SubHead>
        <ul className="mt-5 flex gap-4 flex-wrap">
          {
            toolSkills.map((item: any) => (
              <li key={item.title}>
                <MyTag title={item.title} icon={item.icon} iconSize={item.iconSize} />
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
