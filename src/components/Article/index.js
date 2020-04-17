import React, { Component } from 'react'
import { withRouter } from "next/router";
import Query from "../query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ARTICLE_QUERY from "../../apollo/queries/article/article";
import Baselayout from '../../Layout/BaseLayout'
import Prism from "prismjs";
import { ArticleHeroImage } from './Article.style'

class Article extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 500)
  }

  render() {
    return (
      <Query query={ARTICLE_QUERY} id={this.props.id}>
        {({ data: { article } }) => {
          return (
            <Baselayout>
              <div>
                <ArticleHeroImage
                  src={process.env.BACKEND_URL + article.cover.url}
                >
                  <h1>{article.title}</h1>
                </ArticleHeroImage>

                <div className="uk-section">
                  <div className="uk-container uk-container-small">
                    <ReactMarkdown source={article.content} />
                    <p>
                      <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                    </p>
                  </div>
                </div>
              </div>
            </Baselayout>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Article)
