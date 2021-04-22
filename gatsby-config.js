module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Sacramento\:400`,
          `Work Sans\:300,400,400i,700`, // you can also specify font weights and styles
        ],
      },
    },
  ],
};
