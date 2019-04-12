import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Container, Button, Col, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import WebriQForm from '@bit/webriq.components.webriq-form'

class PartnerPage extends React.Component {

  render() {
    const { data } = this.props
    const siteTitle = "Partner"
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="component">
        <Container>
            <Row>
              <Col md={7}>
                <h5 className="mb-5">Fill in the form below to subscribe.</h5>
                <div id="partner-subcribe">
                  <WebriqFormExt/> 
                </div>
              </Col>
            </Row>
        </Container>
        </section>
      </Layout>
    )
  }
}

class StudentName extends Component {
  render () {
    return (
        <div className="form-group">
          <label htmlFor="Student Name">Student Name <span className="text-danger">*</span></label>
          <input
            id="student-name"
            className="form-control"
            type="text"
            name="Student Name"
            placeholder="Enter student name"
            required
          />
        </div>
    )
  }
}

class WebriqFormExt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: ""
    };

  }
  handleChange(event) {
    if(event.target.value === this.state.value) {
      this.setState({show: false});
    }
    else {
      this.setState({show: true});
    }
   }


  render () {
    return (
      <WebriQForm name="Partners Subscription" data-form-id="5caae1e4e624d64a2848d088" className="form-partner">
      <div className="form-row">
        <div className="col-12 mb-3">
          <div className="form-group mb-4">
            <label htmlFor="Email Address">Email Address <span className="text-danger">*</span></label>
            <input
              className="form-control"
              type="email"
              name="Email Address"
              placeholder="Enter Your Email Address"
              required
            />
            <small className="text-muted form-text mt-2">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="Partner" className="d-block">Partnered Organizations <span className="text-danger">*</span></label>
            <select className="form-control" name="Partner" id="partners" onChange={this.handleChange.bind(this)} required>
              <option value="" default>Choose Partner Organization</option>
              <option value="Charis Bible College">Charis Bible College</option>
              <option value="One Soma Global">One Soma Global</option>
            </select>
          </div>
          {this.state.show && <StudentName/>}
          <div className="form-group mb-4">
            <div className="webriq-recaptcha"></div>
          </div>
        </div>
        
        <div className="col-12">
          <div className="form-group">
            <Button
              className="btn btn-primary hvr-shadow"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </WebriQForm>

    )
  }
}

export default PartnerPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
