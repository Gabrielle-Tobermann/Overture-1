import React from 'react';
import {
  WholeContainer, H2Container, H2, H3, H1
} from '../styles/HomeStyle';

export default function Home() {
  return (
    <WholeContainer>
      <H1>O v e r t u r e</H1>
      <H2Container>
        <H2>Keep track of your inventory.</H2>
        <H2>Reference your orders.</H2>
        <H2>Visualize your revenue.</H2>
      </H2Container>
      <H3>All in one place.</H3>
    </WholeContainer>
  );
}
