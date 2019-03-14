import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
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
        <p>{post.frontmatter.date} - {post.frontmatter.author}</p>
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
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
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
        <Link to="/blog" className="text-orange">Take Me Home</Link>
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
