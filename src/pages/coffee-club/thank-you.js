import React from 'react'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../../components/Layout'
import SEO from '../../components/seo'

class FreeTrialThankYouPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Thank You for your subscription with Eagle and Crane Coffee Co."
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <Container>
          <Row>
          <Col xs={12}>
            <h2>We'll be shipping your coffee soon!</h2>
            <h4>We'll be shipping your coffee soon!</h4>
            <h4>Enjoy!</h4>
            <div class="d-flex justify-content-start mt-4"><Link class="alink hvr-shadow" to="/">Return Home</Link></div>
          </Col>
          </Row>

        </Container>
        </section>
      </Layout>
    )
  }
}

export default FreeTrialThankYouPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
