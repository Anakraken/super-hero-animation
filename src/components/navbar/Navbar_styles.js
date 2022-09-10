import styled from "styled-components";

const NavbarContainer = styled.nav`
    grid-area: nav;
`;

const NavbarContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 0 5%;

    animation: 2.5s navbar 0s ease-out;

    @keyframes navbar {

        0% {
            transform: translateY(-200px);
        }

        100% {
            transform: translateY(0px);
        }
        
    }
`;

const NavLogo = styled.img`
    width: 50px;
`;

const NavLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 80%;
`;

const NavItem = styled.li`
    padding: 0 5px;

    a {
        text-decoration: none;
        color: var(--white);
        font-weight: 600;
    }
`;

export {
    NavbarContainer,
    NavbarContent,
    NavLogo,
    NavLinks,
    NavItem
}