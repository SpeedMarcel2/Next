/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import img1 from "../assets/boat-purple.jpg";

const Container = styled.div`
  width: 80vw;
  min-height: 150vh;
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
    min-height: 200vh;


  }

  @media (max-width: 25em) {
    min-height: 250vh;

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
  overflow: hidden;

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

        Why?
        <br />

        <Text>
        We always wanted to be able to impact the World. On a level where our names will be written in History books even multiple millennia later. 
        Leaving a legacy behind, that will provide humanity, our friends, and relatives with the Foundation for a bright Future. 
        It sounds childish but it’s just something that motivates us every single day to improve and to keep moving forward.
        
        This Goal is incredibly Huge, to the point of being almost impossible. And to achieve that, it does not only require multiple steps in a specific sequence but also certain conditions to be met. 
        But the current time we live in and with opportunities like Web3, make us one step closer to our Destination. 
        The first step on this journey is to make full use of this Opportunity, 
        by using our NFT to build a strong network of competent and capable people in various Areas of Life (financially, emotionally and mentally) and to create a breeding ground for exceptional future Web3 businesses 
        able to be foundational pillars of the next Generation. and another venue for Open discussions, 
        
        But this is only achievable through a series of multiple stages and the first stage is to build the core of our Network, 
        knowledge about the Web3 Space, and (that's more of a fun Goal) creating a platform for artists in the Web3 Space, that gives them the recognition they deserve. 

        This is why the community has an indispensable place on our upcoming journey towards a new Future.
        </Text>
        
        <br />
        
        <Text>
        At the current stage, our NFT has 2 primary focuses: 

        - Creating a Platform to educate on Web3
        
        - Building familiarity inside the network
        
        A platform that allows small artists in the NFT Space to gain more Attention and Recognition
        </Text>

        <br />
        
        
        <Title>A platform for digital artists</Title>
        
        
        <Text>
        We believe on an artistic level, NFT offers a lot of potential, especially its future potential is tremendous.
        Digital Art has given the notion of “Art” a new meaning and almost a new definition. 
        And by creating a platform for the Space that is supportive of contemporary artists,
        particularly the smaller ones with neither Capital nor Attention, we can lay a foundation for future inspiration.
        </Text>
        
        <Text>
        Our Collection has a total of 500 NFTs<br />
          <ul>
           If you like what you’ve read and are willing to go alongside us on this journey, we welcome you to UNKNOWN MEN.
           </ul>
        </Text><br />

        <br/>
        <Text>The Future is in your Hands. Welcome to the Odessey of the Unknown Men.</Text>

      </Box>
    </Container>
  );
};

export default Vision;