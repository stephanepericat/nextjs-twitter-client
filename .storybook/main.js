const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  framework: "@storybook/react",

  core: {
    builder: "@storybook/builder-webpack5",
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      oneOf: [
        {
          resourceQuery: /module/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            "sass-loader",
          ],
        },
        {
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    });

    return config;
  },
};
