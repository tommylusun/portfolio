// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import './styles.css';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
            <style>{`body { margin: 0 } /* custom! */`}</style>
            <link rel="stylesheet" type="text/css" href="./styles.css"/>
            <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet"></link>
            <meta name="google-site-verification" content="KjA3J9dGfJe1GS-VcfV3zlv4Zwxpd3B208jnyCdLFb8" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}