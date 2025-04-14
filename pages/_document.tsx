import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Photos taken by Shivank."
          />
          <meta property="og:site_name" content="gallery.Shivank.cc" />
          <meta
            property="og:description"
            content="Photos taken by Shivank."
          />
          <meta property="og:title" content="Gallery | Shivank" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Gallery | Shivank" />
          <meta
            name="twitter:description"
            content="Photos taken by Shivank."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
