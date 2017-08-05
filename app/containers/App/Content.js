import styled from 'styled-components';

const Content = styled.article`

    float:right;
    width: 85%;
    background: #eee;
    min-height: 85vh;

    @media all and (max-width: 800px) {
        min-height: auto;
    }
`;

export default Content;