import styled from 'styled-components';

const Content = styled.article`

    float:right;
    width: 85%;
    background: lightgrey;
    padding: 0.5em; 

    @media all and (max-width: 800px) {
        min-height: auto;
        & > * {
            min-height: auto;
        }
    }

    & > * {
        min-height: 82.6vh;
        height: 100%;
        padding: 0.5em;
        margin: 0;
        background: #FFFFFF;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
`;

export default Content;