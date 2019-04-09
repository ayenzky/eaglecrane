import React  from 'react'
import { Link } from 'gatsby'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default () => (
  <footer className="bg-white pt-4">
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col-md-6 col-lg-4 mb-4">
                    <h4 className="mb-4">Why Uganda?</h4>
                    <p>Life is hard in Uganda, thanks to economic instability and political corruption most people live in poverty and must grow their own food to survive. But much like their coffee, the people are beautiful and full of surprises; needing
                        a hand-up more than a hand-out. Proceeds from every bag of Eagle &amp; Crane Coffee go to development and education efforts in this remarkable East African Country.</p>
                </div>
                <div className="col-md-6 col-lg-2 mb-4">
                    <h4 className="mb-4">Menu</h4>
                    <ul className="list-unstyled ml-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/coffee-club">Coffee Club</Link></li>
                        <li><Link to="/about-us">About</Link></li>
                        <li><Link to="/our-company">Our Company</Link></li>
                        <li><Link to="/our-house-blend">Our House Blend</Link></li>
                        <li><Link to="/partner">Partner</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                    <h4 className="mb-4">Company</h4>
                    <ul className="list-unstyled ml-0 footer-info">
                        <li><LazyLoadImage effect="blur" src="/img/001-coffee-cup.svg" width="20" className="mr-2 mb-0" alt="business" /><span>Eagle &amp; Crane Coffee Co</span></li>
                        <li><LazyLoadImage effect="blur" src="/img/002-pin.svg" width="20" className="mr-2 mb-0" alt="location" /><span>2727 N Cascade Ave #155, Colorado Springs, CO 80907</span></li>
                        <li><LazyLoadImage effect="blur" src="/img/003-telephone.svg" width="20" className="mr-2 mb-0" alt="phone" /><a href="tel://6159006871" title="telephone">615-900-6871</a></li>
                        <li><LazyLoadImage effect="blur" src="/img/004-mail.svg" width="20" className="mr-2 mb-0" alt="email" /><a href="mailto:info@eagleandcrane.com" title="email">info@eagleandcrane.com</a></li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                  <h4 className="mb-4">Operating Hours</h4>
                  <p>Weekdays (9am - 5pm)</p>
                  <p>Weekends (Closed)</p>
                  <h5>Social</h5>
                  <a href="https://www.facebook.com/eagleandcrane" target="_blank" rel="noopener noreferrer" title="facebook"><LazyLoadImage effect="blur" className="mb-0 mr-2" src="/img/002-facebook.svg" width="40" alt="facebook" /></a>
                  <a href="https://www.instagram.com/eaglecranecoffee/" target="_blank" rel="noopener noreferrer" title="instagram"><LazyLoadImage effect="blur" className="mb-0 mr-2" src="/img/001-instagram.svg" width="40" alt="instagram" /></a>
                  <a href="https://vimeo.com/user25548849" target="_blank" rel="noopener noreferrer" title="vimeo"><LazyLoadImage effect="blur" className="mb-0 mr-2" src="/img/002-vimeo.svg" width="40" alt="vimeo" /></a>
                </div>
            </div>
            <p id="copywrite" className="mb-0">© Copyright {new Date().getFullYear()} - Eagle &amp; Crane Coffee Co. - All Rights Reserved - Designed by <a href="https://www.webriq.services/" target="_blank" rel="noopener noreferrer" title="webriq goes mad">WebriQ Goes Mad</a> - Powered by <a href="https://www.webriq.com/" target="_blank" rel="noopener noreferrer" title="webriq">WebriQ</a></p>
        </div>
    </footer>

)