
import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Article from '../components/Article'

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <Article article={post} path={this.props.location.pathname} />
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
  `