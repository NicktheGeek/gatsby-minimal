import React from 'react';
import { graphql, Link } from 'gatsby';

const Page = ({
  data: {
    wpPost: { title, content }
  }
}) => {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export const config = () => {
  return () => ({
    defer: true
  });
};

export default Page;

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`;
