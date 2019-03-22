import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class OurHouseBlendPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Our House Blend"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <div className="container">
          <p>We take our house blend seriously, because the secret to a good day is a great start. We know
the first thing someone will do in the morning is brew a cup of coffee, and we’re honored that
you’d give us a try!</p>
<p>Our Brave Bird House Blend is specifically crafted to begin an excellent morning and prepare
you for the day ahead. Brave Bird is a blend of Western Ugandan and Central American coffee.
This unique pairing yields a warm, full-bodied, and delicious cup every time.</p>
<p>Our core mission is to support Ugandans with entrepreneurial education and support. In fact, 4
percent of every subscription is dedicated to just that. With this goal in mind, we as a company
have made a commitment to always pay farmers the true value of their coffee, not just the
market value.</p>
<p>What this means is that while you receive a better coffee experience, our coffee farmers receive
hope for a better life. Because we’ll pay up to 3x more than the current commodity price for their
coffee, our farmers can afford to plan for their futures and support their families.
So, enjoy a cup of our Brave Bird Blend knowing that your morning fuel is fueling ethical coffee
trade around the world.</p>
        </div>
        </section>
      </Layout>
    )
  }
}

export default OurHouseBlendPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
