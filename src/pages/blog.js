import React from 'react'
import { Link, graphql } from 'gatsby'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Blog"
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <section className="component">
          <div className="container">
          {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={`blog/${node.fields.slug}`}>
                  {title}
                </Link>
              </h3>
              <ul className="blog-created m-0 list-unstyled d-flex align-items-center">
                <li className="mr-3">
                  <LazyLoadImage effect="blur" src="/img/clock.svg"/>
                  <small className="ml-1 text-uppercase">{node.frontmatter.date}</small>
                </li>
                <li className="mr-2">
                  <LazyLoadImage effect="blur" src="/img/001-coffee-cup.svg" width="16px"/>
                  <small className="ml-1 text-uppercase">{node.frontmatter.author}</small>
                </li>
              </ul>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <Link
                to={`blog/${node.fields.slug}`}
                className="text-orange"
              >
                Read More
              </Link>
            </div>
          )
        })}
          </div>

        </section>
        
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            author
          }
        }
      }
    }
  }
`
