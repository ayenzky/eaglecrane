import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class CoffeeClubPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Coffee Club"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <Container>
          <Row className="justify-content-center">
            <Col md={5}>
              <Card>
                <div className="text-center bg-dirty-white">
                  <LazyLoadImage className="mb-0" effect="blur" src="https://res.cloudinary.com/eagle-crane-co/image/upload/v1553237564/eagleandcrane/freeoz.jpg" />
                </div>
                <Card.Body className="p-5">
                  <Card.Title as="h4" className="mb-4">How the Free 12oz Works</Card.Title>
                  <ul className="list-unstyled checked m-0">
                    <li><h5>Just pay $4.99 handling</h5></li>
                    <li><h5>If it’s not your cup of coffee then feel free to cancel any time!</h5></li>
                    <li><h5>First Club shipment auto-ships 3 weeks later.</h5></li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card>
                <div className="text-center bg-dirty-white">
                  <LazyLoadImage className="mb-0" effect="blur" src="https://res.cloudinary.com/eagle-crane-co/image/upload/v1553237562/eagleandcrane/coffeeoz.jpg" />
                </div>
                <Card.Body className="p-5">
                  <Card.Title as="h4" className="mb-4">How the Coffee Club Works</Card.Title>
                  <ul className="list-unstyled checked m-0">
                    <li><h5>Roasted and shipped within 48 hours.</h5></li>
                    <li><h5>You decide how often it arrives.</h5></li>
                    <li><h5>Delay or cancel shipments whenever you want.</h5></li>
                    <li><h5>Choose from 2, 3 or 4lbs of coffee per shipment</h5></li>
                    <li><h5>FREE Shipping.</h5></li>
                  </ul>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        </section>
      </Layout>
    )
  }
}

export default CoffeeClubPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
