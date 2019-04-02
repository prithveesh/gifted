// require('@babel/polyfill');
import React from 'react';
import Head from 'next/head';

import SearchComponent from '../src/modules/search';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>GIFted</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Courgette|Dosis"
          rel="stylesheet"
        />
      </Head>
      <SearchComponent />
    </div>
  );
}

export default IndexPage;
