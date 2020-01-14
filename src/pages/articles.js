import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const articles = ({ data }) => (
  <Layout>
    <SEO title="Articles from eZ" />
    <h1>Articles from eZ Platform</h1>
    <ul>
      {data.ezplatform.content.articles.edges.map(({ node }, index) => (
        <li><Link to={`/article/${node._content.id}`}>{node.title}</Link></li>
      ))}
    </ul>
    <p><Link to="/">Go back to the homepage</Link></p>
  </Layout>
)

export const query = graphql`
query MyQuery {
  ezplatform {
    content {
      articles(first: 10000) {
        edges {
          node {
            _content {
              id
            }
            id
            title
          }
        }
      }
    }
  }
}
`

export default articles
