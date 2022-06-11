import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  width: 500px;
  align-items: flex-start;
  padding: 10px;
`;

export const FormSubmitBtn = styled.button`
  padding: 5px;
  border: 1px solid #919191;
  border-radius: 5px;
  background-color: white;
  margin-top: 20px;

  &:active {
    background-color: #559ced;
  }
`;
