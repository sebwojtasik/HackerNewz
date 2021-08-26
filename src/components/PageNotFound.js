import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const PageNotFound = () => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>
        Page Not found. <Link to="/">Go to home</Link>
      </h1>
    </Container>
  );
};

export default PageNotFound;
