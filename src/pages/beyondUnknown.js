import React from "react"
import styled from "styled-components";

function BeyondUnknown() {
    return (
        <StyledGamePage>
            <Heading>
                BeyondUnknown
            </Heading>
            <Title>
                BeyondUnknown is a open-world, sandbox, space-based factory building game.
            </Title>
            <Title>
                Keep checking back here for more information, sneak-peeks, and a beta-release date!
            </Title>
            
        </StyledGamePage>
    )
}
export default BeyondUnknown;

const StyledGamePage = styled.div`
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