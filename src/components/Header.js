import React from 'react'
import { Link } from 'gatsby'
import { Image } from 'react-bootstrap'
import Menu from './Menu'

const Header = () => (
  <div className="menu-container">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-9 col-md-5">
                        <div className="nav-brand">
                            <h4 className="m-0 text-white logo-text"><Link to="/"><Image className="mb-0" src="/img/logo.png" alt="logo"/></Link></h4>
                        </div>
                    </div>
                    <div className="col-2 col-md-6 d-flex justify-content-end align-items-center ml-auto">
                        <a className="d-none align-items-center join-us text-uppercase" href="/">Join Us</a>
                        <Menu/>
                </div>
            </div>
        </div>
    </div>
)

export default Header
