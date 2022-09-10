import styled from "styled-components";

const FooterContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;

    border-radius: 0 50% 0 8px;
    background-color: var(--mid);

    animation: footer-container 3s ease-in-out 0s ;
    @keyframes footer-container {
        0% {transform: translateX(1000px);}
        60% {transform: translateX(-100px);}
        100% {transform: translateX(0px);}
    }
`;

const FooterImg = styled.img`
    width: 160px;
    position: absolute;
    bottom: 30px;
    
    transform: translateY(0px) scale(1);
    transition: transform 0.9s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: translateY(-20px) scale(1.2);
        transition: transform 0.3s ease-in-out;
    }
`;


const BgImg = styled.div`
    width: 130px;
    height: 55%;
    background-color: var(--light);
    border-radius: 10px 10px 0 0;

    transform: translateY(0px) scale(1);
    transition: transform 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: translateY(-20px) scale(1.2);
        transition: transform 0.3s ease-in-out;
    }
`;


export {
    FooterContainer,
    FooterImg,
    BgImg
}