import styled from 'styled-components';

const LoaderContainer = styled.section`
    width: 100%;
    height: 100%;
    background-color: var(--mid);

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 3;

    animation: loader 2.5s linear forwards;

    @keyframes loader {
        0%{
            opacity: 1;
            visibility: visible;
        }
        65% {
            opacity: .7;
        }
        100% {
            opacity: 0;
            visibility: hidden;
        }
    };

    div:nth-child(1) {
        animation-delay: 0.1s;
    }
    div:nth-child(2) {
        animation-delay: 0.5s;
    }
    div:nth-child(3) {
        animation-delay: 0.7s;
    }
`;

const Bubble = styled.div`
    background-color: var(--light);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 10px;

    transform: scale(0);
    animation: scaling 2s ease-in-out infinite;

    @keyframes scaling {
        0%, 100% { transform: scale(0.2); }
        55% { transform: scale(1);}
        95% { transform: scale(0.5);}
    };
`;
 
export {
    LoaderContainer,
    Bubble
}