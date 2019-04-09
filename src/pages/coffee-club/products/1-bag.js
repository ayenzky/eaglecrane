import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/Layout'
import SEO from '../../../components/seo'

class CoffeeClubOnePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Coffee Club - 1 Bag (House Blend)"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <div className="container">
               <iframe
                  title="home blend coffee"
                  src="https://eagleandcrane-app.herokuapp.com/house-blend"
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

export default CoffeeClubOnePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
