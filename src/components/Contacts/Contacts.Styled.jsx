import styled from 'styled-components';

const ContactsList = styled.ul`
list-style: none; 
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;`

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e5e5e5;
  }

  button {
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #d9534f;
    color: #fff;
    border: none;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #c9302c;
    }
  }
`;


export {ContactsList, ContactItem}