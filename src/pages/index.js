import React from "react"
import { Link, graphql } from "gatsby"
import _ from 'lodash'
import Bio from "../components/bio"
//import Layout from "../components/layout"
import TagLayout from '../components/TagsLayout';
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from '../components/ui/Button';

const styles = {
  author: {
    color: '#ee2266'
  },
  date: {
    color: '#888888'
  }
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <TagLayout location={location} title={siteTitle}>
        <SEO title="Bình luận" />
        <Bio />
        <p>No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).</p>
      </TagLayout>
    )
  }

  return (
    <TagLayout location={location} title={siteTitle}>
      <SEO title="Bình luận" />
      {/* <a href="https://www.youtube.com/channel/UCYN2oFv5nFNtgazsBvlwvmw">YouTube</a>&nbsp;&nbsp;&nbsp;
      <a href="https://www.facebook.com/pg/NghiTruongcom-114028710488039">Facebook</a> */}
      {/* <Bio /> */}
      {posts.filter(obj => !obj.fields.slug.startsWith('/drafts')).map((post) => {
        const title = post.frontmatter.title || post.fields.slug;
        const authors = post.frontmatter.authors || null;
        const tags = post.frontmatter.tags || [];
        return (
          <article
            key={post.fields.slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  fontFamily: `Georgia, sans-serif`,
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={post.fields.slug}
                  itemProp="url"
                >
                  <span itemProp="headline">{title}</span>
                </Link>
              </h3>
              <div style={{marginBottom: '10px'}}>
                {authors && <small><span style={styles.author}>{authors}</span></small>}
                <small style={styles.date}>, {post.frontmatter.date}</small>
              </div>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
              
            </section>
            <small>
            {tags.map(tag => <Button label={tag} href={`/tags/${_.kebabCase(tag)}/`} /> )}
            </small>
            <hr style={{marginTop: '20px'}}/>
          </article>
        )
      })}
    </TagLayout>
  )
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
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          authors
          tags
        }
      }
    }
  }
`
