import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../utils/screenSize";

function Home() {
    const { height, width } = useWindowDimensions();
    return (
        <StyledHomePage>
            <Heading>Welcome to the Unknown!</Heading>
            <Title>
                This website has a list of all my projects, products, and
                socials
            </Title>
            <Text>
                My name is Zackary S., I am a freelancer JavaScript/TypeScript
                developer who other things along those lines.
            </Text>
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
    color: #ba34eb;
    font-weight: 700;
    margin: 0;
    padding: 100px;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

const Title = styled.h1`
    font-size: clamp(3rem, 2vw, 5vw);
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

const Text = styled.p`
    font-size: clamp(2rem, 1vw, 3vw);
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
