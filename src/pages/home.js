import React from "react";
import { Heading, StyledPage, Text, Title } from "../styles/styles";
import useWindowDimensions from "../utils/screenSize";

function Home() {
    const { height, width } = useWindowDimensions();
    return (
        <StyledPage>
            <Heading>Welcome to the Unknown!</Heading>
            <Title>
                This website has a list of all my projects, products, and
                socials
            </Title>
            <Text>
                My name is Zackary S., I am a freelancer JavaScript/TypeScript
                developer who does other things along those lines.
            </Text>
        </StyledPage>
    );
}

export default Home;
