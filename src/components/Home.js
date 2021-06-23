import React from 'react';
import {
  WholeContainer, H2Container, H2, H3, H1
} from '../styles/HomeStyle';

export default function Home() {
  return (
    <WholeContainer>
      <H1>O v e r t u r e</H1>
      <H2Container>
        <H2>Track inventory.</H2>
        <H2>Reference orders.</H2>
        <H2>Visualize revenue.</H2>
      </H2Container>
      <H3>All in one place.</H3>
    </WholeContainer>
  );
}
