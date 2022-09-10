import styled from "styled-components";

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: var(--dark);
    color: var(--white);
`;

const GridContainer = styled.section`
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: 1;

    display: grid;
    grid-template-columns: 55% 45%;
    grid-template-rows: 20% 50% 30%;
    grid-template-areas: "nav aside"
                         "main-content aside"
                         "footer aside";
`;

export {
    PageContainer,
    GridContainer
}