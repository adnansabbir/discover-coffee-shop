import Head from 'next/head'
import Image from "next/image";
import Banner from "../components/homepage/banner/banner";
import TopCards from "../components/homepage/top-cards/top-cards";
import topMechanics from "../dummy-data/top-mechanics";
import CardMechanic from "../components/card-mechanic";

export default function Home() {
    return (
        <div className={`min-h-screen relative xl:p-16`}>
            <Head>
                <title>Repair your bike</title>
                <meta name="description" content="A website to get bike service centers near you"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="relative z-20 p-1">
                <div className="bg-opacity-70 bg-black container mx-auto p-6 md:p-8">
                    <Banner/>
                </div>
                <div className="container mx-auto grid justify-center sm:block z-20">
                    <TopCards title='Top Rated Mechanics' cardData={topMechanics} card={CardMechanic}/>
                    <TopCards title='Top Rated Mechanics' cardData={topMechanics} card={CardMechanic}/>
                </div>
            </main>
            <Image className="-z-50" src="/static/images/bg/homepage-bg.jpg" layout="fill" objectFit="cover" alt="Background Image"/>
        </div>
    )
}
