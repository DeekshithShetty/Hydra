import styled from 'styled-components';
import {Link} from 'react-router'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #666;
    font-size:1.2em;
    margin-left:0.5em;
    margin-right:0.5em;

    @media all and (max-width: 800px) {
        text-align: center; 
        padding: 10px;
    }
`;

export default StyledLink;