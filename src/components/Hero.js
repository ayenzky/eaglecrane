import React from 'react'
// import { Link } from 'gatsby'
import './hero.css'
import Modal from './Modal'
import AnchorLink from 'react-anchor-link-smooth-scroll'


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
                <div className="col-md-8 pr-md-5">
                    <div className="hero-content">
                        <h1 className="hero-title text-white">LIKE FREE COFFEE?</h1>
                        <h4 className="hero-subtitle text-white">Join the Coffee Club and start with a free bag! Just pay $5 for shipping.</h4>
                        <div className="d-flex justify-content-start mt-4">
                            <AnchorLink href='#subscribe' className="alink hvr-shadow mr-3">Subscribe</AnchorLink>
                            <Modal
                                size='lg'
                                id='play-button'
                                html=<img src="/img/play-arrow.svg" width="30" className="mb-0" alt="play"/>
                                buttonclass='btn btn-primary playlink'
                                >
                                <div style={{padding:`56.25% 0 0 0`, position:`relative`}}>
                                    <iframe title="eagle" id="myvideo" src="https://player.vimeo.com/video/295221419?autoplay=1&title=0&byline=0&portrait=0&loop=1" 
                                        style={{
                                            position:`absolute`,
                                            top:0,
                                            left:0,
                                            width:`100%`,
                                            height:`100%`
                                        }} allow="autoplay" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                                </div>
                            </Modal>
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

