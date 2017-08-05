import styled from 'styled-components';

const DashboardWrapper = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    
    -webkit-flex-flow: row wrap;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 1em;
    overflow: auto;
`;

export default DashboardWrapper;