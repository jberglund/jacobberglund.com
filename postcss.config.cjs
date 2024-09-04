const postcssPresetEnv = require('postcss-preset-env');
const postcssGlobalData = require('@csstools/postcss-global-data');

module.exports = {
  plugins: [
    postcssGlobalData({
      files: ['./src/styles/misc/media-queries.css'],
    }),
    postcssPresetEnv({
      stage: 3,

      features: {
        'nesting-rules': true,
        'custom-properties': false,
        'custom-media-queries': true,
        'media-query-ranges': true,
      },
    }),
  ],
};
