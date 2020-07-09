import "normalize.css";
import "../assets/stylesheets/reset.css";

import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Contacts from "../components/contacts"
import SEO from "../components/seo"
import MouseTooltip from 'react-sticky-mouse-tooltip';

import LaunchImage from "../images/launch.gif"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />
    <h1>
     {data.site.siteMetadata.title}
    </h1>

    <Contacts>
      <div class="contacts-info">
        <a href="mailto:hey@youhadaproblem.com" target="_blank">hey@youhadaproblem.com</a>
        <a href="https://www.instagram.com/youhadaproblem/" target="_blank">Instagram</a>
        <a href="https://twitter.com/youhadaproblem" target="_blank">Twitter</a>
      </div>
    </Contacts>

    <MouseTooltip>
      <img src={LaunchImage} width="300px" alt="Launching..." />
    </MouseTooltip>
  </Layout>
)

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

export default IndexPage
