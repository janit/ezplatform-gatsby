/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`)
const slash = require(`slash`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
        query AllArticles {
            ezplatform {
                content {
                    articles(first: 10000) {
                        edges {
                            node {
                                _content {
                                    id
                                }
                            }
                        }
                    }
                }
            }
        }
  `)

  const postTemplate = path.resolve(`./src/templates/article.js`)
  result.data.ezplatform.content.articles.edges.forEach(edge => {
    createPage({
      path: '/article/' + edge.node._content.id,
      component: slash(postTemplate),
      context: {
        id: edge.node._content.id,
      },
    })
})
}