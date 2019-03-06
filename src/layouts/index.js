import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import Header from '../components/header'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-id-swiper/src/styles/css/swiper.css'
import './index.css'
import './menu.css'

const Layout = ({ head, children }) => (
  <StaticQuery
    render={data => {
      const siteTitle =
        get(head, 'title') || get(data, 'site.siteMetadata.title')
      const siteName = get(head, 'name') || get(data, 'site.siteMetadata.name')
      const siteMetaDescription =
        get(head, 'meta.description') ||
        get(data, 'site.siteMetadata.meta.description')
      const siteMetaKeywords =
        get(head, 'meta.keywords') ||
        get(data, 'site.siteMetadata.meta.keywords')
      console.log(get(head, 'meta.noIndex'))
      const siteNoIndex = get(head, 'meta.noIndex')
        ? {
            name: 'robots',
            content: 'noindex',
          }
        : {}

      return (
        <>
          <Helmet
            title={siteTitle + ' - ' + siteName}
            meta={[
              {
                name: 'description',
                content: siteMetaDescription,
              },
              {
                name: 'keywords',
                content: siteMetaKeywords,
              },
              siteNoIndex,
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={siteName} />
          <div>{children}</div>
          <Footer />
        </>
      )
    }}
    query={graphql`
      query siteQuery {
        site {
          siteMetadata {
            title
            name
            meta {
              keywords
              description
            }
          }
        }
      }
    `}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
