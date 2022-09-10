import styled from "styled-components";

const MainContainer = styled.section`
    grid-area: main-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5%;

    animation: 2.5s main_content 0s ease-out;

    @keyframes main_content {

        0% {
            transform: translateY(-600px);
        }

        100% {
            transform: translateY(0px);
        }
        
    }

    p:first-child {
        font-size: 36px;
        font-weight: 100;
        margin: 0px;
        padding-left: 35px;
    }

    p:last-child {
        font-size: 18px;
        font-weight: 300;
        margin: 0px;
    }

    h1 {
        font-size: 48px;
        font-weight: 600;
        margin: 0;
        margin: 0px 0 20px 0;
    }
`;

export {
    MainContainer
}