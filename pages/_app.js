//lugar para poner el css, configuración de toda la app
//https://nextjs.org/docs/advanced-features/custom-app


import "bootswatch/dist/cosmo/bootstrap.min.css" 
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  export default MyApp