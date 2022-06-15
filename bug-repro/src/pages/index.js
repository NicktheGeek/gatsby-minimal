import React from 'react';
import { graphql, Link } from 'gatsby';

const Page = ({ data: { allWpPage, allWpPost } }) => {
  return (
    <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div>
        <h2>Pages</h2>
        <ul>
          {allWpPage.nodes.map((page, index) => {
            const { uri, title } = page;
            return (
              <li key={index}>
                <Link to={uri}>{title ? title : uri}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h2>Posts</h2>
        <ul>
          {allWpPost.nodes.map((post, index) => {
            const { uri, title } = post;
            return (
              <li key={index}>
                <Link to={uri}>{title ? title : uri}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export const query = graphql`
  {
    allWpPage {
      nodes {
        uri
        title
      }
    }
    allWpPost {
      nodes {
        uri
        title
      }
    }
  }
`;

export default Page;
