import React from 'react'
import App, { Container} from 'next/app'
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import './styles.css';
import Router from "next/router";
import withGA from "next-ga";
export default withGA("UA-132200349-2", Router)(class MyApp extends App {
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
            <title>Tommy Lusun - Software Developer - React Angular Java</title>
            {/* <link rel="stylesheet" type="text/css" href="./styles.css"/> */}
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Head>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </Container>
    )
  }
});