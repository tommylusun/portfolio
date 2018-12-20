import React from 'react'
import App, { Container} from 'next/app'
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
          <Head>
            <title>Tommy Lusun</title>
            <link rel="stylesheet" type="text/css" href="./styles.css"/>
        </Head>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </Container>
    )
  }
}