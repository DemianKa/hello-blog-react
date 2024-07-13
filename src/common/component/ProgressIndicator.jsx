// ProgressIndicator.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
  overflow: hidden;
`;

const slide = keyframes`
  0% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
`;

const Bar = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  background-color: #3b82f6;
  animation: ${slide} 0.65s linear infinite;
`;

const ProgressIndicator = () => (
  <Container>
    <Bar />
  </Container>
);

export default ProgressIndicator;

