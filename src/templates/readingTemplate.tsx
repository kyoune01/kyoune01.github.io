import React from "react"
import { graphql } from "gatsby"
import { MarkdownRemark } from "../../types/graphql-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Template: React.FC<Props> = ({ data }) => (
  <Layout>
    <div className="reading-post-container">
      <div className="reading-post">
        <h1 style={{ marginBottom: "2rem" }}>{data.markdownRemark?.frontmatter?.title}</h1>
        <div
          className="reading-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html ?? '' }}
        />
      </div>
    </div>
  </Layout>
)

type Props = {
  data: {
    markdownRemark: MarkdownRemark,
  },
}

export default Template

export const Head: React.FC<Props> = ({ data }) => (
  <SEO title={data.markdownRemark?.frontmatter?.title} />
)

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
