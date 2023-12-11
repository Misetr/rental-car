import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBox, StyledLink, StyledTitle } from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <StyledBox>
      <StyledTitle>
        404 Error
        <br />
        Page Not Found
      </StyledTitle>
      <Link to={'/'}>
        Return to the <StyledLink>Home Page</StyledLink> to continue exploring our services.
      </Link>
    </StyledBox>
  );
};

export default PageNotFound;

