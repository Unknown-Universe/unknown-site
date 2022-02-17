import React from "react";
import styled from "styled-components";

function Info() {
    return (
        <StyledInfoPage>
            <Heading>Info</Heading>
            <Title>
                My name is Zackary S., I am a freelancer JavaScript/TypeScript
                developer who other things along those lines.
            </Title>
            <Text>
                You can find my work either{" "}
                <StyledLink href="/projects">on this page</StyledLink> or on{" "}
                <StyledLink href="https://github.com/zacattack08">
                    Github
                </StyledLink>
                .
            </Text>
        </StyledInfoPage>
    );
}

export default Info;

const StyledInfoPage = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #282c34;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h1`
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

const Title = styled.h1`
    font-size: clamp(3rem, 2vw, 5vw);
    color: #fff;
    font-weight: 700;
    margin: 50px;

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
    margin: 100px;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

const StyledLink = styled.a`
    color: #aaa;
`;
