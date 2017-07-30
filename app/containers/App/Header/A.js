import styled from 'styled-components';

const A = styled.a`
    text-decoration: none;
    display: block;
    padding: 1em;
    color: white;

    @media all and (max-width: 600px) {
        padding: 0.2rem 0.2rem;
        font-size: 1.2rem;
        text-decoration: none;
        color: #333;
        margin-left: 1.0rem;
    }
    
    &:hover, &:focus {
        background: darken(deepskyblue, 2%);
    }
`;

export default A;