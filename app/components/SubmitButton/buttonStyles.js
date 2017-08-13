import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.8em;
  width: 100%;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 16px;
  background: #41C2C2;
  color: #fff;
  transition: all 0.5s;

  &:hover, &:active {
    background: #21A2A2;
  }
`;

export default buttonStyles;
