import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import TagsLayout from '../components/TagsLayout';
import styles from '../styles';

const Video = ({ pageContext, data }) => {
  const { node } = pageContext

  return (
    <TagsLayout >
        <div style={{marginTop: '10px', height: 'calc(75vw * 0.5625)', border: '2px solid black'}}>
          {/* <iframe width="630" height="360" src={`https://www.youtube.com/embed/${node.videoId}`} ></iframe> */}
          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${node.videoId}`}></iframe>
        </div>
        <div>
        <h3 style={{fontFamily: `Georgia, sans-serif`}}>{node.title}</h3>
        <p style={{whiteSpace: 'pre-line'}}>
          {node.description}
        </p>
        <Link to="/videos">All videos</Link>
        </div>
    </TagsLayout>
  )
}

export default Video