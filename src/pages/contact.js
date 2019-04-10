import React from 'react'
import { graphql } from 'gatsby'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class ContactPage extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }


  render() {
    const { data } = this.props
    const siteTitle = "Contact"
    const siteDescription = data.site.siteMetadata.description
    const { validated } = this.state;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <div className="container">
          <Row>
          <Col md={6} className="pr-md-5">
          <h2 className="mb-5">We love to hear from you.</h2>
          <Form
            name="Contact Form"
            method="POST"
            data-form-id="5c94566938b7513aa29d9ddd"
            webriq="true"
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
            
          >
          <Form.Row>
          <Form.Group className="mb-4" as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              size="lg"
              required
              type="text"
              name="name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4" as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              size="lg"
              required
              type="email"
              name="email address"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4" as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              size="lg"
              required
              type="text"
              name="phone number"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4" as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Message</Form.Label>
            <Form.Control
              size="lg"
              as="textarea"
              row="3"
              name="message"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4" as={Col} md="12">
            <div className="webriq-recaptcha"></div>
          </Form.Group>
          </Form.Row>
          <Button type="submit">Send Message</Button>
          </Form>
          </Col>
          <Col md={6}>
            <div className="content">
                <ul className="list-unstyled ml-0 footer-info">
                    <li><LazyLoadImage effect="blur" src="/img/001-coffee-cup.svg" width="20" className="mr-2 mb-0" alt="business" /><span>Eagle &amp; Crane Coffee Co</span></li>
                    <li><LazyLoadImage effect="blur" src="/img/002-pin.svg" width="20" className="mr-2 mb-0" alt="location" /><span>2727 N Cascade Ave #155, Colorado Springs, CO 80907</span></li>
                    <li><LazyLoadImage effect="blur" src="/img/003-telephone.svg" width="20" className="mr-2 mb-0" alt="phone" />Mack:&nbsp;<a href="tel://9706912630">970-691-2630</a></li>
                    <li><LazyLoadImage effect="blur" src="/img/003-telephone.svg" width="20" className="mr-2 mb-0" alt="phone" />Cam:&nbsp;<a href="tel://6159006871">615-900-6871</a></li>
                    <li><LazyLoadImage effect="blur" src="/img/004-mail.svg" width="20" className="mr-2 mb-0" alt="email" /><a href="mailto:info@eagleandcrane.com">info@eagleandcrane.com</a></li>
                </ul>
                <LazyLoadComponent>
                  <iframe title="map" width="100%" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=2727%20N%20Cascade%20Ave%20%23155%2C%20Colorado%20Springs%2C%20CO%2080907&key=AIzaSyBCCWTB5HtPbtLXJYTIAdrlCKQagWRI1ig&amp;zoom=11" allowFullScreen/>
                </LazyLoadComponent>
            </div>
          </Col>
          </Row>
        </div>
        </section>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
