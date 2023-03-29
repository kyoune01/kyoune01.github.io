module.exports = {
  siteMetadata: {
    title: `kyoune01.github.io`,
    description: `kyoune01's portfolio site`,
    author: `@kyoune01`,
  },
  plugins: [
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
        name: `kyoune01.github.io`,
        short_name: `kyoune's portfolio`,
        start_url: `/`,
        background_color: `#F8FDF7`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon.png`,
        icons: [
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-175164238-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
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
