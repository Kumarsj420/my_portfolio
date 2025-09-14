import { Head,  MotionScale } from "../components/decoration";
import { Metadata } from "next";
import Form from "./form";
import ContactMap from "./contactMap";

export const metadata: Metadata = {
    title: "Contact Suraj Kumar | Get in Touch for Web Development & Projects",
    description: "Have a question or project in mind? Get in touch through our Contact page. We are here to discuss ideas, collaborations, and opportunities.n",
};

export default function Work() {
    return (
        <>
            <div className="lg:mt-2.5">
                <Head>Contact Me</Head>
            </div>
            <MotionScale>
                <div className="mt-4 rounded-2xl ring-1 ring-zinc-700 shadow-lg shadow-zinc-950/60 h-[350px] bg-zinc-800">
                    <ContactMap />
                </div>
            </MotionScale>
            <div className="mt-16">
                <Form />
            </div>
        </>
    )
}
