import styled from 'styled-components';

const NavigationItem = styled.li`
  background: #212225;
  border-bottom: 1px solid #999;
  color: #777;

  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  &:hover, &:focus {
      color: #DDD;
  }
`;

export default NavigationItem;