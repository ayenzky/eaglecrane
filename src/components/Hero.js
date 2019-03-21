import React from 'react'
// import { Link } from 'gatsby'
import './hero.css'
import AnchorLink from './Anchorlink'


class Hero extends React.Component {
    componentDidMount () {
    if(window) {
      const script = document.createElement("script");
      script.src = `https://player.vimeo.com/api/player.js`
      document.body.appendChild(script);
    }
  }
    render(){
        return (
            <div className="hero">
        <div className="video-background">
            <iframe title="video" src="https://player.vimeo.com/video/295221419?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="hero-content text-center">
                        <h1 className="hero-title text-white">EAGLE & CRANE COFFEE CO.</h1>
                        <h4 className="hero-subtitle text-white">COFFEE // SUBSCRIPTION // DIRECT TRADE</h4>
                        <div className="d-flex justify-content-center mt-5">
                            <AnchorLink
                                classes = "subscribe hvr-shadow hvr-ripple-out mr-3 bg-orange text-white"
                                href= "subscription"
                              >
                              Subscribe
                              </AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        )
    }
}
export default Hero

