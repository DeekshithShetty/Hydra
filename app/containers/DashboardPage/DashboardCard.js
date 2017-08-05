import styled from 'styled-components';

const DashboardCard = styled.div`
    width: ${props => props.width ? props.width : '48%'};
    height: 300px;
    margin: 1em 1em 1em 0;
    color: #444;
    background: #FFF;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;

    @media all and (max-width: 800px) {
        width: 100%;
    }
`;

export default DashboardCard;