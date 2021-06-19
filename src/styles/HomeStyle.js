import styled from 'styled-components';

const H2Container = styled.div`
  display: flex;
`;

const WholeContainer = styled.div`
  text-align: left;
  padding: 4%;
  height: 100vh;
  background-size: 100%;
  background-image: url(https://user-images.githubusercontent.com/76187279/122628812-0f889c80-d07e-11eb-8d0c-242f2accfd54.png);
`;

const H1 = styled.h1`
  font-size: 120px;
  font-weight: bolder;
  margin-bottom: 6%;
  position: relative;
  color: #ffffff;
`;

const H2 = styled.h2`
  font-size: 58px;
  font-weight: bold;
  color: black;
  margin-bottom: 6%;
`;

const H3 = styled.h3`
  font-size: 45px;
  font-weight: bold;
  color: white;
`;

export {
  H2Container, WholeContainer, H1, H2, H3
};
