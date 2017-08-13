import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  @import url(https://fonts.googleapis.com/css?family=Roboto:300);

  $brand-color: #6CC0E5;
  $dark-brand-color: #41ADDD;
  $error-color: #FB4F4F;

  $background-color: #FAFAFA;
  $very-light-grey: #EDEDED;
  $light-grey: #CCC;
  $mid-grey: #999;
  $dark-grey: #666;
  $very-dark-grey: #333;
  $text-color: #222;

  $max-width: 768px;
  $nav-height: 3.5em;

  /**
  * Set up a decent box model on the root element
  */
  html {
    box-sizing: border-box;
  }

  /**
   * Make all elements from the DOM inherit from the parent box-sizing
   * Since * has a specificity of 0, it does not override the html value
   * making all elements inheriting from the root box-sizing value
   * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
   */

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  body.js-open-sans-loaded {
    font-family: 'Open Sans', Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  .activeSidebarLink {
    background: #051022;
    color: #CCC;
  }

`;
