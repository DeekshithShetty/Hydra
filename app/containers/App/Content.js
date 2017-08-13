import styled from 'styled-components';

const Content = styled.article`

    float:right;
    width: 85%;
    background: #eee;
    overflow: auto;
    height: calc(100vh - ( 4em + 2em) );

    @media all and (max-width: 800px) {
        height: auto;
    }
`;

export default Content;