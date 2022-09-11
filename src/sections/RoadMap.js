import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import img1 from "../assets/roadmap.jpg";

const Container = styled.div`
  width: 100vw;
  min-height: 150vh;

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
    height: 150vh;

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
        Building foundational knowledge about Web3, that is necessary to develop creative and innovative ideas able to impact or change the Web3 era. 
        Forging the core of our Network by and building familiarity between our members. 
        By developing and creating the community culture (Principles, Values and Standards). 
        
        Using Twitter through spaces, retweets and posts to give smaller artists not only a platform but also an Audience,
        so they can go more in depth about their Art.<Text>

        Web3 Education

        </Text>To build the necessary knowledge about Web3, we decided to use Discord.
        We won't teach you, because we aren't some Web3 pros, neither are we equipped or qualified to teach you. But we developed an alternative, a concept that emphasizes collective learning and educating ourselves together as a group. Meaning, we learn together with you, not in a student/teacher relationship but more like a group of colleagues working on a project. 

        We call it the ant-hive concept (a pretty cool name by the way). 
        How exactly does it work? - to know more about it and its function, check out our Twitter and follow us for more.<Text>

        Strengthening the Network
        
        </Text>And of course, we won't only talk about Web3. We want to use this platform to also talk about various topics, for everyone to be:

       - Up to date
       - Build a Network of great people
       - Being able to support each other beyond being solely focused on NFT to allow relationships to form, that can potentially hold for a lifetime

         On the other hand, we want to provide Digital-Artists with a platform, 
         that helps them to spread their name and which offers them a space where they can go more in Depth about their Art.<Text></Text>
        
        </Text>
        <br />

      </Box>
    </Container>
  );
};

export default RoadMap;
