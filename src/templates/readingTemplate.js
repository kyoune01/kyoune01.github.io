import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Template = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="reading-post-container">
        <div className="reading-post">
          <h1 style={{ marginBottom: "2rem" }}>{frontmatter.title}</h1>
          <div
            className="reading-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }),
}

export default Template

export const Head = ({ data }) => (
  <SEO title={data.markdownRemark.frontmatter.title} />
)

Head.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }),
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`
