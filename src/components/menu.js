import React from "react";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const Menu = ({ handleNavToggle, toggled}) => {
    return (
        <StyledMenu toggled={toggled}>
            <StyledLink to="/" onClick={handleNavToggle}>
                Home
            </StyledLink>
            <StyledLink to="/info" onClick={handleNavToggle}>
                Information
            </StyledLink>
            <StyledLink to="/products" onClick={handleNavToggle}>
                Products
            </StyledLink>
            <StyledLink to="/projects" onClick={handleNavToggle}>
                Projects
            </StyledLink>
            <StyledLink to="/beyond-unknown" onClick={handleNavToggle}>
                Beyond Unknown
            </StyledLink>
            <CloseToggle onClick={handleNavToggle} />
            <Github
                onClick={() => {
                    window.location.href = "https://github.com/unknown-universe";
                }}
            />
            <Linkedin
                onClick={() =>
                    (window.location.href =
                        "https://www.linkedin.com/in/zackary-simpson-3ba2a0221/")
                }
            />
            <Freelancer
                onClick={() =>
                    (window.location.href =
                        "https://www.freelancer.com/u/UnknownUniverse")
                }
            />
        </StyledMenu>
    );
};

export default Menu;

const fadein = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`

const fadeout = keyframes`
from {
    opacity: 1;
}
to {
    opacity: 0;
}
`
const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    @media screen and (min-width: 790px) {
        width: 40%;
    }
    background-color: #4f5663;
    z-index: 99;

    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    ${props => props.toggled ? css`animation: ${fadein} 0.3s; opacity: 1` : css`animation: ${fadeout} 0.3s;`}

    
`;

const StyledLink = styled(Link)`
    color: #222;
    text-decoration: none;
    font-size: clamp(3rem, 4vw, 6vw);
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    transition: 0.2s all ease-in-out;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &:hover {
        transition: 0.2s all ease-in-out;
        color: orangered;
    }
`;

const Github = styled(FaGithub)`
    position: fixed;
    bottom: 5%;
    right: 4%;
    background: #222;
    color: #fff;
    padding: 0.75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

const Linkedin = styled(FaLinkedin)`
    position: fixed;
    bottom: 5%;
    right: 8%;
    background: #222;
    color: #fff;
    padding: 0.75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

const Freelancer = styled(SiFreelancer)`
    position: fixed;
    bottom: 5%;
    right: 12%;
    background: #222;
    color: #fff;
    padding: 0.75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

const CloseToggle = styled(FaTimes)`
    position: fixed;
    top: 5%;
    right: 4%;
    background: #222;
    color: #fff;
    padding: 0.75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;
