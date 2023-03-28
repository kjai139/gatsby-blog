/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby blog trial tutorial`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `gatsby tutorial website`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name:`blog`,
        path: `${__dirname}/blog`,
      }
    }
  ],
}
