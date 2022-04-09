const title = 'Fique Imune';
const metaThumb = `${process.env.NEXT_PUBLIC_SITE_URL}/images/meta-thumb.jpg`;

const seo = {
  title,
  description: `Combater a Influenza sempre foi importante. Agora é indispensável!`,
  canonical: process.env.NEXT_PUBLIC_SITE_URL,
  images: [
    {
      url: metaThumb,
      width: 300,
      height: 225,
      alt: title,
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: metaThumb,
    site_name: title,
    images: [
      {
        url: metaThumb,
        width: 300,
        height: 225,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default seo;
