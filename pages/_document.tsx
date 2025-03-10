import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const assetPath =
    process.env.NEXT_PUBLIC_ASSET_MODE === 'minified'
      ? '/assets/main.min.js'
      : '/assets/main.js';
  return (
    <Html>
      <Head>
        <script src={assetPath} async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
