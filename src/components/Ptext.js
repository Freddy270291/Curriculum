import React from 'react';
import styled from 'styled-components';

export default function Ptext({ children }) {
  return (
    <PStyle>
      <p>{children}</p>
    </PStyle>
  );
}

const PStyle = styled.div`
  color: var(--fede-color) !important;
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
