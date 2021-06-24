import { Input, Label, Button } from 'reactstrap';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 70%;
  margin-top: 4%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLabel = styled(Label)`
  font-size: 20px;
  font-weight: bold;
`;

const StyledInput = styled(Input)`
  border-color: #686868;
`;

const StyledButton = styled(Button)`
  margin: 1%;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
  border-color: black;
`;

export {
  FormContainer,
  Wrapper,
  StyledLabel,
  StyledInput,
  StyledButton
};
