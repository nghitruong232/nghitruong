import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import TagsLayout from '../components/TagsLayout';
import styles from '../styles';

const text = {
  fontFamily: `Georgia, sans-serif`,
  //border: '1px solid gray',
  marginTop: '20px',
  marginBottom: '10px',
}



const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} bài với đề mục "${tag}"`
  return (
    <TagsLayout >
        <div>
          <h4 style={text}>Chuyên đề</h4>
          <h2 style={{...text, margin: '0 0 30px'}}>{tag} ({totalCount})</h2>
          <ul>
              {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                  <li key={slug}>
                    <Link to={slug}>{title}</Link>
                  </li>
                )
              })}
          </ul>
        </div>
    </TagsLayout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`