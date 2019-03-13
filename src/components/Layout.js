import React from 'react'
import { Link } from 'gatsby'
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
    } else {
      hero = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
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
