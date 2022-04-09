import { NextSeo } from 'next-seo';

import Page from 'pages/Home';

import seoConfig from 'config/seo';

const MyPage: React.FC = () => (
  <>
    <NextSeo title={`${seoConfig.title}`} />

    <Page />
  </>
);
export default MyPage;
