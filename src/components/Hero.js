import React from 'react'
// import { Link } from 'gatsby'
import './hero.css'
import AnchorLink from './Anchorlink'
import SplitText from 'react-pose-text'


class Hero extends React.Component {
    componentDidMount () {
    if(window) {
      const script = document.createElement("script");
      script.src = `https://player.vimeo.com/api/player.js`
      document.body.appendChild(script);
    }
  }
    render(){
        const charPoses = {
          exit: { opacity: 0, y: 20 },
          enter: {
            opacity: 1,
            y: 0,
            delay: ({ charIndex }) => charIndex * 90
          }
        };

        const charHero = {
          exit: { opacity: 0, y: 20 },
          enter: {
            opacity: 1,
            y: 0,
            delay: ({ charIndex }) => charIndex * 80
          }
        };


        return (
            <div className="hero">
        <div className="video-background">
            <iframe title="video" src="https://player.vimeo.com/video/295221419?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="hero-content text-center">
                        <h1 className="hero-title text-white">
                        <SplitText initialPose="exit"  pose="enter" charPoses={charHero}>
                          
                          EAGLE & CRANE COFFEE CO.
                          
                        </SplitText>
                        </h1>
                        <h4 className="hero-subtitle text-white"><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>COFFEE // SUBSCRIPTION // DIRECT TRADE</SplitText></h4>
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

