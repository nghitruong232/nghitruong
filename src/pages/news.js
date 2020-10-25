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
    lecanVideos: { edges: lecanEdges },
    vietfaceVideos: { edges: vietfaceEdges },
    lstvVideos: {edges: lstvEdges},
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const lecanNodes = lecanEdges.slice(0,3);
  const vietfaceNodes = vietfaceEdges.slice(0,3);
  const lstvNodes = lstvEdges.slice(0,3);
  return (
    <TagsLayout>
        <div>
            <Helmet title={title} />
            <div>
              <div style={container(theme, matches)}>
                {lecanEdges.slice(0,3).map(({node})=> (
                  <VideoCard node={node} />
                ))}
                {lstvEdges.slice(0,3).map(({node})=> (
                  <VideoCard node={node} />
                ))}
                {vietfaceEdges.slice(0,3).map(({node})=> (
                  <VideoCard node={node} />
                ))}
                {lecanEdges.slice(3,6).map(({node})=> (
                  <VideoCard node={node} />
                ))}
                {lstvEdges.slice(3,6).map(({node})=> (
                  <VideoCard node={node} />
                ))}
                {vietfaceEdges.slice(3,6).map(({node})=> (
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
    lecanVideos: allNewsVideo (filter: {channelId: {eq: "UCBrqGwGr5dnKgV4PxTiIAFA"}}) {
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
    vietfaceVideos: allNewsVideo (filter: {channelId: {eq: "UCxdpvMPGUe_BOv4D1zr3caA"}}) {
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
    lstvVideos: allNewsVideo (filter: {channelId: {eq: "UCH47U3R3EZ8yVH96m2wbIfw"}}) {
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