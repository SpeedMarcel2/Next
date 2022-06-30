import React from "react";
import styled from "styled-components";
import img1 from "../assets/boat-yellow.jpg";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
height: auto;
  overflow: hidden;
  z-index: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  @media (max-width: 64em) {
 padding-bottom: 5rem;

}
`;

const Box = styled.div`
  width: 80%;
  height: 80vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
  flex-direction: column-reverse;
  min-height: 100vh;
  height: auto;

}
`;

const Left = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    width: 100%;

}
`;

const Right = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 64em) {
    width: 100%;

}
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  text-align: center;
  font-weight: 300;
  margin-bottom: 2rem;
  text-transform: uppercase;
  align-self: flex-start;

`;




const Text = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  text-align: left;
  font-weight: 300;

  
@media (max-width: 70em) {
  font-size: ${(props) => props.theme.fontsm};

}
`;

const Start = () => {




  return (
    <Container data-scroll-section id="start">
      <Box>
        <Right data-scroll data-scroll-speed="-1" >
        
          <Title >
        Start
          </Title>
          <Text>
            This NFT is just the first step on our Journey. And has only three
            main uses:
          </Text>
          <br />

          <Text>
            &nbsp;&nbsp;1. Raising capital to realize the first part of the
            Journey. <br />
            &nbsp;&nbsp;2. building the Core of our Community.
            <br />
            &nbsp;&nbsp;3. Rewarding those that believe in us so early on this
            Long Journey.
            <br />
          </Text>

          <br />

          <Text>
            The Mint price is 0.06 ETH. <br />
            The Mint date is Saturday, the 06/18/2022 CET/Timezone.
          </Text>
          <br />
          <Title >why?</Title>

          <Text>
            Our Goal in the NFT-marketplace isn’t a Metaverse or Merch etc. (At
            least at yet). It’s the opportunity to realize one of our biggest
            dreams. We know that the current NFT-market is lacking with
            countless scams, rug pulls, and false promises everywhere. Despite
            that, we still believe that NFT is one of the most significant
            opportunities nowadays for ordinary people to become extraordinary
            and everyone can be Part of it.
          </Text>
        </Right>
        <Left data-scroll data-scroll-direction="horizontal">
          <img
            data-scroll
            data-scroll-speed="2"
            src={img1}
            alt="Unknown Men NFT"
          />
        </Left>
      </Box>
    </Container>
  );
};

export default Start;
