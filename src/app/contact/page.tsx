import { Head } from "../components/decoration";
import { Metadata } from "next";
import Form from "./form";
import ContactMap from "./contactMap";

export const metadata: Metadata = {
    title: "Demo Contact Us",
    description: "contact demo description",
};

export default function Work() {
    return (
        <>
            <Head>Contact Me</Head>
            <div className="mt-4 rounded-2xl ring-1 ring-zinc-700 shadow-lg shadow-zinc-950/60 h-[350px] bg-zinc-800">
                <ContactMap />
            </div>
            <div className="mt-16">
                <Form />
            </div>
        </>
    )
}
