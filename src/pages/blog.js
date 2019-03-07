import React from 'react'
import Layout from '../layouts'

/**
 * Replaces the typical paginated blog posts to infinite scrolling. Enabled by default.
 * If USE_PAGINATION is set to 'true' in env, this will not page will be discarded
 */
class BlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <p>test</p>
      </Layout>
    )
  }
}

export default BlogPage
