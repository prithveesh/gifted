import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import '../src/styles/theme.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>GIFted</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Courgette|Dosis"
            rel="stylesheet"
          />
        </Head>
        <Container>
          <div className="outer-wrapper">
            <Component {...pageProps} />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default MyApp;
