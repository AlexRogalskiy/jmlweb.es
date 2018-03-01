import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

// import ArticleList from '../ArticleList';
import Intro from './components/Intro';
import Articles from './components/Articles';

const StyledWrapper = styled.div``;

const IndexPage = ({ data }) => (
  <StyledWrapper>
    <Intro image={data.image} />
    <Articles data={data.homeArticles.edges} />
    {/* <ArticleList
      items={data.allContentfulArticle.edges.map(({ node }) => ({
        id: node.id,
        title: node.title,
        content: node.entry.childMarkdownRemark.html,
      }))}
    /> */}
  </StyledWrapper>
);

IndexPage.propTypes = {
  data: PT.shape({
    image: PT.object,
  }).isRequired,
};

export default IndexPage;
