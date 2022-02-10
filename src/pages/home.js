import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../utils/screenSize";

function Home() {
    const { height, width } = useWindowDimensions();
    return (
        <StyledHomePage>
            <Heading>Welcome to the Unknown!</Heading>
        </StyledHomePage>
    );
}

export default Home;

const StyledHomePage = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #282c34;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: clamp(3rem, 5vw, 7vw);
    color: #fff;
    font-weight: 700;
    margin: 0;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

const Title = styled.h6`
    font-size: clamp(3rem, 5vw, 7vw);
    color: #fff;
    font-weight: 700;
    margin: 0;
    padding: 100px;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;
