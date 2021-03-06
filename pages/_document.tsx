import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="viewport-fit=cover" /> */}
          <link rel="icon" href="/favicon.png" />
          {/* ==================== google font ================  */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Amiko:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
