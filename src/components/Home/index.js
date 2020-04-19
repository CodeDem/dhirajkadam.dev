import React from "react";
import Articles from "../Articles";
import {
  Wrapper,
  Title
} from './Home.style'
import { useStaticQuery, graphql } from 'gatsby'

const Home = () => {

  const { allWordpressPost: { nodes } } = useStaticQuery(
    graphql`
      query {
        allWordpressPost {
          nodes {
            id
            excerpt
            slug
            title
            date
            categories {
              name
              slug
            }
          }
        }
      }
    `
  )

  console.log(nodes);

  return (
    // <Loading />
    <div>
      <div>
        <div>
          {
            (nodes.length === 0)
              ?
              <Wrapper>
                <a><Title>Thank you for visiting my space, I'm still working on it 😅</Title></a>
              </Wrapper>
              :
              <Articles articles={nodes} />
          }
        </div>
      </div>
    </div>
  );
};

export default Home; 