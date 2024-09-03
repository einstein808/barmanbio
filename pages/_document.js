/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="https://barman.gabryelamaro.com/favicon.ico" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1CLL01F0PR"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-1CLL01F0PR');
                            `,
                        }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                "name": "Barman Matias Barbosa e Juiz de fora",
                                "url": "https://barman.gabryelamaro.com",
                                "logo": "https://i.imgur.com/CxrpKLy.jpeg",
                                "address": [
                                    {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Juiz de Fora",
                                        "addressRegion": "MG",
                                        "addressCountry": "BR",
                                        "postalCode": "36000-000"
                                    },
                                    {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Matias Barbosa",
                                        "addressRegion": "MG",
                                        "addressCountry": "BR",
                                        "postalCode": "36120-000"
                                    }
                                ],
                                "geo": [
                                    {
                                        "@type": "GeoCoordinates",
                                        "latitude": "-21.7640",
                                        "longitude": "-43.3494",
                                        "name": "Juiz de Fora"
                                    },
                                    {
                                        "@type": "GeoCoordinates",
                                        "latitude": "-21.8703",
                                        "longitude": "-43.3186",
                                        "name": "Matias Barbosa"
                                    }
                                ],
                                "sameAs": [
                                    "https://www.facebook.com/einstein.amaro",
                                    "https://www.instagram.com/gabryel.amaro",

                                ]
                            })
                        }}
                    />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />


                </Head>
                <body>
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=G-1CLL01F0PR"
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        ></iframe>
                    </noscript>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}