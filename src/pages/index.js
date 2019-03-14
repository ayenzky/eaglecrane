import React from 'react'
import {  Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import 'swiper/dist/css/swiper.min.css'
import SEO from '../components/seo'
import './index.css'

class IndexPage extends React.Component {
  componentDidMount () {
    if(window) {
      new Swiper('.swiper-container', {
          slidesPerView: 1,
          centeredSlides: true,
          autoplay: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }); 
    }
  }
  render() {
    const { data } = this.props
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section id="mission" className="component">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto text-center">
                <div className="intro mb-4"><h2 className="text-uppercase">Our Mission</h2></div>
                <h5>Eagle & Crane Coffee company supports coffee farming
communities in eastern Africa by providing entrepreneurial training and
by paying sustainable wages for them to support their families.</h5>
                <p>To learn more about how you can help change Africa, please click below.</p>
                <div class="d-flex justify-content-center mt-4"><a href="/" class="subscribe hvr-shadow bg-black-coffee text-white">Learn More</a></div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="component">
            <div className="container">
                <div className="intro text-center mb-5">
                    <LazyLoadImage effect="blur" src="/img/eagle.png" className="mb-0" style={{width: `100px`}} alt="eagle"/>
                    <h5>How It Works?</h5>
                    <h2 className="text-uppercase">Eagle &amp; Crane Coffee</h2>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4 text-center">
                        <div className="content"><LazyLoadImage effect="blur" src="/img/002-coffee-pot.svg" width="80" className="mb-3" alt="choose coffee" /><h5>Choose Your Coffee<br/>Promotion</h5></div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="content"><LazyLoadImage effect="blur" src="/img/001-coffee-bag.svg" width="80" className="mb-3" alt="choose grind" /><h5>Choose Your Coffee<br/>Grind</h5></div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="content"><LazyLoadImage effect="blur" src="/img/coffee-pack.svg" width="80" className="mb-3" alt="choose size" /><h5>Choose Your Coffee<br/>Bag Size</h5></div>
                    </div>
                </div>
            </div>
        </section>
        <section id="subscribe" className="component bg-dirty-white py-0">
            <div className="container-fluid">
                <div className="intro text-center mb-5 d-none">
                    <h2>Coffee Club Package</h2>
                    <p>Premium, small batch coffee. Shipped fresh on Thursdays. Set the delivery schedule. Pause or cancel whenever you want. All club memberships receive free shipping.&nbsp;</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 p-0">
                        <div className="card package">
                            <div className="card-body text-center p-5">
                                <h4 className="package-title">Free TRIal</h4>
                                <h2 className="text-orange package-price my-4"><span>$</span>0<strong>/month</strong></h2>
                                <p className="mb-0">One 12oz bag of coffee and pay only $5 for shipping &amp; handling cost.</p>
                                <div className="d-flex justify-content-center mt-4"><a href="/" className="subscribe hvr-shadow bg-black-coffee text-white">Subscribe</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="card bg-black-coffee text-white package">
                            <div className="card-body text-center p-5">
                                <h4 className="package-title">Recommended</h4>
                                <h2 className="text-white package-price my-4"><span>$</span>34.99<strong>/month</strong></h2>
                                <p className="mb-0">Two 12oz bags of coffee shipped once a month, Standard Grind and Medium Roast Profile</p>
                                <div className="d-flex justify-content-center mt-4"><a href="/" className="subscribe hvr-shadow bg-white">Subscribe</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="customer-reviews" className="component">
            <div className="container">
                <div className="intro text-center">
                    <h5 className="text-white">Customer Review</h5>
                    <h2 className="text-white text-uppercase">What Our Customer Say</h2>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto"><div className="reviews mt-5">

<div className="swiper-container">

    <div className="swiper-wrapper">

        <div className="swiper-slide">
            <div className="review text-center">
                <div className="review-body">
                    <h5>My wife used to work for a coffee shop. We know a fine bean when we have one— E&C coffee is surprisingly smooth and delicious. We recommend this coffee to anyone who wants their daily fix.</h5>
                </div>
                <div className="review-author mt-4">
                <ul className="list-unstyled star-rating d-flex justify-content-center align-items-center">
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                </ul>
                <h6 className="text-uppercase text-white font-weight-bold">Tyler Ethridge</h6>
            </div>
            </div>
        </div>
        <div className="swiper-slide">
            <div className="review text-center">
                <div className="review-body">
                    <h5>I just received my bag of whole coffee beans, and this is seriously some of the best coffee I've ever had! I reccomend this coffee for anyone who enjoys an amazing fresh cup of coffee! It took 1 week to arrive to my door! The price was around $19.00, but it is really good quality. There is a freshness to the coffee that is so much better than the Starbucks coffee beans that I purchased.</h5>
                </div>
                <div className="review-author mt-4">
                <ul className="list-unstyled star-rating d-flex justify-content-center align-items-center">
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                    <li><img src="/img/star.svg" width="20" alt="rating"/></li>
                </ul>
                <h6 className="text-uppercase text-white font-weight-bold">Emily Bartlett</h6>
            </div>
            </div>
        </div>
    </div>

    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>

</div>
</div></div>
                </div>
                <div className="d-flex justify-content-center mt-4"><a href="/" className="alink hvr-shadow">Subscribe</a></div>
            </div>
        </section>
        <section id="blog" className="component">
            <div className="container">
                <div className="intro text-center mb-5">
                    <h2 className="text-uppercase">Blog</h2>
                </div>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        {posts.slice(0,3).map(({ node }) =>{
                          // const title = node.frontmatter.title || node.fields.slug
                          return (
                            <div className="text-center blog-list">
                            <div className="blog-list-title mb-3">
                                <h4><Link to={`blog/${node.fields.slug}`}>{node.frontmatter.title}</Link></h4>
                                <small className="text-uppercase">{node.frontmatter.date} - {node.frontmatter.author}</small></div>
                            <div className="blog-list-content">
                                <p>{node.excerpt}</p>
                                <Link to={`blog/${node.fields.slug}`} className="text-orange">Read More</Link></div>
                            </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </section>
        <section id="newsletter" className="component">
            <div className="container">
                <div className="intro text-center mb-5">
                    <h5 className="text-white">Keep Me Updated</h5>
                    <h2 className="text-white text-uppercase">Newsletter</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div id="es-subcribe">
                            <form className="form-newsletter">
                                <div className="form-row d-flex justify-content-center">
                                    <div className="col-md-8 p-0">
                                        <div className="form-group">
                                          <input className="form-control" type="email" name="inputEmail" placeholder="Enter Your Email Address"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-0">
                                        <div className="form-group"><button className="btn btn-primary hvr-shadow" type="submit">Submit</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            shortdesc
            author
          }
        }
      }
    }
  }
`
