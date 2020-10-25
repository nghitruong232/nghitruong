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
  location,
  data: {
    lecanVideos: { edges: lecanEdges },
    vietfaceVideos: { edges: vietfaceEdges },
    lstvVideos: {edges: lstvEdges},
    fbncVideos: {edges: fbncEdges},
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
    <TagsLayout location={location}>
        <div>
            <Helmet title={title} />
            <div>
              <div style={container(theme, matches)}>
                {fbncEdges.slice(0,3).map(({node})=> (
                  <VideoCard node={node} />
                ))}
                {lecanEdges.slice(0,3).map(({node})=> (
                  <VideoCard node={node} />
                ))}
                {lstvEdges.slice(0,3).map(({node})=> (
                  <VideoCard node={node} />
                ))}
                {vietfaceEdges.slice(0,3).map(({node})=> (
                  <VideoCard node={node} />
                ))}
                {fbncEdges.slice(3,6).map(({node})=> (
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
    fbncVideos: allNewsVideo (filter: {channelId: {eq: "UC7723FqVehXq2zeRb3tP0hQ"}}) {
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