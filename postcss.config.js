module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-preset-env": {
      stage: 2,
      autoprefixer: { grid: true },
      features: {
        "custom-media-queries": true,
      },
    },
    "postcss-custom-media": {},
    cssnano: {},
  },
};
