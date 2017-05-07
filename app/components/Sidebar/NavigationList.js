import styled from 'styled-components';

const NavigationList = styled.ul`
    list-style: none;
    margin: 0; 
    
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    padding-left: 0;
    
    -webkit-flex-flow: column wrap;

    @media all and (max-width: 600px) {
        -webkit-flex-flow: column wrap;
        flex-flow: column wrap;
        padding: 0;
    }
`;

export default NavigationList;