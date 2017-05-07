import styled from 'styled-components';
import {Link} from 'react-router'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size:1.2em;
    margin-left:0.5em;
    margin-right:0.5em;

    @media all and (max-width: 800px) {
        text-align: center; 
        padding: 10px;
        border-top: 1px solid rgba(255,255,255,0.3); 
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
`;

export default StyledLink;