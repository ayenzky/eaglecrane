import React from 'react'
import Sticky from 'react-sticky-el'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'



class Layout extends React.Component {
  render() {
    const { location, title, children, customclass } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let hero

    if (location.pathname === rootPath) {
      hero = (
        <Hero/>
      )
    } 
    else if (location.pathname === rootPath + `contact`) {
      hero = (
        <div className="hero-main">
          <div className="hero-bg"/>
          <div className="container">
              <div className="row">
                  <div className="col-md-9 pr-md-5">
                      <div className="hero-main-content">
                          <h1 className="text-white">{title}</h1>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      )
    }
    else {
      hero = (
        <div className="hero-main">
          <div className="hero-bg"/>
          <div className="container">
              <div className="row">
                  <div className="col-md-9 pr-md-5">
                      <div className="hero-main-content">
                          <h1 className="text-white">{title}</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      )
    }
    return (
      <div className={location.pathname === rootPath ? 'home' : customclass || 'page'}>
        <header>
        <Sticky
              className="sticky-wrapper"
              stickyClassName="is-sticky"
              stickyStyle={{ transform: 'unset', zIndex: '2' }}
            >
          <Header/>
        </Sticky>
        </header>
        {hero}
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    )
  }
}

export default Layout
