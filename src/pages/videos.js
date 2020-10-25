import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import TagsLayout from '../components/TagsLayout';
import VideoCard from '../components/ui/VideoCard';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const container = (theme, matches) => ({
  display: 'grid',
  gridTemplateColumns: matches ? '1fr 1fr 1fr' : '1fr 1fr',
  columnGap: '15px',
  rowGap: '15px',
  marginTop: '10px',
})

const Videos = ({
  data: {
    videos: { edges },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <TagsLayout>
        <div>
            <Helmet title={title} />
            <div>
              {/* <h1>Videos</h1> */}
              <div style={container(theme, matches)}>
                {edges.map(({node})=> (
                  <VideoCard node={node} />
                ))}
              </div>
            </div>
        </div>
    </TagsLayout>
  ) 
}

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