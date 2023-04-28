/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Math Mastermind`,
    description: `Math Mastermind to interaktywna aplikacja dla systemu Windows, która umożliwia naukę matematyki poprzez proste gry i generowanie kolejnych zadań matematycznych.`,
    twitterUsername: `@revimeister`,
    image: `/icon.png`,
    siteUrl: `https://mathmastermind.revku.dev/`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-root-import", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};