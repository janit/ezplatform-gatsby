import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HelloWorldPage = () => (
  <Layout>
    <SEO title="Hello world" />
    <h1>Hello world!</h1>
    <p><Link to="/">front page</Link></p>
  </Layout>
)

export default HelloWorldPage