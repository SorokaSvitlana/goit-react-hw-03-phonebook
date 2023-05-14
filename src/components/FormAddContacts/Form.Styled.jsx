import styled from 'styled-components';

const FormAdd = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-left: 5px;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export { FormAdd, Label, Input, Button}