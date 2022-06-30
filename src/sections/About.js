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
            <Text >To be honest, we're just two ordinary guys with an idea and the will to create something
extraordinary. First, we thought, “should we be honest that we’re no *experts*? Because
everyone is talking about the need for great "Experts“ and professionals on the Team, and
we're just two simple Dudes with a Dream with no track record, why should people believe in
us?”.</Text>
<br />

<Text>
Then let me tell you, why not? Why won‘t you give 2 Guys the Chance to realize Something
that you could also be Part of and make it a BIG Succes, so That Even you can profite from
it?
</Text>

        </Right>
        </Box>
    </Container>
  )
}

export default About