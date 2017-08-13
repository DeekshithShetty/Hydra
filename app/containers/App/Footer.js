import styled from 'styled-components';

const Footer = styled.footer`
    height: 2em;
    float:right;
    width: 85%;
    color: #555;
    text-align: center;
    background: #111;
    padding: 0.5em;

    @media all and (max-width: 800px) {
        height: auto;
    }
`;

export default Footer;