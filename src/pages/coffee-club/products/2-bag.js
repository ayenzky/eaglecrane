import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../../components/Layout'
import SEO from '../../../components/seo'

class CoffeeClubTwoPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Coffee Club - 2 Bags (Recommended)"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <div className="container">
            <iframe
                title="recommended package"
                src="https://eagleandcrane-app.herokuapp.com/recommended"
                allowFullScreen
                scrolling="yes"
                width="100%"
                height="1100px"
                frameBorder="0"
                />
        </div>
        </section>
      </Layout>
    )
  }
}

export default CoffeeClubTwoPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
