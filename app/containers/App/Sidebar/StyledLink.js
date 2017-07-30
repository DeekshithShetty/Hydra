import styled from 'styled-components';
import {Link} from 'react-router'

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding: 0.5em;

    color: #777;

    padding-left: 1.5em;
    padding-right: 1.5em;

    &:hover, &:focus {
        color: #DDD;
    }
`;

export default StyledLink;