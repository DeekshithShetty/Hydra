import styled from 'styled-components';
import {Link} from 'react-router';

const NavigationLink = styled(Link)`
    text-decoration: none;
    color: #444;
    font-size:1.0em;
    margin-left:0.5em;
    margin-right:0.5em;

    @media all and (max-width: 600px) {
        text-align: center; 
        padding: 10px;
    }
    
    &:hover, &:focus {
        background: darken(deepskyblue, 2%);
    }
`;

export default NavigationLink;