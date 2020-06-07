import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"

const ReadingList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  `)
  if (data.errors) {
    return
  }

  return data.allMarkdownRemark.edges.map(({ node }) => {
    return (
      <div key={`${node.id}`} style={{ marginTop: "1rem" }}>
        <Link to={`${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
      </div>
    )
  })
}

ReadingList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.node,
    }),
  }),
}

export default ReadingList
