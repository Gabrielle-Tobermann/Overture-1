import styled from 'styled-components';

const H2Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const WholeContainer = styled.div`
  text-align: left;
  padding: 4%;
  height: 100vh;
  background-size: 100%;
  background-image: url(https://user-images.githubusercontent.com/76187279/123041502-00c22280-d3bb-11eb-8b47-2e5ca16b3029.png);

`;

const H1 = styled.h1`
  font-size: 120px;
  font-weight: bolder;
  margin-bottom: 6%;
  position: relative;
  color: #ffffff;
  animation: ani1 2s ease forwards;
`;

const H2 = styled.h2`
  font-size: 45px;
  font-weight: bold;
  color: black;
  margin-bottom: 6%;
  animation: ani1 4s ease forwards;
`;

const H3 = styled.h3`
  font-size: 45px;
  font-weight: bold;
  color: white;
`;

// const textAppearance = keyframes`
// from {
//   transform: scale(0.25)
//   opcaity: 0
// }
// to {
//   transform: scale(1)
//   opacity: 1;
// }`;

export {
  H2Container, WholeContainer, H1, H2, H3
};
