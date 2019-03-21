import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class AboutUsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "About Us"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <div className="container">
          <p>After visiting Eastern Africa for the second time, Mackynzie Schutz fell deeply in love
with the people. Shortly into his month long solo venture there he saw that coffee could be a
powerful vehicle for sustainable change. Mackynzie decided that the best thing he could do was
to be on the US side of the trade relationship. Thus Eagle & Crane was born.</p>
        </div>
        </section>
      </Layout>
    )
  }
}

export default AboutUsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
