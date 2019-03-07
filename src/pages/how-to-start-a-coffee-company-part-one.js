import React from 'react'
import Layout from '../layouts'
import HeroBG from '../images/heromainbg.jpg'

const IndexPage = () => (
	<Layout head={{ title: 'Home' }}>
		<div class="hero-main">
			<div
				class="hero-bg bg-cover"
				style={{ background: `url("${HeroBG}")` }}
			/>
			<div class="container">
				<div class="row">
					<div class="col-md-9 pr-md-5">
						<div class="hero-main-content">
							<h1 class="text-white">
								How to Start a Coffee Company, Part One
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		<main class="page">
			<section class="component">
				<div class="container">
					<p>
						Oh boy. I’ve been delaying this trip recap for a very long time
						because so much happened and I’m not really sure how to cohesively
						communicate all of it to you. So let’s start from the beginning and
						do a 30,000ft flyby. I guess if we call this a Part One then we can
						get into more detail later. So get ready for the first part of my
						trip, or “How to Start a Coffee Company, part One”.
					</p>
					<img
						class="img-fluid mb-4"
						src="https://cdn.shopify.com/s/files/1/0028/4544/2114/files/2018-01-10_06.56.41_large.jpg?v=1537233395"
						alt="man-standing"
					/>
					<p>
						For those who don’t know, I graduated from a small bible college
						here in Colorado during the spring of 2017. That’s a whole other
						story, but attending Charis Bible College has been the best decision
						I’ve ever made. It was there that I learned who I’m made to be and
						how to follow the leading of God in my life. During my time there I
						had the privilege of visiting the little African country of Uganda
						and it changed my life, seriously. Then this past January I followed
						the leading of the Holy Spirit and went back to Uganda with
						essentially no plan or purpose. All I had to stand on was an
						overwhelming feeling that I needed to be there and that in faith he
						would work it all out. So that’s what I did.&nbsp;
					</p>
					<p>
						His hand was in every part of the trip, from purchasing the plane
						ticket in December to taking an extended layover in Seattle on my
						way home. There’s a lot to get through, so let’s start.
					</p>
					<p>
						The trip started off strong. My plane was delayed in Denver till
						past midnight because of flooding in the terminal at JFK (my first
						connecting city). Thankfully the total delay was only 2 hours,
						really not all that bad… Until I realized I’d miss my plane to
						Africa. My layover in Dubai was only an hour. I was delayed 2 hours.
						I’m definitely going to miss that plane.
					</p>
					<p>
						As expected, I missed the only flight to Uganda that day and had to
						stay a full 24 hours in Dubai. Having never been there I took the
						opportunity to visit the city and see what it was about. Don’t tell
						my mom but I may or may not have gotten lost on my journey to the
						Old City center, got propositioned by a few ladies on the way,
						bought a fake watch, enjoyed a wonderful water taxi ride, and gazed
						at the tallest building in the world. That building, by the way, is
						very hard to take pictures of…it’s very, very tall.
					</p>
					<img
						class="img-fluid mb-4"
						src="https://cdn.shopify.com/s/files/1/0028/4544/2114/files/2018-01-09_10.46.40_HDR_large.jpg?v=1537234138"
						alt="shopify"
					/>
					<p>
						Dubai is a strange place and I’d like to see it through the eyes of
						a local someday. On the outside looking in you can’t help but notice
						the extravagant wealth of that city. They have the largest, biggest,
						greatest whatever you can think of. Man made islands, engineering
						marvels, platinum plated iPhones. You get the idea.
					</p>
					<p>
						My time in Dubai was unexpected and short. I didn’t intend to spend
						a full day there but I’m glad it happened. It reminded me that
						sometimes there are things that are simply out of your control. You
						can make all the plans you want and get frustrated and mad when they
						have to change, but in the end the best thing you can do is laugh it
						off and look for the beauty where you are. In fact, this detour set
						the tone for the rest of the trip, hardly anything went as planned
						and I was constantly forced to rely on the peace God gave me for
						direction and guidance.
					</p>
					<h3>Stay tuned for Part 2!&nbsp;</h3>
					<p>
						In the meantime, here's a video of my water taxi in Dubai. Hopefully
						this'll hold you over until the next post ;)&nbsp;
					</p>
					<div>
						<iframe
							title="vimeo video"
							src="https://player.vimeo.com/video/290400935?title=0&byline=0&portrait=0"
							frameborder="0"
							webkitallowfullscreen
							mozallowfullscreen
							allowfullscreen
						/>
					</div>
					<div />
				</div>
			</section>
		</main>
	</Layout>
)

export default IndexPage
