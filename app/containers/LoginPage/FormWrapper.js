import styled from 'styled-components';

const FormWrapper = styled.div`
  margin: auto;
  z-index: 1;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  background: #FFF;
  border-radius: 5px;

  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export default FormWrapper;