import React from "react";
import Moment from 'react-moment';
import {
  Meta,
  CardContainer,
  Divider,
  Title
} from "./Card.style";
const Card = ({ article }) => {
  return (
    <CardContainer>
      {/* <Link href={{ pathname: "article", query: { id: article.id } }}> */}
      <a><Title>{article.title}</Title></a>
      {/* </Link > */}
      <Meta>
        <a>
          {article.category.name}
        </a>
        <p>
          <Moment format="ddd MMM Do YYYY">
            {article.published_at}
          </Moment>
        </p>
      </Meta>
      <div>
        <p>
          {article.excerpt}
        </p>
      </div>
      <Divider />
    </CardContainer>

  );
};

export default Card;