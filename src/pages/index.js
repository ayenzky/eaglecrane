import React from 'react'
import Layout from '../layouts'
import { Link } from 'gatsby'
import ReviewSlider from '../components/reviewslider'
import Subscribe from '../components/subscribe'
import Arrow from '../images/play-arrow.svg'
import Eagle from '../images/eagle.png'
import CoffeePot from '../images/002-coffee-pot.svg'
import CoffeeBag from '../images/001-coffee-bag.svg'
import CoffeePack from '../images/coffee-pack.svg'
import ReviewBG from '../images/reviewbg.jpg'
import NewsBg from '../images/newsletterbg.jpg'

const IndexPage = () => (
  <Layout head={{ title: 'Home' }}>
    <div class="hero">
      <div class="video-background">
        <iframe
          title="About Eagle & Crane Coffee Co. from Eagle & Crane Coffee Co. on Vimeo"
          src="https://player.vimeo.com/video/295221419?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 pr-md-5">
            <div class="hero-content">
              <h1 class="hero-title text-white">Like Free Coffe?</h1>
              <h4 class="hero-subtitle text-white">
                Join the Coffee Club and start with a free bag! Just pay $5 for
                shipping.
              </h4>
              <div class="d-flex justify-content-start mt-4">
                <Link to="#subscribe" class="alink hvr-shadow mr-3">
                  Subscribe
                </Link>
                <button
                  class="btn btn-primary playlink"
                  type="button"
                  id="play-button"
                  data-toggle="modal"
                  data-target="#video"
                >
                  <img src={Arrow} width="30" class="mb-0" alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main>
      <section id="how-it-works" class="component">
        <div class="container">
          <div class="intro text-center mb-5">
            <img
              src={Eagle}
              class="mb-0"
              style={{ width: '100px' }}
              alt="Eagle"
            />
            <h5>How It Works?</h5>
            <h3>Eagle & Crane Coffee</h3>
          </div>
          <div class="row pt-4">
            <div class="col-md-4 text-center">
              <div class="content">
                <img src={CoffeePot} width="80" class="mb-3" alt="CoffeePot" />
                <h5>
                  Choose Your Coffee
                  <br />
                  Promotion
                </h5>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="content">
                <img src={CoffeeBag} width="80" class="mb-3" alt="CoffeeBag" />
                <h5>
                  Choose Your Coffee
                  <br />
                  Grind
                </h5>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="content">
                <img
                  src={CoffeePack}
                  width="80"
                  class="mb-3"
                  alt="CoffeePack"
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
      <section id="subscribe" class="component bg-dirty-white py-0">
        <div class="container-fluid">
          <div class="intro text-center mb-5 d-none">
            <h3>Coffee Club Package</h3>
            <p>
              Premium, small batch coffee. Shipped fresh on Thursdays. Set the
              delivery schedule. Pause or cancel whenever you want. All club
              memberships receive free shipping.&nbsp;
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 p-0">
              <div class="card package">
                <div class="card-body text-center p-5">
                  <h4 class="package-title">Free TRIal</h4>
                  <h2 class="text-orange package-price my-4">
                    <span>$</span>0<strong>/month</strong>
                  </h2>
                  <p class="mb-0">
                    One 12oz bag of coffee and pay only $5 for shipping &amp;
                    handling cost.
                  </p>
                  <div class="d-flex justify-content-center mt-4">
                    <Link
                      to="#"
                      class="subscribe hvr-shadow bg-orange text-white"
                    >
                      Subscribe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <div class="card bg-orange text-white package">
                <div class="card-body text-center p-5">
                  <h4 class="package-title">Recommended</h4>
                  <h2 class="text-white package-price my-4">
                    <span>$</span>34.99<strong>/month</strong>
                  </h2>
                  <p class="mb-0">
                    Two 12oz bags of coffee shipped once a month, Standard Grind
                    and Medium Roast Profile&nbsp;
                    <br />
                  </p>
                  <div class="d-flex justify-content-center mt-4">
                    <Link to="#" class="subscribe hvr-shadow bg-white">
                      Subscribe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="customer-reviews"
        class="component bg-cover"
        style={{ backgroundImage: `url("${ReviewBG}")` }}
      >
        <div class="container">
          <div class="intro text-center mb-5">
            <h5 class="text-white">Customer Review</h5>
            <h3 class="text-white">What Our Customer Say</h3>
          </div>
          <ReviewSlider />
          <div class="d-flex justify-content-center mt-4">
            <a href="#subscribe" class="alink hvr-shadow">
              Subscribe
            </a>
          </div>
        </div>
      </section>
      <section id="blog" class="component">
        <div class="container">
          <div class="intro text-center mb-5">
            <h3>Blog</h3>
          </div>
          <div class="row">
            <div class="col-md-5 mx-auto">
              <div class="text-center blog-list">
                <div class="blog-list-title mb-3">
                  <h4>
                    <a href="how-to-start-a-coffee-company-part-one.html">
                      How to Start a Coffee Company, Part One
                    </a>
                  </h4>
                  <small>SEP. 17, 2018 - MACKYNZIE SCHUTZ</small>
                </div>
                <div class="blog-list-content">
                  <p>
                    Oh boy. I’ve been delaying this trip recap for a very long
                    time because so much happened and I’m not really sure how to
                    cohesively communicate all of it to...
                    <br />
                  </p>
                  <a
                    href="/how-to-start-a-coffee-company-part-one"
                    class="text-orange"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="newsletter"
        class="component bg-cover"
        style={{ background: `url("${NewsBg}")` }}
      >
        <div class="container">
          <div class="intro text-center mb-5">
            <h5 class="text-white">Newsletter Subscription</h5>
            <h3 class="text-white">Keep Me Updated</h3>
          </div>
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div id="es-subcribe">
                <Subscribe />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
