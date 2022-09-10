import styled from "styled-components";

const AsideContainer = styled.section`
    grid-area: aside;

    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
`;

const SideTitle = styled.p`
    transform: rotate(-90deg);
    font-size: 30px;

    grid-row: 1 / 2;
    grid-row: 1 / 2;

    opacity: 0;
    animation: side-content-text 0.5s ease-in-out 2.5s forwards;
    @keyframes side-content-text {
        0% {opacity: 0;}
        60% {opacity: 0.5;}
        100% {opacity: 1;}
    }
`;

const Floating = styled.div`
    width: 100%;
    z-index: 2;

    grid-column: 2 / 6;
    grid-row: 1 / 2;

    animation: super-hero-infinity 2s ease-in-out 2.1s  infinite;

    @keyframes super-hero-infinity {
        0% {
            transform: translateY(6px);
        }
        60% {
            transform: translateY(-6px);
        }
        100% {
            transform: translateY(6px);
        }
    }
`;

const SuperHeroImage = styled.img`
    width: 100%;

    animation: super-hero-image 2s ease-in-out 0s ;
    @keyframes super-hero-image {
        0% {transform: translateY(1000px);}
        60% {transform: translateY(-100px);}
        100% {transform: translateY(0px);}
    }
`;

const SideColum = styled.div`
    background-color: var(--highlight);

    width: 100%;
    height: 100%;
    grid-column: 4 / 7;
    grid-row: 1 / 2;

    animation: side-colum 2s ease-in-out 0s ;
    @keyframes side-colum {
        0% {transform: translateX(1000px);}
        60% {transform: translateX(-10px);}
        100% {transform: translateX(0px);}
    }
`;

export {
    AsideContainer,
    SideTitle,
    SuperHeroImage,
    SideColum,
    Floating
}