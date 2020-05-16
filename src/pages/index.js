import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />
    <h1>
     {data.site.siteMetadata.title}
    </h1>
  </Layout>
)

export default IndexPage
