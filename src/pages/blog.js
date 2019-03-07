import React from 'react'
import Layout from '../layouts'
import { Link, graphql } from 'gatsby'

export default function Index({ data }) {
	const { edges: posts } = data.allMarkdownRemark
	return (
		<Layout>
			<div className="container pt-5 mt-5">
				<div className="blog-posts my-5">
					{posts
						.filter(post => post.node.frontmatter.title.length > 0)
						.map(({ node: post }) => {
							return (
								<div className="blog-post-preview" key={post.id}>
									<h1>
										<Link to={post.frontmatter.path}>
											{post.frontmatter.title}
										</Link>
									</h1>
									<h2>{post.frontmatter.date}</h2>
									<p>{post.excerpt}</p>
								</div>
							)
						})}
				</div>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
					}
				}
			}
		}
	}
`
