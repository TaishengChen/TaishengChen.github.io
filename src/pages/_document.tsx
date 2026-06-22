import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" content="#2563EB" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <script defer src="https://cloud.umami.is/script.js" data-website-id="db18c850-6fca-4c97-bcf6-155faa2a0302"></script>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
