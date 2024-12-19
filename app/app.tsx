import '../tailwindcss/tailwind.css';
import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import the AOS styles
import React from 'react';
import type {AppProps} from 'next/app'

function MyApp({ Component, pageProps }:AppProps ) {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation occurs only once
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
