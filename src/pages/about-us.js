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
              <h5 className="mb-4">Mackynzie Schutz - Founder &
Cameron Jolly - COO</h5>
              <p>The two met three years ago in 2016 and they quickly became inseparable. Throughout the past
several years their lives have seemed to overlap constantly. Always pursuing the same things or
going through the same trials. Truly two peas in a pod. So after the idea for Eagle & Crane was
formed in early 2018 by Mackynzie, it was only fitting that, in January of 2019, Cameron would
join Mack's team.</p>
          <h3 className="mt-4">Short Africa Story</h3>
          <p>After visiting Eastern Africa for the second time, Mackynzie Schutz fell deeply in love
with the people. Shortly into his month long solo venture there he saw that coffee could be a
powerful vehicle for sustainable change. Mackynzie decided that the best thing he could do was
to be on the US side of the trade relationship. Thus Eagle & Crane was born.</p>
<h3 className="mt-4">Direct Trade Summary</h3>
<p>We support coffee farming communities in eastern Africa by providing entrepreneurial
training and by paying sustainable wages for them to support their families.</p>
<h3 className="mt-4">Fresh Roasted Coffee Summary</h3>
<p>Coffee is our business, and we aim to only provide the best product that we can. We
roast our coffee to order and not a moment sooner. Coffee roasted as fresh as possible.</p>
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
