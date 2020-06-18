module.exports = {
  siteMetadata: {
    title: `kyoune01.github.io`,
    description: `kyoune01's portfolio site`,
    author: `@kyoune01`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

// You can have multiple instances of this plugin
// to read source nodes from different locations on your
// filesystem.
//
// The following sets up the Jekyll pattern of having a
// "pages" directory for Markdown files and a "data" directory
// for `.json`, `.yaml`, `.csv`.
const fs = require("fs")
const root = `${__dirname}/content/TIL/`
const files = fs.readdirSync(root)
// 第3階層までは見ないのでパス取得
files.forEach(file => {
  const stats = fs.statSync(`${root}${file}`)
  if (stats.isDirectory()) {
    module.exports.plugins.unshift({
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `${file}`,
        path: `${root}${file}`,
        ignore: ["README.md"],
      },
    })
  }
})
// path追加後に追記
module.exports.plugins.unshift(`gatsby-transformer-remark`)
