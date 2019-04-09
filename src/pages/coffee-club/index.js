import React from 'react'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import AnchorLink from '../../components/Anchorlink'

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
                      <AnchorLink
                        classes="subscribe hvr-shadow bg-black-coffee text-white"
                        href= "subscription"
                      >
                        Subscribe
                      </AnchorLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card bg-black-coffee text-white package">
                  <div className="card-body text-center py-5 py-md-3">
                    <h4 className="package-title">2 Bags</h4>
                    <h2 className="text-white package-price my-4">
                      <span>$</span>34.99<strong>/month</strong>
                    </h2>
                    <p className="mb-0">
                      Two 1lb bags of coffee shipped once a month, Standard
                      Grind and Medium Roast Profile
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <AnchorLink
                        classes="subscribe hvr-shadow bg-white text-black-coffee"
                        href= "subscription"
                      >
                        Subscribe
                      </AnchorLink>
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
                      <AnchorLink
                        classes="subscribe hvr-shadow bg-black-coffee text-white"
                        href= "subscription"
                      >
                        Subscribe
                      </AnchorLink>
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
                      <AnchorLink
                        classes="subscribe hvr-shadow bg-white text-black-coffee"
                        href= "subscription"
                      >
                        Subscribe
                      </AnchorLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5"><Link to="/free-trial-coffee" className="alink hvr-shadow text-white">Want a free trial?</Link></div>
            <Row className="mt-5">
              <Col md={6}>
                <LazyLoadImage effect="blur" src="/img/freeoz.jpg" alt="house blend"/>
              </Col>
              <Col md={6}>
              <h3>Buy a 12oz bag of our House Blend - Brave Bird</h3>
            <h4 className="text-orange my-4">$22.95</h4>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input className="form-control" type="email" name="email" placeholder="Enter your email address"/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name" placeholder="Enter your fullname"/>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input className="form-control" type="text" name="address" placeholder="Enter your mailing address"/>
              </div>
              <div className="form-group">
                <label htmlFor="roast">Roast:</label>
                <select className="form-control" name="roast">
                  <option value="Medium">Medium</option>
                  <option value="Dark">Dark</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="grind">Grind:</label>
                <select className="form-control" name="grind">
                  <option value="Medium">Whole Bean</option>
                  <option value="Dark">Standard</option>
                </select>
              </div>
              <div className="d-flex justify-content-start mt-5">
                <Link to="/free-trial" className="alink hvr-shadow text-white">Buy Now</Link>
              </div>
            </form>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="mx-auto">
              <div id="subscription">
              <LazyLoadComponent>
              <div className="responsive-embed">
                <iframe
                    title="recommended-package"
                    src="https://eagleandcrane-app.herokuapp.com/recommended"
                    allowFullScreen
                    scrolling="yes"
                    width="100%"
                    height="1000px"
                    minheight="100vh"
                    frameBorder="0"
                    />
                  </div>
                </LazyLoadComponent>
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
