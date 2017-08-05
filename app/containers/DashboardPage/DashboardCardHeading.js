import styled from 'styled-components';

const DashboardCardHeading = styled.div`
    width: 100%;
    height: 50px;
    padding: 1em;
    color: #444;
    background: #F8F8F8;
    border-bottom: 1px solid #DDD;
    font-weight: 500;

    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: center;
    align-content: center;

    & > * {
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
    }
`;

export default DashboardCardHeading;