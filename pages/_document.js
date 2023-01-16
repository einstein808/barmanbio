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
<script type="application/ld+json">
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Adel Veiculos",
    "url": "https://www.adelveiculos.com.br/",
    "address": "Av. Presidente Juscelino Kubitschek, 500 - Francisco Bernardino, Juiz de Fora - MG, 36083-750",
    "sameAs": [
      "https://www.facebook.com/grupoadelveiculos"
    ]

</script>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
