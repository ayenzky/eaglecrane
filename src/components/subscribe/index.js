import React from 'react'

class Subscribe extends React.Component {
	componentDidMount() {
		if (window) {
			const script = document.createElement('script')
			script.type = 'text/javascript'
			script.src = `https://forms.webriq.com/js/initForms`
			const headScript = document.getElementsByTagName('script')[0]
			headScript.parentNode.insertBefore(script, headScript)
		}
	}
	render() {
		return (
			<form
				class="form-newsletter"
				action="/thank-you"
				method="post"
				data-form-id="5c7f97278ba9a30a93a2a085"
				webriq="true"
			>
				<div class="form-row d-flex justify-content-center">
					<div class="col-md-8 p-0">
						<div class="form-group">
							<input
								class="form-control"
								type="email"
								name="Email"
								placeholder="Enter Your Email Address"
							/>
						</div>
					</div>
					<div class="col-md-4 p-0">
						<div class="form-group">
							<button class="btn btn-primary hvr-shadow" type="submit">
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		)
	}
}

export default Subscribe
