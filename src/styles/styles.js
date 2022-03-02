import styled from "styled-components";

export const StyledPage = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #282c34;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.h1`
    font-size: clamp(3rem, 5vw, 7vw);
    color: #ba34eb;
    font-weight: 700;
    margin: 100px;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const Title = styled.h1`
    font-size: 45px;
    color: #fff;
    font-weight: 600;
    max-width: 1000px;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const Text = styled.p`
    font-size: 27px;
    color: #fff;
    font-weight: 300;
    max-width: 1000px;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const StyledLink = styled.a`
    color: #aaa;
    cursor: pointer;
    &:hover {
        transition: 0.2s ease-in-out;
        color: #3946f7;
    }
`;
