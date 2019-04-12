import React from 'react'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'

class ThankYouPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Thank You"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <Container>
          <Row>
          <Col xs={12}>
            <h2>Thanks for filling out our form!</h2>
            <p>We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible.</p>
            <div className="d-flex justify-content-start mt-4"><Link className="alink hvr-shadow" to="/">Return Home</Link></div>
          </Col>
          </Row>

        </Container>
        </section>
      </Layout>
    )
  }
}

export default ThankYouPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
