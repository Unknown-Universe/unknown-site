import React from "react";
import { Heading, StyledLink, StyledPage, Text, Title } from "../styles/styles";

function Info() {
    return (
        <StyledPage>
            <Heading>Info</Heading>
            <Title>
                My name is Zackary S., I am a freelancer JavaScript/TypeScript
                developer who other things along those lines.
            </Title>
            <Text>
                You can find my work either{" "}
                <StyledLink href="/projects">on this page</StyledLink> or on{" "}
                <StyledLink href="https://github.com/unknown-universe">
                    Github
                </StyledLink>
                .
            </Text>
        </StyledPage>
    );
}

export default Info;

