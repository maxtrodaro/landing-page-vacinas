import { NextSeo } from 'next-seo';

import Page from 'pages/Page404';

// import Template from 'templates/basic';

import seoConfig from 'config/seo';

const MyPage: React.FC = () => (
  <>
    <NextSeo title={`${seoConfig.title}`} />

    {/* <Template> */}
    <Page />
    {/* </Template> */}
  </>
);
export default MyPage;
