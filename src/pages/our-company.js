import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class OurCompanyPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Our Company"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <div className="container">
          <h2 className="mb-4">What We Do</h2>
          <p>We know how hectic life can get, so we decided to send coffee straight to your door. Eagle &
Crane Coffee Co. is a subscription-based service that delivers excellent coffee conveniently and
reliably. Whether you're saving the world or just living your best life, Eagle & Crane will fuel your
every adventure.</p>
<p>We're committed to supporting coffee farming communities, especially those within Eastern
Africa. We use direct trade practices and pay the price that coffee is worth, not just what the
market allows. This helps farmers plan for their family's futures and afford school tuition for their
children.</p>
<p>Additionally, 4 percent of every subscription goes back to entrepreneurial training and
community development in Western Uganda.</p>
        </div>
        </section>
      </Layout>
    )
  }
}

export default OurCompanyPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
