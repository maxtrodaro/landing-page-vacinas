/* eslint-disable react/no-danger */
import { useEffect } from 'react';

import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Script from 'next/script';

// eslint-disable-next-line import-helpers/order-imports
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import GlobalStyle from 'styles/global';
import theme from 'styles/themes/default';
import { v4 as uuidv4 } from 'uuid';

import * as chakrauiTheme from 'config/chackraui-color-theme';
import SEO from 'config/seo';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-pro/css/all.min.css';

const AppProvider = dynamic(() => import('hooks'), { ssr: false });

Router.events.on('routeChangeStart', () => {
  const { body } = document;
  body.classList.add('loading-page');
});
Router.events.on('routeChangeComplete', () => {
  const { body } = document;
  body.classList.remove('loading-page');
});
Router.events.on('routeChangeError', () => {
  const { body } = document;
  body.classList.remove('loading-page');
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router: any = useRouter();

  useEffect(() => {
    !localStorage.getItem('userId') && localStorage.setItem('userId', uuidv4());
    router?.query?.source ? localStorage.setItem('userSource', router?.query?.source) : false;
  }, [router]);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Abbott - Fique Imune" />

        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="Combater a Influenza sempre foi importante. Agora é indispensável!"
        />

        <meta property="og:image" content="https://fiqueimune.com.br/images/mobile_pessoa_ok.png" />

        <meta property="og:image:alt" content="Abbott - Fique Imune" />

        <meta property="og:image:width" content="420" />

        <meta property="og:image:height" content="377" />

        <meta property="og:locale" content="pt_BR" />

        <meta property="og:site_name" content="Abbott" />

        <meta property="og:url" content="https://fiqueimune.com.br/" />

        <meta
          name="twitter:card"
          content="Combater a Influenza sempre foi importante. Agora é indispensável!"
        />

        <meta name="twitter:site" content="https://fiqueimune.com.br/" />

        <meta name="twitter:creator" content="Abbott" />

        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />

        <link rel="icon" type="image/png" href="/images/logo/favicon.jpg" />
      </Head>

      <DefaultSeo {...SEO} />

      <ChakraProvider resetCSS={false} theme={chakrauiTheme.theme}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ChakraProvider>

      <GlobalStyle theme={theme} />

      <ColorModeScript initialColorMode={chakrauiTheme.config.initialColorMode} />

      <Script src="/vendor/modernizr-webp.js" />

      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)} gtag('js', new Date()); gtag('config', 'UA-220941420-1');`,
        }}
      />
      <Script
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5XTGXD8')`,
        }}
      />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ERF7HQJ3MK" />

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src=https://www.googletagmanager.com/ns.html?id=GTM-5XTGXD8 height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </>
  );
};

export default MyApp;
