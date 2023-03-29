import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReadingList from "../components/readingList"

const NoneCount = {
  h1: "動作チェック完了済。原稿推敲中",
  description: "そのうち公開します。",
  list: "",
}

const AllowCount = {
  h1: "Today I Learn",
  description: "学習資料などの用途でまとめた資料一覧です。",
  list: <ReadingList />,
}

const Reading = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
      }
    }
  `)

  const IsCount = data.allMarkdownRemark.totalCount !== 0
  const content = IsCount ? AllowCount : NoneCount

  return (
    <Layout>
      <h1>{content.h1}</h1>
      <p>
        {content.description} <br />
        <span>リポジトリ : </span>
        <a
          href="https://github.com/kyoune01/TIL"
          target="_blank"
          rel="noreferrer"
        >
          TIL
        </a>
      </p>
      {content.list}
    </Layout>
  )
}

Reading.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number,
    }),
  }),
  IsCount: PropTypes.bool,
  content: PropTypes.object,
}

export default Reading

export const Head = () => (
  <SEO title="reading" />
)
