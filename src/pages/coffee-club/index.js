import React from 'react'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'

class CoffeeClubPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Coffee Club"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section id="subscription" className="component">
        <Container>
        <h4 className="mb-4 text-center">Get delicious fresh roasted coffee direct from the farmer straight to your home.</h4>
        <div className="row justify-content-center">
              <div className="col-md-6 mb-4">
                <div className="card package">
                  <div className="card-body text-center py-5 py-md-3">
                    <h4 className="package-title">1 Bag</h4>
                    <h2 className="text-orange package-price my-4">
                      <span>$</span>22.95<strong>/month</strong>
                    </h2>
                    <p className="mb-0">
                      One 1lb bag of coffee shipped once a month, Standard
                      Grind and Medium Roast Profile
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <Link
                        className="subscribe hvr-shadow bg-black-coffee text-white"
                        to="/coffee-club/products/1-bag"
                      >
                        Subscribe
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card bg-orange text-white package">
                  <div className="card-body text-center py-5 py-md-3">
                    <h4 className="package-title mb-0">2 Bags</h4>
                    <h6>RECOMMENDED</h6>
                    <h2 className="text-white package-price my-4">
                      <span>$</span>34.99<strong>/month</strong>
                    </h2>
                    <p className="mb-0">
                      Two 1lb bags of coffee shipped once a month, Standard
                      Grind and Medium Roast Profile
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <Link
                        className="subscribe hvr-shadow bg-white text-black-coffee"
                        to="/coffee-club/products/2-bag"
                      >
                        Subscribe
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 order-md-4">
                <div className="card package">
                  <div className="card-body text-center py-5 py-md-3">
                    <h4 className="package-title">3 Bags</h4>
                    <h2 className="text-orange package-price my-4">
                      <span>$</span>49.99<strong>/month</strong>
                    </h2>
                    <p className="mb-0">
                      Two 1lb bags of coffee shipped once a month, Standard
                      Grind and Medium Roast Profile
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <Link
                        className="subscribe hvr-shadow bg-black-coffee text-white"
                        to="/coffee-club/products/3-bag"
                      >
                        Subscribe
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 order-md-3">
                <div className="card bg-black-coffee text-white package">
                  <div className="card-body text-center py-5 py-md-3">
                    <h4 className="package-title">4 Bags</h4>
                    <h2 className="text-white package-price my-4">
                      <span>$</span>59.98<strong>/month</strong>
                    </h2>
                    <p className="mb-0">
                      Two 1lb bags of coffee shipped once a month, Standard
                      Grind and Medium Roast Profile
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <Link
                        className="subscribe hvr-shadow bg-white text-black-coffee"
                        to="/coffee-club/products/4-bag"
                      >
                        Subscribe
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5"><Link to="/free-trial-coffee" className="alink hvr-shadow text-white">Want a free trial?</Link></div>
        </Container>
        </section>
        <section id="home-blend" className="component bg-dirty-white">
          <Container>
          <Row className="mt-5 align-items-center">
              <Col md={6}>
                <LazyLoadImage effect="blur" src="/img/freeoz.jpg" alt="house blend"/>
              </Col>
              <Col md={6}>
                <div className="content p-3 p-md-5">
              <h3>Buy a 1lb bag of our House Blend - Brave Bird</h3>
              <h3 className="text-orange my-4">$22.95</h3>
              <div className="d-flex justify-content-start mt-4">
                <Link to="/coffee-club/products/1-bag" className="alink hvr-shadow text-white">Buy Now</Link>
              </div>
              </div>
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
