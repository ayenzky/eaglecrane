import React from 'react'
import { Link, graphql } from 'gatsby'
import AnchorLink from '../components/Anchorlink'
import Layout from '../components/Layout'
import VideoModal from '../components/Modal'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Swiper from 'swiper/dist/js/swiper.esm.bundle'
import 'swiper/dist/css/swiper.min.css'
import SEO from '../components/seo'
import './index.css'

class IndexPage extends React.Component {

  componentDidMount() {
    if (window) {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
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
                <div className="intro mb-4">
                  <h2 className="text-uppercase">Our Mission</h2>
                </div>
                <h5>
                  Eagle & Crane Coffee company supports coffee farming
                  communities in eastern Africa by providing entrepreneurial
                  training and by paying sustainable wages for them to support
                  their families.
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section id="video" className="component">
          <div className="container text-center">
            <LazyLoadImage effect="blur" src="/img/eaglecranebirds.png" alt="eagle and crane coffee co"/>
          </div>
          <div className="d-flex justify-content-center mt-3">
        <VideoModal
                                size='xxl'
                                id='play-button'
                                html=<img src="/img/play-arrow.svg" width="25" className="mb-0" alt="play"/>
                                buttonclass='btn btn-primary playlink hvr-ripple-out'
                                >
                                <div style={{padding:`56.25% 0 0 0`, position:`relative`}}>
                                    <iframe title="eagle and crane" id="myvideo" src="https://player.vimeo.com/video/295221419?autoplay=1&title=0&byline=0&portrait=0&loop=1" 
                                        style={{
                                            position:`absolute`,
                                            top:0,
                                            left:0,
                                            width:`100%`,
                                            height:`100%`
                                        }} allow="autoplay" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                                </div>
                            </VideoModal>
                            </div>
        </section>
        <section id="how-it-works" className="component bg-dirty-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div>
            <div className="intro text-center mb-5">
              <LazyLoadImage
                effect="blur"
                src="/img/eagle.png"
                className="mb-0"
                style={{ width: `100px` }}
                alt="eagle"
              />
              <h5>How It Works?</h5>
              <h2 className="text-uppercase">Eagle &amp; Crane Coffee</h2>
            </div>
            <div className="row pt-4">
              <div className="col-md-4 text-center">
                <div className="content">
                  <LazyLoadImage
                    effect="blur"
                    src="/img/002-coffee-pot.svg"
                    width="80"
                    className="mb-3"
                    alt="choose coffee"
                  />
                  <h5>
                    Choose Your Coffee
                    <br />
                    Promotion
                  </h5>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="content">
                  <LazyLoadImage
                    effect="blur"
                    src="/img/001-coffee-bag.svg"
                    width="80"
                    className="mb-3"
                    alt="choose grind"
                  />
                  <h5>
                    Choose Your Coffee
                    <br />
                    Grind
                  </h5>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="content">
                  <LazyLoadImage
                    effect="blur"
                    src="/img/coffee-pack.svg"
                    width="80"
                    className="mb-3"
                    alt="choose size"
                  />
                  <h5>
                    Choose Your Coffee
                    <br />
                    Bag Size
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="what-we-do" className="component p-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
              <div className="content text-right">
              <div className="intro mb-4">
              <h2 className="text-uppercase">
                Coffee Is What We Do
              </h2>
            </div>
              <p>After visiting Eastern Africa for the second time, Mackynzie Schutz fell deeply in love
with the people. Shortly into his month long solo venture there he saw that coffee could be a
powerful vehicle for sustainable change. Mackynzie decided that the best thing he could do was
to be on the US side of the trade relationship. Thus Eagle & Crane was born.</p>
            <div className="d-flex justify-content-end mt-4"><Link to="/our-company" className="alink hvr-shadow text-white">Read More</Link></div>
              
              </div>
              </div>
              <div className="what-we-do-bg" style={{
                  backgroundImage: `url(https://res.cloudinary.com/eagle-crane-co/image/upload/v1553147975/eagleandcrane/whatwedobg.jpg)`
              }}/>
            </div>
          </div>


        </section>
        <section id="subscription" title="subscription" className="component bg-dirty-white py-0">
          <div className="container-fluid">
            <div className="intro text-center mb-5 d-none">
              <h2>Coffee Club Package</h2>
              <p>
                Premium, small batch coffee. Shipped fresh on Thursdays. Set the
                delivery schedule. Pause or cancel whenever you want. All club
                memberships receive free shipping.&nbsp;
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 p-0">
                <div className="card package">
                  <div className="card-body text-center p-5">
                    <h4 className="package-title">Free TRIal</h4>
                    <h2 className="text-orange package-price my-4">
                      <span>$</span>0<strong>/month</strong>
                    </h2>
                    <p className="mb-0">
                      One 12oz bag of coffee and pay only $5 for shipping &amp;
                      handling cost.
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <Link to="/free-trial-coffee" className="subscribe hvr-shadow bg-black-coffee text-white">Subscribe</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-0">
                <div className="card bg-black-coffee text-white package">
                  <div className="card-body text-center p-5">
                    <h4 className="package-title">Recommended</h4>
                    <h2 className="text-white package-price my-4">
                      <span>$</span>34.99<strong>/month</strong>
                    </h2>
                    <p className="mb-0">
                      Two 12oz bags of coffee shipped once a month, Standard
                      Grind and Medium Roast Profile
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <Link to="/coffee-club" className="subscribe hvr-shadow bg-white">Subscribe</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="meet" className="component p-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-md-auto">
              <div className="content">
              <div className="intro">
              <h5>Meet the Crew</h5>
              <h2 className="text-uppercase">
                Eagle & Crane Coffee Co.
              </h2>
            </div>
              <h5>Founder - Mackynzie Schutz (right) </h5>
              <h5 className="mb-4">COO - Cameron Jolly (left)</h5>
              <p>The two met three years ago in 2016 and they quickly became inseparable. Throughout the past
several years their lives have seemed to overlap constantly. Always pursuing the same things or
going through the same trials. Truly two peas in a pod. So after the idea for Eagle & Crane was
formed in early 2018 by Mackynzie, it was only fitting that, in January of 2019, Cameron would
join Mack's team.</p>
<div className="d-flex justify-content-start mt-4"><Link to="/about-us" className="alink hvr-shadow text-white">Read More</Link></div>
              </div>
              </div>
              <div className="meetbg" style={{
                  backgroundImage: `url(/img/meeteagleandcrane.jpg)`
              }}/>
            </div>
          </div>


        </section>
        <section id="customer-reviews" className="component">
          <div className="container">
            <div className="row">
              <div className="col-md-7 mx-auto">
                <div className="intro text-center">
                <h5 className="text-white">Customer Review</h5>
                <h2 className="text-white text-uppercase">
                  Our Customer Say On Our Coffee
                </h2>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="reviews mt-5">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="review text-center">
                          <div className="review-body">
                            <h5>
                              My wife used to work for a coffee shop. We know a
                              fine bean when we have one— E&C coffee is
                              surprisingly smooth and delicious. We recommend
                              this coffee to anyone who wants their daily fix.
                            </h5>
                          </div>
                          <div className="review-author mt-4">
                            <ul className="list-unstyled star-rating d-flex justify-content-center align-items-center">
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                            </ul>
                            <h6 className="text-uppercase text-white font-weight-bold">
                              Tyler Ethridge
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="review text-center">
                          <div className="review-body">
                            <h5>
                              I just received my bag of whole coffee beans, and
                              this is seriously some of the best coffee I've
                              ever had! I reccomend this coffee for anyone who
                              enjoys an amazing fresh cup of coffee! It took 1
                              week to arrive to my door! The price was around
                              $19.00, but it is really good quality. There is a
                              freshness to the coffee that is so much better
                              than the Starbucks coffee beans that I purchased.
                            </h5>
                          </div>
                          <div className="review-author mt-4">
                            <ul className="list-unstyled star-rating d-flex justify-content-center align-items-center">
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                              <li>
                                <img
                                  src="/img/star.svg"
                                  width="20"
                                  alt="rating"
                                />
                              </li>
                            </ul>
                            <h6 className="text-uppercase text-white font-weight-bold">
                              Emily Bartlett
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <AnchorLink
                classes = "subscribe hvr-shadow mr-3 bg-orange text-white"
                href= "subscription"
              >
              Subscribe
              </AnchorLink>
            </div>
          </div>
        </section>
        <section id="blog" className="component">
          <div className="container">
            <div className="intro text-center mb-5">
              <h2 className="text-uppercase">Blog</h2>
            </div>
            <div className="row">
              <div className="col-md-5 mx-auto">
                {posts.slice(0, 3).map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div className="text-center blog-list" key={node.id}>
                      <div className="blog-list-title mb-3">
                        <h4>
                          <Link to={`blog${node.fields.slug}`}>
                            {title}
                          </Link>
                        </h4>
                        <ul className="blog-created m-0 list-unstyled d-flex justify-content-center align-items-center">
                          <li className="mr-3">
                            <LazyLoadImage effect="blur" src="/img/clock.svg"/>
                            <small className="ml-1 text-uppercase">{node.frontmatter.date}</small>
                          </li>
                          <li className="mr-2">
                            <LazyLoadImage effect="blur" src="/img/001-coffee-cup.svg" width="16px"/>
                            <small className="ml-1 text-uppercase">{node.frontmatter.author}</small>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-list-content">
                        <p>{node.excerpt}</p>
                        <Link
                          to={`blog${node.fields.slug}`}
                          className="text-orange"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="newsletter" className="component p-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto px-0 px-md-3">
              <div className="content bg-dirty-white">
                <div className="intro mb-5">
                <h5>Keep Me Updated</h5>
                <h2 className="text-uppercase">Newsletter</h2>
              </div>
                <div id="es-subcribe">
                  <form method="POST" data-form-id="5c7f97278ba9a30a93a2a085" webriq="true" className="form-newsletter">
                    <div className="form-row">
                      <div className="col-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="email_address">Enter Your Email Address</label>
                          <input
                            className="form-control"
                            type="email"
                            name="Email Address"
                            id="email_address"
                            placeholder="info@yourmail.com"
                          />
                          <small className="text-dark form-text mt-2">We'll never share your email with anyone else.</small>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <button
                            className="btn btn-primary hvr-shadow"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
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
          id
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
