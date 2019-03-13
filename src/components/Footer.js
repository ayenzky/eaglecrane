import React  from 'react'
import { Link } from 'gatsby'

export default () => (
  <footer className="bg-white pt-4">
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col-md-5 pr-3 pr-md-5">
                    <h4 className="mb-4">Why Uganda?</h4>
                    <p>Life is hard in Uganda, thanks to economic instability and political corruption most people live in poverty and must grow their own food to survive. But much like their coffee, the people are beautiful and full of surprises; needing
                        a hand-up more than a hand-out. Proceeds from every bag of Eagle &amp; Crane Coffee go to development and education efforts in this remarkable East African Country.</p>
                </div>
                <div className="col-md-2">
                    <h4 className="mb-4">Menu</h4>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Coffee Club</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Join Us</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4 className="mb-4">Company</h4>
                    <ul className="list-unstyled footer-info">
                        <li><img src="/img/001-coffee-cup.svg" width="20" className="mr-2 mb-0" alt="business" /><span>Eagle &amp; Crane Coffee Co</span></li>
                        <li><img src="/img/002-pin.svg" width="20" className="mr-2 mb-0" alt="location" /><span>2727 N Cascade Ave #155, Colorado Springs, CO 80907</span></li>
                        <li><img src="/img/003-telephone.svg" width="20" className="mr-2 mb-0" alt="phone" /><a href="tel://6159006871">615-900-6871</a></li>
                        <li><img src="/img/004-mail.svg" width="20" className="mr-2 mb-0" alt="email" /><a href="mailto:info@eagleandcrane.com">info@eagleandcrane.com</a></li>
                    </ul><a href="/"><img src="/img/002-facebook.svg" width="40" alt="facebook" /></a></div>
            </div>
            <p id="copywrite" className="mb-0">© Copyright {new Date().getFullYear()} - Eagle &amp; Crane Coffee Co. - All Rights Reserved - Designed by <a href="https://www.webriq.services/">WebriQ Goes Mad</a> - Powered by <a href="https://www.webriq.com/">WebriQ</a></p>
        </div>
    </footer>

)