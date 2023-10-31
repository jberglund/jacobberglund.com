const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 3,

      features: {
        "nesting-rules": true,
        "custom-properties": false,
        "custom-media-queries": true,
        "media-query-ranges": true,
      },
    }),
  ],
};
