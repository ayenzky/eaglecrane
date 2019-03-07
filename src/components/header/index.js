import React from 'react'
import Sidebar from 'react-sidebar'
import { Link } from 'gatsby'
import Bars from '../../images/bars.svg'
import Coffee from '../../images/001-coffee-cup.svg'
import Pin from '../../images/002-pin.svg'
import Tel from '../../images/003-telephone.svg'
import Mail from '../../images/004-mail.svg'
import Fb from '../../images/002-facebook.svg'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sidebarOpen: false,
		}
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
	}

	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open })
	}

	render() {
		return (
			<Sidebar
				rootClassName="sidebar-wrap"
				sidebarClassName="sidebar"
				overlayClassName="sidebar-open"
				pullRight={true}
				sidebar={
					<div
						className="float-right navigation"
						data-navigation-handle=".nav_handle"
						data-navigation-content=".nav_content"
					>
						<ul className="list-unstyled main-nav mb-0 d-block">
							<li>
								{' '}
								<Link to="/">Home </Link>
							</li>
							<li>
								{' '}
								<Link to="/">Coffee Club</Link>
							</li>
							<li>
								{' '}
								<Link to="/">About</Link>
							</li>
							<li>
								{' '}
								<Link to="/">Blog</Link>
							</li>
							<li>
								{' '}
								<Link to="/">Join Us</Link>
							</li>
							<li>
								<Link to="/">Contact Us </Link>
							</li>
						</ul>
						<ul className="list-unstyled footer-info mt-4">
							<li>
								<img src={Coffee} width="22" className="mr-2" alt="Coffee" />
								<span>Eagle &amp; Crane Coffee Co</span>
							</li>
							<li>
								<img src={Pin} width="21" className="mr-2" alt="pin" />
								<span>3126 Temple Gap Rd.,&nbsp;Colorado Springs, CO</span>
							</li>
							<li>
								<img src={Tel} width="21" className="mr-2" alt="Telephone" />
								<a
									href="tel:615-900-6871"
									target="_blank"
									rel="noopener noreferrer"
								>
									615-900-6871
								</a>
							</li>
							<li>
								<img src={Mail} width="21" className="mr-2" alt="mail" />
								<a
									href="mailto:mack@eagleandcrane.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									mack@eagleandcrane.com
								</a>
							</li>
						</ul>
						<a
							href="https://www.facebook.com/eagleandcrane/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img src={Fb} width="40" alt="Facebook" />
						</a>
					</div>
				}
				open={this.state.sidebarOpen}
				onSetOpen={this.onSetSidebarOpen}
				styles={{ sidebar: { background: 'white' } }}
			>
				<header>
					<div className="menu-container">
						<div className="container">
							<div className="row d-flex align-items-center">
								<div className="col-9 col-md-5">
									<div className="nav-brand">
										<h4 className="m-0 text-white logo-text">
											<Link to="/">Eagle &amp; Crane Coffee Co.</Link>
										</h4>
									</div>
								</div>
								<div className="col-2 col-md-6 d-flex justify-content-end align-items-center ml-auto">
									<Link
										href="/"
										className="align-items-center join-us text-uppercase"
									>
										Join Us
									</Link>
									<div className="nav_content">
										<button onClick={() => this.onSetSidebarOpen(true)}>
											{' '}
											<img src={Bars} alt="bars" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</Sidebar>
		)
	}
}

export default Header
