import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import img1 from "../assets/roadmap.jpg";

const Container = styled.div`
  width: 100vw;
  min-height: 200vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  @media (max-width: 30em) {
    min-height: 150vh;
  }

`;
const Box = styled.div`
  width: 100vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: ${(props) => props.theme.body};

    @media (max-width: 30em) {
      min-height: 70vh;

}
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-align: center;
  font-weight: 300;
  margin: 2rem 0;
  text-transform: uppercase;

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
}

`;
const Text = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  /* text-align: center; */
  font-weight: 300;
  width: 60%;
  margin: 0 auto;


  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 48em){
    width: 80%;

}
@media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
}
  /* position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%) !important; */
`;

const ImgContainer = styled.div`
  width: 100vw;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-position: bottom;
    object-fit: cover;
    position: fixed;
    top: 0;
  }

  @media (max-width: 30em) {
    img{
      height: 150vh;
      object-position: bottom;
    }
}
`;

const RoadMap = () => {

  
  const [mobile, setmobile] = useState(true);

  useLayoutEffect(() => {
    if (window.matchMedia("(min-width:30em)").matches) {
      setmobile(false);
    }
   
  }, []);

  return (
    <Container data-scroll-section >
      <ImgContainer>
      
        {
          mobile ?

          <img
          src={img1}
          alt="Unknown Man"
          
        />
          :
          <img
          src={img1}
          alt="Unknown Man"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#fixed-target"
        />
        }
      </ImgContainer>
      <Box id="fixed-target" >
        <Title>Roadmap</Title>
        <Text>
        The goal of Phase 1 is to build the Seed, by gathering as many people as possible passionate about what Web3-space offers. 
        And giving them the opportunity to educate themselves and build awareness about the importance and significance Web3 holds. 
        To give them the Key necessary to transform their Lives.
        </Text>
        <br />
        <Text >
        Through Phase 1 he wants to gather People who are interested in the opportunities Web 3 offers, 
        like the blockchain, NFTs, Smart contracts and even giving NFT-Artists a Platform 
        where they get the recognition they deserve. 
        He wants to create a Club where all these people come together to:

          <br /> <br />
          &nbsp;&nbsp; &nbsp;&nbsp;1. Discuss their ideas and create new ones <br />
          &nbsp;&nbsp; &nbsp;&nbsp;2. Giving those with an Idea a possible way to realize it
          &nbsp;&nbsp; &nbsp;&nbsp;3. Giving those with a Project that’s already working, a Platform to present it
          
          - And developing and looking for new opportunities and niches that have enormous potential but nobody knows them. 
          - Talking and Discussing about actual problems that concerns everyone and finding a Solution

          This is a long journey that requires time and effort 
          but provides those that go through it an opportunity to change their own Destiny.
        </Text>
      </Box>
    </Container>
  );
};

export default RoadMap;
