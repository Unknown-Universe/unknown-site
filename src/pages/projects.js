import React from "react";
import { VscCode } from "react-icons/vsc";
import styled from "styled-components";
import { Heading, StyledLink, StyledPage, Title } from "../styles/styles";

function Projects() {
    return (
        <StyledPage>
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
                <StyledLink href="https://unknownuniverse.me">
                    UnknownUniverse Website
                </StyledLink>{" "}
                My personal webstite.
            </Title>
            <Title>
                <ListImage />{" "}
                <StyledLink href="https://github.com/Unknown-Universe/ShapeManager">
                    ShapeManager
                </StyledLink>{" "}
                A simple shape manager.
            </Title>
            <Title>
                <ListImage /> {" "}
                <StyledLink href="https://unknownuniverse.me/beyond-unknown">
                    BeyondUnknown
                </StyledLink> {" "}
                A open-world, sandbox, space-based, factory building game
            </Title>
        </StyledPage>
    );
}

export default Projects;

const ListImage = styled(VscCode)``;
