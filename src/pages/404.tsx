import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC<void> = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

export const Head: React.FC<void> = () => (
  <SEO title="404: Not Found" />
)
