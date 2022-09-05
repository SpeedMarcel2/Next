import React from 'react'
import styled from 'styled-components'
import skull from '../assets/skull.jpg'
import { useState,useLayoutEffect } from 'react';

const Container = styled.div`
width: 100vw;
min-height: 100vh;

overflow: hidden;

display: flex;
justify-content: center;
align-items: center;

background-color: ${props => props.theme.body};
color: ${props => props.theme.text};

@media (max-width: 64em) {
padding: 5rem 0;

}

@media (max-width: 30em) {
  min-height: 60vh;


}

`

const Box = styled.div`
width: 80%;
height: 80vh;



display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 64em) {
  flex-direction: column;
  min-height: 100vh;
  height: auto;

}

`

const Left = styled.div`
width: 40%;
height: 100%;


display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
img{
    width: 100%;
    height: auto;

}

@media (max-width: 64em) {
    width: 60%;

}

@media (max-width: 30em) {
    width: 100%;

}
`

const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
    width: 100%;

}
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-align: center;
font-weight: 300;
margin-bottom: 2rem;
text-transform:uppercase;

@media (max-width: 30em) {
  font-size: ${props => props.theme.fontxl};
width: 100%;

}
`

const Text = styled.h2`
font-size: ${props => props.theme.fontmd};
text-align: left;
font-weight: 300;

@media (max-width: 30em) {
  font-size: ${props => props.theme.fontsm};


}
`

const About = () => {

  const [mobile, setmobile] = useState(false);

  useLayoutEffect(() => {
    if (window.matchMedia("(max-width: 64em)").matches) {
      setmobile(true);
    }
   
  }, []);

  return (
    <Container data-scroll-section id="about" >
        <Box>
        <Left data-scroll data-scroll-direction="horizontal">
            <img data-scroll data-scroll-speed={2} src={skull} alt="Unknown Men NFT" data-scroll-direction={mobile ? "horizontal" : "verticle"}/>
        </Left>
        <Right>
            <Title data-scroll data-scroll-speed="-1">About Us</Title>
            <Text >
              We’re 2 young Men with the Dream and Desire to take control of our Destiny, 
              having the choice to decide who and where we want to be in our Life. 
              For us, Web3 (NFT, Blockchain, etc.) symbolizes the Opportunity we’ve constantly been looking for.
              The Opportunity to create our own reality, to not only dream but to make these dreams reality.</Text>
              <br />

<Text>
We might be young, inexperienced, have no track record, but one thing is for sure, 
we have nothing to hide and own what we're about and who we are. 
No matter if you are with us or against us our rise is Unstoppable.
</Text>

        </Right>
        </Box>
    </Container>
  )
}

export default About