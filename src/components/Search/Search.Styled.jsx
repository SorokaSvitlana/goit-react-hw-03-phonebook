import styled from "styled-components";

const StyledSearchWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
  
`;

const StyledSearchLabel = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 10px;
`;

const StyledSearchInput = styled.input`
margin-left: 5px;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

export {StyledSearchWrapper, StyledSearchLabel, StyledSearchInput}