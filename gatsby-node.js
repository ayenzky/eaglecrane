const path = require('path')
const slugify = require('slugify')
const fs = require('fs')

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogpost.js`)
  const getMarkdownRemark = makeRequest(
    graphql,
    `
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges
    // console.log(posts)
    posts.map(post => {
      createPage({
        path: post.node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          pathUrl: post.node.frontmatter.path,
        },
      })
      // console.log(post.node.frontmatter.path)
    })
    // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //   createPage({
    //     path: node.frontmatter.path,
    //     component: blogPostTemplate, // additional data can be passed via context
    //   })
    //   console.log(node.frontmatter.path)
    // });
  })
  return Promise.all([getMarkdownRemark])
}
