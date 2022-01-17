import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner";

export default function Home() {
    const handleOnBannerBtnClick = () => {
        console.log('Hi Banner Button');
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Coffee Corners</title>
                <meta name="description" content="A website to get nearby coffee shops"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick}/>
            </main>
        </div>
    )
}
