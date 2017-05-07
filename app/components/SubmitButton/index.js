import React, { PropTypes, Children } from 'react';

import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

function SubmitButton(props) {

  let button = (
      <StyledButton type="submit">
        {Children.toArray(props.children)}
      </StyledButton>
    );

  return (
    <Wrapper>
      {button}
    </Wrapper>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubmitButton;
