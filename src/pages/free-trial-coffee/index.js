import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/seo'

class FreeTrialPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Free Trial"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <div className="container">
               <iframe
                  title="free-trial-package"
                  src="https://eagleandcrane-app.herokuapp.com/free-trial"
                  allowFullScreen
                  scrolling="yes"
                  width="100%"
                  height="1000px"
                  minheight="100vh"
                  frameBorder="0"
                />
        </div>
        </section>
      </Layout>
    )
  }
}

export default FreeTrialPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
