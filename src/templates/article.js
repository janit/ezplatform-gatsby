import React from "react"
import { Link } from "gatsby"
import renderHTML from 'react-render-html';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title={data.ezplatform.content.article.title} />
    <h1>{data.ezplatform.content.article.title}</h1>
    {renderHTML(data.ezplatform.content.article.body.html5)}
    <p><Link to="/articles">Article listing</Link></p>
  </Layout>
)

export const query = graphql`
query ($id: Int!) {
  ezplatform {
    content {
      article(id: $id) {
        title
        intro {
          html5
        }
        body {
          html5
        }
      }
    }
  }
}
`

export default IndexPage
