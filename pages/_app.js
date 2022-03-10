//lugar para poner el css, configuración de toda la app
//https://nextjs.org/docs/advanced-features/custom-app
import React from 'react'
import Head from "next/head";
import "bootswatch/dist/cosmo/bootstrap.min.css" 

function MyApp({ Component, pageProps }) {
  return (
    <>
       <Head>
        <title>Mi portfolio</title>
        <meta
          name="description"
          content="Melina Armand Pilón Portfolio website"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
  export default MyApp