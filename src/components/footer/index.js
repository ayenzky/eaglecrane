import React from 'react'
import Coffee from '../../images/001-coffee-cup.svg'
import Pin from '../../images/002-pin.svg'
import Tel from '../../images/003-telephone.svg'
import Mail from '../../images/004-mail.svg'
import Fb from '../../images/002-facebook.svg'

const Footer = ({ siteTitle }) => (
	<footer class="bg-dirty-white pt-4">
		<div class="container py-5">
			<div class="row mb-5">
				<div class="col-md-5 pr-3 pr-md-5">
					<h4 class="mb-4">Why Uganda?</h4>
					<p>
						Life is hard in Uganda, thanks to economic instability and political
						corruption most people live in poverty and must grow their own food
						to survive. But much like their coffee, the people are beautiful and
						full of surprises; needing a hand-up more than a hand-out. Proceeds
						from every bag of Eagle &amp; Crane Coffee go to development and
						education efforts in this remarkable East African Country.
					</p>
				</div>
				<div class="col-md-2">
					<h4 class="mb-4">Menu</h4>
					<ul class="list-unstyled">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">Coffee Club</a>
						</li>
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">Blog</a>
						</li>
						<li>
							<a href="/">Join Us</a>
						</li>
						<li>
							<a href="/">Contact Us</a>
						</li>
					</ul>
				</div>
				<div class="col-md-4">
					<h4 class="mb-4">Company</h4>
					<ul class="list-unstyled footer-info">
						<li>
							<img src={Coffee} width="20" class="mr-2" alt="Coffee" />
							<span>Eagle &amp; Crane Coffee Co</span>
						</li>
						<li>
							<img src={Pin} width="20" class="mr-2" alt="Pin" />
							<span>3126 Temple Gap Rd.,&nbsp;Colorado Springs, CO</span>
						</li>
						<li>
							<img src={Tel} width="20" class="mr-2" alt="Telephone" />
							<a
								href="tel:615-900-6871"
								target="_blank"
								rel="noopener noreferrer"
							>
								615-900-6871
							</a>
						</li>
						<li>
							<img src={Mail} width="20" class="mr-2" alt="mail" />
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
						rel="noopener noreferrer"
					>
						<img src={Fb} width="40" alt="Facebook" />
					</a>
				</div>
			</div>
			<p id="copywrite" class="mb-0">
				Copyright &copy; {new Date().getFullYear()} - Eagle &amp; Crane Coffee
				Co. - All Rights Reserved - Designed by&nbsp;
				<a href="https://www.webriq.services/">WebriQ Goes Mad</a>&nbsp;-
				Powered by&nbsp;<a href="https://www.webriq.com/">WebriQ</a>
			</p>
		</div>
	</footer>
)

export default Footer
