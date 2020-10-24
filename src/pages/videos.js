import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import TagsLayout from '../components/TagsLayout';
import VideoCard from '../components/ui/VideoCard';
import { styles } from "../components/ui/styles";

const container = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}

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
              <div style={container}>
                {edges.map(({node})=> (
                  <VideoCard node={node} />
                ))}
              </div>
            </div>
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
                thumbnail {
                  url
                }
            }
        }
    }
  }
`