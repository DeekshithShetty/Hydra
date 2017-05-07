import styled from 'styled-components';

const MenuDropdownList = styled.ul`
    list-style: none;
    margin: 0; 
    padding: 0;
    background: darkgrey;
    
    display:none;

    /*Animation*/
    -webkit-transition: height 1s ease;
    -moz-transition: height 1s ease;
    -o-transition: height 1s ease;
    -ms-transition: height 1s ease;
    transition: height 1s ease;

    animation-delay: 0.2s;

    @media all and (max-width: 600px) {
        -webkit-flex-flow: column wrap;
        flex-flow: column wrap;
        padding: 0;
    }
`;

export default MenuDropdownList;