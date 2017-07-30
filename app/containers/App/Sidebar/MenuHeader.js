import styled from 'styled-components';

const MenuHeader = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;  

    list-style: none;
    margin: 0;
    padding: 0;

    
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;

    background: #152032;
    color: #777;

    /* On mouse-over, add a deeper shadow */
    &:hover, &:focus {
        color: #DDD;
    }

    & :first-child {
        flex-grow: 1;
    }
`;

export default MenuHeader;