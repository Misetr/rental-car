import React from 'react';
import {
  StyledHomeWrapper,
  StyledSubTitle,
  StyledTitle,
  StyledTitlesWrapper,
} from './Home.styled';

const Home = () => {
  return (
    <StyledHomeWrapper>
      <StyledTitlesWrapper>
        <StyledTitle>Explore Kiev and the rest of Ukraine with our car rental service</StyledTitle>
        <StyledSubTitle>offering unbeatable low rates.</StyledSubTitle>
      </StyledTitlesWrapper>
    </StyledHomeWrapper>
  );
};

export default Home;
