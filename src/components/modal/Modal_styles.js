import styled from "styled-components";

const ModalContainer = styled.section`
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-size: 40px;

    position: absolute;
    z-index: 4;
    cursor: pointer;

    &.hidden {
        visibility: hidden;
    }
`;

const Slider = styled.div`
    width: 300px;
    height: 200px;
    transform-style: preserve-3d;

    input {
        display: none;
    }

     /* Significa que al hijo con ese id dentro del card */
    /* Se le van a aplicar esas propiedades */
    #radio-1:checked ~ div #card-1,
    #radio-2:checked ~ div #card-2,
    #radio-3:checked ~ div #card-3 {
        /* translateX(0) Sirve para centar elementos  */
        transform: translateX(0) scale(1);
        opacity: 1;
        z-index: 1;
    }
    #radio-1:checked ~ div #card-2,
    #radio-2:checked ~ div #card-3,
    #radio-3:checked ~ div #card-1 {
        transform: translateX(40%) scale(0.8);
        opacity: 0.5;
        z-index: 0;
    }
    #radio-1:checked ~ div #card-3,
    #radio-2:checked ~ div #card-1,
    #radio-3:checked ~ div #card-2 {
        transform: translateX(-40%) scale(0.8);
        opacity: 0.5;
        z-index: 0;
    }
`;

const Cards = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
`;

const CardItem = styled.label`
    background: var(--highlight);
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: transform 0.5s ease;
    cursor: pointer;

    display: grid;
    place-items: center;
    
    img {
        width: 100%;
    }
`;

export {
    ModalContainer,
    Slider,
    Cards,
    CardItem
}