import React from 'react'
import { TimelineMax, Power1 } from 'gsap'
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


export default class Anilink extends React.Component {
  constructor(props) {
    super(props)

    this.verticalAnimation = this.verticalAnimation.bind(this)

    this.layoutContents = React.createRef()
    this.transitionCover = React.createRef()
  }

  verticalAnimation = ({ length }, direction) => {
    const directionTo = direction === 'up' ? '-100%' : '100%'
    const directionFrom = direction === 'up' ? '100%' : '-100%'

    // convert ms to s for gsap
    const seconds = length

    return new TimelineMax()
      .set(this.transitionCover, { y: directionFrom })
      .to(this.transitionCover, seconds / 2, {
        y: '0%',
        ease: Power1.easeInOut,
      })
      .set(this.layoutContents, { opacity: 0 })
      .to(this.transitionCover, seconds / 2, {
        y: directionTo,
        ease: Power1.easeIn,
      })
  }

  test(entry, node) {
    return new TimelineMax().staggerFrom(
      node.querySelectorAll('h2, p, a, pre'),
      1,
      { opacity: 0, y: '+=50' },
      0.1
    )
  }

  message(message) {
    console.log(message)
  }
  render() {
    const { children, to, hex } = this.props
    return (
      <div ref={n => (this.layoutContents = n)}>
      <AniLink to={to} hex={hex}>
        {children}
      </AniLink>
      <TransitionPortal>
          <div
            ref={n => (this.transitionCover = n)}
            style={{
              position: 'fixed',
              background: '#4b2571',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              transform: 'translateY(100%)',
            }}
          />
        </TransitionPortal>
      </div>
    )
  }

}