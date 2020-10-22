import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import TagsLayout from '../components/TagsLayout';

const Videos = ({
  data: {
    videos: { edges },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <TagsLayout>
        <div>
            <Helmet title={title} />
            <div>
            <h1>Videos</h1>
            <ul>
                {edges.map(({node})=> (
                <li key={node.id}>
                    <Link to={`/videos/${node.videoId}/`}>
                        {node.title}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
            <pre>{JSON.stringify(edges, null, 2)}</pre>
        </div>
    </TagsLayout>
)

export default Videos

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    videos: allYoutubeVideo(filter: {channelId: {eq: "UCYN2oFv5nFNtgazsBvlwvmw"}}) {
        edges {
            node {
                id
                title
                description
                videoId
                publishedAt
                privacyStatus
                channelTitle
            }
        }
    }
  }
`