import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Real Assets Foundation - Building regenerative asset systems" />
        <meta property="og:title" content="Real Assets Foundation" />
        <meta property="og:description" content="Building regenerative asset systems" />
        <meta property="og:image" content="https://site-assets.plasmic.app/0221e58a767881fbabb8d07715678d6b.png" />
        <meta property="og:url" content="https://www.realassets.foundation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Assets Foundation" />
        <meta name="twitter:description" content="Building regenerative asset systems" />
        <meta name="twitter:image" content="https://site-assets.plasmic.app/0221e58a767881fbabb8d07715678d6b.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}