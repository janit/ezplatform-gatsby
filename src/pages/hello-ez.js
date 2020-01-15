import React from "react"
import { Link, graphql } from "gatsby"
import renderHTML from 'react-render-html';

import Layout from "../components/layout"
import SEO from "../components/seo"

const HelloWorldPage = ({ data }) => (
  <Layout>
    <SEO title={ data.ezplatform.content.notice.title } />
    <h1>{ data.ezplatform.content.notice.title}</h1>
    { renderHTML(data.ezplatform.content.notice.body.html5) }
    <p><Link to="/">front page</Link></p>
  </Layout>
)

export const query = graphql`
{
  ezplatform {
    content {
      notice(id: 237) {
        title
        body {
          html5
        }
      }
    }
  }
}
`

export default HelloWorldPage