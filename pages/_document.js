import Document, {Head, Html, Main, NextScript} from "next/document";

export default class MyDoc extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap"
                        as="font"
                        crossOrigin="anonymous"/>
                </Head>
                <body>
                <Main></Main>
                <NextScript/>
                </body>
            </Html>
        );
    }
}