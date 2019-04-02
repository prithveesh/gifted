import React from 'react';
import App, { Container } from 'next/app';

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
      <Container>
        <div className="outer-wrapper">
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default MyApp;
