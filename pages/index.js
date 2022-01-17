import Head from 'next/head'
import Image from "next/image";
import Banner from "../components/homepage/banner/banner";

export default function Home() {
    return (
        <div className="h-screen relative xl:pt-16">
            <Head>
                <title>Repair your bike</title>
                <meta name="description" content="A website to get bike service centers near you"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="relative bg-opacity-70 bg-black container mx-auto p-6 md:p-8 z-20">
                <Banner/>
            </main>
            <Image className="-z-50" src="/static/images/bg/homepage-bg.jpg" layout="fill" objectFit="cover" alt="Background Image"/>
        </div>
    )
}
