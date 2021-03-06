import styled from 'styled-components';

const Input = styled.input`
  outline: 0;
  background: #EFEFEF;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 0.8em;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid #DDD;

  &:hover, &:active, &:hover:active {
    background: #EFEFEF;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #EFEFEF inset;
  }

`;

export default Input;
