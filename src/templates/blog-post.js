import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {
  FacebookIcon, 
  FacebookShareButton, 
  TwitterIcon, 
  TwitterShareButton,
  GooglePlusIcon,
  GooglePlusShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = post.frontmatter.title
    const siteBanner = post.frontmatter.banner
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} banner={siteBanner} />
        <section className="component">
        <div className="container">
        <ul className="blog-created m-0 list-unstyled d-flex align-items-center">
          <li className="mr-3">
            <LazyLoadImage effect="blur" src="/img/clock.svg"/>
            <small className="ml-1 text-uppercase">{post.frontmatter.date}</small>
          </li>
          <li className="mr-2">
            <LazyLoadImage effect="blur" src="/img/001-coffee-cup.svg" width="16px"/>
            <small className="ml-1 text-uppercase">{post.frontmatter.author}</small>
          </li>
        </ul>
        <div className="the-social d-flex mb-4">
        <div className="mr-2">
          <FacebookShareButton  url={`https://eagleandcrane.com/blogs${post.fields.slug}`} quote={siteTitle}>
            <FacebookIcon size={40} round={true}/>
          </FacebookShareButton>
        </div>
        <div className="mr-2">
        <TwitterShareButton  url={`https://eagleandcrane.com/blogs${post.fields.slug}`} title={siteTitle}>
          <TwitterIcon size={40} round={true}/>
        </TwitterShareButton>
        </div>
        <div className="mr-2">
        <GooglePlusShareButton  url={`https://eagleandcrane.com/blogs${post.fields.slug}`} title={siteTitle}>
          <GooglePlusIcon size={40} round={true}/>
        </GooglePlusShareButton>
        </div>
        <div className="mr-2">
        <LinkedinShareButton  url={`https://eagleandcrane.com/blogs${post.fields.slug}`} title={siteTitle} description={post.excerpt}>
          <LinkedinIcon size={40} round={true}/>
        </LinkedinShareButton>
        </div>
        <div className="mr-2">
        <EmailShareButton  url={`https://eagleandcrane.com/blogs${post.fields.slug}`} subject={siteTitle} body={post.excerpt}>
          <EmailIcon size={40} round={true}/>
        </EmailShareButton>
        </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginTop: `3rem`
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <Link to="/blog" className="alink hvr-shadow text-orange">Take Me Home</Link>
        <br />
        <br />
          </div>
        </section>
        
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        banner
      }
    }
  }
`
