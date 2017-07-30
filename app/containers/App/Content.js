import styled from 'styled-components';

const Content = styled.article`

    float:right;
    width: 85%;
    background: #eee;
    padding: 1em; 

    @media all and (max-width: 800px) {
        min-height: auto;
        & > * {
            min-height: auto;
        }
    }

    & > * {
        min-height: 80.3vh;
        height: 100%;
        padding: 0.5em;
        margin: 0;
        background: #FFFFFF;
        -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
        -webkit-transition: all 0.3s linear 0s;
        -moz-transition: all 0.3s linear 0s;
        -ms-transition: all 0.3s linear 0s;
        -o-transition: all 0.3s linear 0s;
        transition: all 0.3s linear 0s;
    }
`;

export default Content;