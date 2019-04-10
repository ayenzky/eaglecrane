import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class PartnerPage extends React.Component {
  loadScript() {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = 'webriqform'
    script.src = 'https://forms.webriq.com/js/initForms'
    document.body.appendChild(script)
    const headScript = document.getElementsByTagName('script')[0]
    headScript.parentNode.insertBefore(script, headScript)
  }
  componentWillUnmount() {
    if(window) {
      console.log('remove script')
      document.getElementById('webriqform').remove();
    }
  }
  componentDidMount(){
    if(window) {
     this.loadScript();
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: '' || null
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
                    <LazyLoadComponent delayTime={500}>
                    <Form name="Partners Subscription"  method="POST" data-form-id="5caae1e4e624d64a2848d088" webriq="true" className="form-partner">
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
                            <label htmlFor="Partners" className="d-block">Partnered Organizations <span className="text-danger">*</span></label>
                            <select className="form-control" name="Partners" id="partners" onChange={this.handleChange.bind(this)} required>
                              <option value="" default>Choose Partner Organization</option>
                              <option value="Charis Bible College">Charis Bible College</option>
                              <option value="One Soma Global">One Soma Global</option>
                            </select>
                          </div>
                          {this.state.show && <Box/>}
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
                    </Form>
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

class Box extends Component {
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
