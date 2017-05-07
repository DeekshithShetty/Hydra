import styled from 'styled-components';
import {Link} from 'react-router';

const NavigationLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size:1.0em;
    margin-left:0.5em;
    margin-right:0.5em;

    @media all and (max-width: 600px) {
        text-align: center; 
        padding: 10px;
        border-top: 1px solid rgba(255,255,255,0.3); 
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    
    &:hover, &:focus {
        background: darken(deepskyblue, 2%);
    }
`;

export default NavigationLink;