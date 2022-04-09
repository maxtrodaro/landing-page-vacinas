/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');

const moduleExports = withImages({
  trailingSlash: true,

  compiler: {
    styledComponents: true,
  },

  env: {
    googleKey: 'AIzaSyDcUjIY3DYyAUh6SSjJ4Cj2DuXV2IKhx2w',
  },
});

module.exports = moduleExports;
