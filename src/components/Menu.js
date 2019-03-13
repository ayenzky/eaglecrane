import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Image } from 'react-bootstrap'
import SideBar from 'react-sidebar'
import './menu.css'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
      sidebarpullRight: true,
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }
  render() {
    return (
      <SideBar
        sidebar={
          <div className="navigation">
              <ul className="list-unstyled main-nav mb-0">
                  <li><Link to="/">Home </Link></li>
                  <li><Link to="/">Coffee Club</Link></li>
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Blog</Link></li>
                  <li><Link to="/">Join Us</Link></li>
                  <li><Link to="/">Contact Us </Link></li>
              </ul>
              <ul className="list-unstyled footer-info mt-4">
                  <li><Image src="/img/001-coffee-cup.svg" width="22" className="mr-2 mb-0" alt="business"/><span>Eagle &amp; Crane Coffee Co</span></li>
                  <li><Image src="/img/002-pin.svg" width="21" className="mr-2 mb-0" alt="location"/><span>2727 N Cascade Ave #155, Colorado Springs, CO 80907</span></li>
                  <li><Image src="/img/003-telephone.svg" width="21" className="mr-2 mb-0" alt="phone"/><a href="tel://6159006871">615-900-6871</a></li>
                  <li><Image src="/img/004-mail.svg" width="21" className="mr-2 mb-0" alt="email"/><a href="mailto:mack@eagleandcrane.com">mack@eagleandcrane.com</a></li>
              </ul><a href="/"><Image src="/img/002-facebook.svg" width="40" alt="facebook" /></a>
              </div>
  
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight={this.state.sidebarpullRight}
        styles={{
          sidebar: {
            background: '#ffffff',
            width: '300px',
            position: 'fixed',
            zIndex: '9999',
            height: '100%',
          },
          root: { position: 'relative', overflow: 'visible' },
          overlay: { backgroundColor: 'rgba(0,0,0,.5)' },
          content: {
            position: 'relative',
            overflow: 'visible',
            cursor: 'pointer',
          },
        }}
      >
        <div
          className="nav_content"
          onClick={() => this.onSetSidebarOpen(true)}
        >
          <h2 className="float-right nav_handle mb-0"><Image className="mb-0" src="/img/bars.svg" alt="bars"/></h2>
        </div>
      </SideBar>
    )
  }
}