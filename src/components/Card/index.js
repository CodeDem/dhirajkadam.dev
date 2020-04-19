import React from "react";
import Moment from 'react-moment';
import {
  Meta,
  CardContainer,
  Divider,
  Title
} from "./Card.style";
import { Link } from 'gatsby'
const Card = ({ article }) => {
  return (
    <CardContainer>
      <Link to={article.slug}>
        <Title>{article.title}</Title>
      </Link >
      <Meta>
        {
          article.categories.map(category => <a>{category.name}</a>)
        }
        <p>
          <Moment format="ddd MMM Do YYYY">
            {article.date}
          </Moment>
        </p>
      </Meta>
      <div
        dangerouslySetInnerHTML={{ __html: article.excerpt }}
      />

      <Divider />
    </CardContainer>

  );
};

export default Card;