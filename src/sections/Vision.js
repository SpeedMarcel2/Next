/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import img1 from "../assets/boat-purple.jpg";

const Container = styled.div`
  width: 80vw;
  min-height: 100vh;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem;
  position: relative;

  background-color: ${(props) => `rgba(${props.theme.textRgba},0.8)`};
  color: ${(props) => props.theme.text};

  background-image: url(${img1});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 48em) {
    width: 100vw;
    padding: 0;
    min-height: 150vh;


  }

  @media (max-width: 25em) {
    min-height: 200vh;

  }

`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-align: center;
  font-weight: 300;
  margin-bottom: 2rem;
  text-transform: uppercase;
  width: 100%;
`;

const SubTitle = styled.h1`
  font-size: ${(props) => props.theme.fontlg};
  text-align: left;
  font-weight: 300;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 25em) {
    font-size: ${(props) => props.theme.fontmd};

    width: 90%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
  z-index: 1;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;

  @media (max-width: 25em) {
    min-height: 100vh;
    height: 100%;

  }
`;

const Text = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  text-align: left;
  font-weight: 300;

  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  li {
    margin-left: 2rem;
  }

  @media (max-width: 25em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 0.5rem 0;
    width: 90%;
  }
`;

const Vision = () => {

  return (
    <Container data-scroll-section id="vision">
      <Overlay />
      <Box
        data-scroll
        data-scroll-speed={-1}
        data-scroll-direction={"verticle"}
      >
        <Title>Vision</Title>

        <SubTitle>Community Goals</SubTitle>
        <br />

        <Text>
          Our Community Goal is simple. We want a strong Community of people
          that values hard work, honesty, and loyalty.
        </Text>

        <Text>
          We want a Community of people believing in us, our vision, our Mindset
          to bring this Project as far as possible, this isn‘t Just a
          extraordinary new NFT Project, this is Just the start of something
          much bigger to Come. And you can be Part of That.
        </Text>

        <Text>What makes us different from "everybody“ else? </Text>
        <br />

        <Text>
          What we will provide is absolute transparency. We will mention
          everything related to the project that doesn’t conflict with legal
          issues. Every 3-5 Days, we offer an update on our progress. But one
          thing must be made clear, we aren’t perfect, and mistakes will happen.
          Some will be smaller and some bigger. We can only promise that we will
          improve and become better.
        </Text>
        <br />
        <Text>
          We will showcase you everything around the Progress of the project to
          you from the moment we launch our NFT, because this is Just the Start
          of an Odessey.
        </Text>
        <br />
        <Text>
          The Goal is to be Patient. Just Hodl and Trust the Process. We’re
          together on this Journey.
        </Text>
        <Text>
          At the same time, we would like to introduce a system that allows you
          to participate and get partial Ownership of the project. But it's
          still in development (The Details will be listed Later on), and we
          want to use your Feedback to optimize it.
        </Text>
        <br />
        <Text>
          This project has two main Goals: <br />
          <ol>
            <li>Raising Funds for our main Project</li>

            <li>To start to test our vote-system</li>
          </ol>
        </Text>
        <br />
        <Text>
          But no worry, there is also something in for you: <br />
          <ul>
            <li>
              Insights on our Future moves, what we will do after Launching our
              Main Collection, what the small steps are, and how you can be
              involved
            </li>
            <li>
              Access to our Discord, where we give way more insights into the
              projects, in a 2-3 Days rhythm, updates to our Project
            </li>
            <li>You get a 65% Discount on our main NFT-Collection</li>
            <li>
              We will give all of you some deeper insights into the Art-works
            </li>
          </ul>
        </Text>
      </Box>
    </Container>
  );
};

export default Vision;
