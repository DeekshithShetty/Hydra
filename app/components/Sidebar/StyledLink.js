import styled from 'styled-components';
import {Link} from 'react-router'

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding: 0.5em;

    color: #777;

    padding-left: 1.5em;
    padding-right: 1.5em;

    @media all and (max-width: 600px) {
        border-top: 1px solid rgba(255,255,255,0.3); 
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    
    &:hover, &:focus {
        color: #DDD;
    }
`;

export default StyledLink;