import React from 'react'
import Swiper from 'react-id-swiper'
import Star from '../../images/star.svg'

class ReviewSlider extends React.Component {
  render() {
    const params = {
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }

    return (
      <Swiper {...params}>
        <div className="review text-center">
          <div className="review-body">
            <h5>
              My wife used to work for a coffee shop. We know a fine bean when
              we have one— E&C coffee is surprisingly smooth and delicious. We
              recommend this coffee to anyone who wants their daily fix.
            </h5>
          </div>
          <div className="review-author mt-4">
            <ul className="list-unstyled star-rating d-flex justify-content-center align-items-center">
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
            </ul>
            <h6 className="text-uppercase text-white font-weight-bold">
              Tyler Ethridge
            </h6>
          </div>
        </div>
        <div className="review text-center">
          <div className="review-body">
            <h5>
              I just received my bag of whole coffee beans, and this is
              seriously some of the best coffee I've ever had! I reccomend this
              coffee for anyone who enjoys an amazing fresh cup of coffee! It
              took 1 week to arrive to my door! The price was around $19.00, but
              it is really good quality. There is a freshness to the coffee that
              is so much better than the Starbucks coffee beans that I
              purchased.
            </h5>
          </div>
          <div className="review-author mt-4">
            <ul className="list-unstyled star-rating d-flex justify-content-center align-items-center">
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
              <li>
                <img src={Star} width="20" alt="rating" />
              </li>
            </ul>
            <h6 className="text-uppercase text-white font-weight-bold">
              Tyler Ethridge
            </h6>
          </div>
        </div>
      </Swiper>
    )
  }
}

export default ReviewSlider
