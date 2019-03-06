import React from 'react'
import { Link } from 'gatsby'
import Bars from '../../images/bars.svg'
import Coffee from '../../images/001-coffee-cup.svg'
import Pin from '../../images/002-pin.svg'
import Tel from '../../images/003-telephone.svg'
import Mail from '../../images/004-mail.svg'
import Fb from '../../images/002-facebook.svg'

const Header = ({ siteTitle }) => (
	<header>
		<div class="menu-container">
			<div class="container">
				<div class="row d-flex align-items-center">
					<div class="col-9 col-md-5">
						<div class="nav-brand">
							<h4 class="m-0 text-white logo-text">
								<Link to="/">Eagle &amp; Crane Coffee Co.</Link>
							</h4>
						</div>
					</div>
					<div class="col-2 col-md-6 d-flex justify-content-end align-items-center ml-auto">
						<Link
							to="/"
							class="d-none align-items-center join-us text-uppercase"
						>
							Join Us
						</Link>
						<div class="nav_content">
							<h2 class="float-right nav_handle mb-0">
								{' '}
								<img src={Bars} alt="bars" />
							</h2>
						</div>
						<div
							class="d-none float-right navigation"
							data-navigation-handle=".nav_handle"
							data-navigation-content=".nav_content"
						>
							<ul class="list-unstyled d-flex main-nav mb-0">
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
							<ul class="list-unstyled footer-info mt-4">
								<li>
									<img src={Coffee} width="22" class="mr-2" alt="Coffee" />
									<span>Eagle &amp; Crane Coffee Co</span>
								</li>
								<li>
									<img src={Pin} width="21" class="mr-2" alt="pin" />
									<span>3126 Temple Gap Rd.,&nbsp;Colorado Springs, CO</span>
								</li>
								<li>
									<img src={Tel} width="21" class="mr-2" alt="Telephone" />
									<a
										href="tel:615-900-6871"
										target="_blank"
										rel="noopener noreferrer"
									>
										615-900-6871
									</a>
								</li>
								<li>
									<img src={Mail} width="21" class="mr-2" alt="mail" />
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
					</div>
				</div>
			</div>
		</div>
	</header>
)

export default Header
