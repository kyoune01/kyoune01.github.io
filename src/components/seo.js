/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaTitle =
    title === ""
      ? site.siteMetadata.title
      : `${title} | ${site.siteMetadata.title}`
  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}

SEO.defaultProps = {
  description: ``,
  title: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default SEO
