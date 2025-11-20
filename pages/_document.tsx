import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Real Assets Foundation - Building regenerative asset systems" />
        <meta property="og:title" content="Real Assets Foundation" />
        <meta property="og:description" content="Building regenerative asset systems" />
        <meta property="og:image" content="https://img.plasmic.app/img-optimizer/v1/img?src=https%3A%2F%2Fimg.plasmic.app%2Fimg-optimizer%2Fv1%2Fimg%2F38529cdf60b4cabe1d4a7022c89b6cd1.png&w=384&q=75&f=webp" />
        <meta property="og:url" content="https://www.realassets.foundation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Assets Foundation" />
        <meta name="twitter:description" content="Building regenerative asset systems" />
        <meta name="twitter:image" content="https://img.plasmic.app/img-optimizer/v1/img?src=https%3A%2F%2Fimg.plasmic.app%2Fimg-optimizer%2Fv1%2Fimg%2F38529cdf60b4cabe1d4a7022c89b6cd1.png&w=384&q=75&f=webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}