import styled from 'styled-components';

const NavigationList = styled.ul`
    list-style: none;
    margin: 0; 
    padding-left:0;
    color: #555;
    
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    
    -webkit-flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

`;

export default NavigationList;