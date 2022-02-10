import React from "react";
import { VscCode } from "react-icons/vsc";
import styled from "styled-components";

function Projects() {
    return (
        <StyledProjectPage>
            <Heading>Projects</Heading>
            <Title>A list of my projects, both current and past.</Title>
            <Title>
                <ListImage />{" "}
                <StyledLink href="https://github.com/zacattack08/Unknown_Bot">
                    UnknownBot
                </StyledLink>{" "}
                The best bot for your discord server!
            </Title>
            <Title>
                <ListImage />{" "}
                <StyledLink href="htpps://unknownuniverse.me">
                    UnknownUniverse Website
                </StyledLink>{" "}
                My personal webstite.
            </Title>
        </StyledProjectPage>
    );
}

export default Projects;

const StyledProjectPage = styled.div`
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
    padding: 50px;

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

const StyledLink = styled.a`
    color: #aaa;
`;

const ListImage = styled(VscCode)``;
