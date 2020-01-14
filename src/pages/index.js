import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>eZ Platform + Gatsby</h1>
    <p>This is a demo using Gatsby.js static site generator and the eZ Platform <a href="https://doc.ezplatform.com/en/latest/api/graphql/#toc">GraphQL API</a>.</p>
    <p>You can mix and match static content and dynamic content like <Link to="/articles">articles from eZ Platform</Link>.</p>
    <p>The source code is available on GitHub: <a href="https://github.com/janit/ezplatform-gatsby">eZ Platform + Gatsby.js demo using GraphQL</a></p>
    <p>Learn more from the blog post: <a href="https://ezplatform.com/blog/ez-platform-gatsby-static-site-generator">Gatsby.js static site generator with eZ Platform GraphQL API</a></p>
  </Layout>
)

export default IndexPage
