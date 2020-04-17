import React from "react";
import Articles from "../Articles";
import {
  Wrapper,
  Title
} from './Home.style'

const Home = () => {
  return (
    // <Loading />
    <div>
      <div>
        <div>
          <Wrapper>
            <a><Title>Thank you for visiting my space, I'm still working on it 😅</Title></a>
          </Wrapper>
          {/* <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              if (articles.length === 0) {
                return (
                  <Wrapper>
                    <a><Title>Thank you for visiting my space, I'm still working on it 😅</Title></a>
                  </Wrapper>
                )
              } else {
                return <Articles articles={articles} />;
              }
            }}
          </Query> */}
        </div>
      </div>
    </div>
  );
};

export default Home; 