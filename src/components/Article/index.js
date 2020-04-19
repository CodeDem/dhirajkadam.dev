import React from 'react'
import Moment from "react-moment";
import Baselayout from '../../Layout/BaseLayout'
import { ArticleHeroImage } from './Article.style'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const Article = ({ article, path }) => {

  const disqusConfig = {
    url: `https://dhirajkadam.dev${path}`,
    identifier: article.id,
    title: article.title,
  }

  return (
    <Baselayout>
      <div>
        <ArticleHeroImage
        // src={process.env.BACKEND_URL + article.cover.url}
        >
          <h1>{article.title}</h1>
        </ArticleHeroImage>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <p>
              <Moment format="MMM Do YYYY">{article.date}</Moment>
            </p>
          </div>
        </div>
      </div>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </Baselayout>
  );
}
export default Article