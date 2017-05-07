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

    background: #212225;
    border-bottom: 1px solid #999;
    color: #777;

    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    /* On mouse-over, add a deeper shadow */
    &:hover, &:focus {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        color: #DDD;
    }

    & :first-child {
        flex-grow: 1;
    }
`;

export default MenuHeader;