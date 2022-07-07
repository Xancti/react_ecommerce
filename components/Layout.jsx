import React from 'react'
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';


// PROP-Children is passed through from _app.js; anything passed through a component can be accessed via {children}
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Audiophile Haven</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout