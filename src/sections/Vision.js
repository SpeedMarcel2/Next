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
        We pursue being pioneers in the World of Web 3, creating a platform for 
        digital artists to share their art and another venue for Open discussions, with a strong Community as a Foundation.
        </Text>

        <Text>
          But now after the rise and fall of many Generations, the curtain has cracked. A crack in its perfect Facade,
          that those who control the World want to close.
          But he is aware, it’s that exact moment he’s been waiting for multiple Millennials. 
          How can he miss the  Opportunity that is the drive for all the pain and suffering 
          he’s been going through?

          But he knows he can’t do it alone. He needs a capable and strong group of People.
          To achieve that goal he developed a strategy encompassing different phases.

          And you can be Part of That.
        </Text>

        <Text>A platform for digital artists</Text>
        <br />

        <Text>
          We believe on an artistic level, NFT offers a lot of potential,
          especially its future potential is tremendous. Digital Art has given the notion
          of “Art” a new meaning and almost a new definition. And by creating a platform 
          for the Space that is supportive of contemporary artists,
          articularly the smaller ones with neither Capital nor Attention, 
          we can lay a foundation for future Generations.
        </Text>
        <br />
        
        <Text>
          A platform for open and honest Discussions without fearing censorship
          (Topics range from global economy to mental health). 
          This Just the Start of an Odessey.
        </Text>
      </Box>
    </Container>
  );
};

export default Vision;
