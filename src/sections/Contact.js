import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/contact.jpg'
import twitter from '../assets/Logo white.svg'
import email from '../assets/mail_FILL0_wght400_GRAD0_opsz48.svg'



const Container = styled.div`
width: 100vw;
min-height: 100vh;

overflow: hidden;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${props => props.theme.body};
color: ${props => props.theme.text};



`

const Box = styled.div`
width: 100%;
height: 80vh;



display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 64em) {
  flex-direction: column;
  min-height: 100vh;
  height: auto;

}
@media (max-width: 48em) {
  min-height: 70vh;
 

}

`

const Left = styled.div`
width: 50%;
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
    width: 90%;

}
`

const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

position: relative;
@media (max-width:48em) {
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
    font-size: ${(props) => props.theme.fontxl};
}
`

const Text = styled.h2`
font-size: ${props => props.theme.fontlg};
text-align: center;
font-weight: 300;


a{
    img{
        width: 2rem;
        height: auto;
    }
}
`

const SmallText = styled.h2`
font-size: ${props => props.theme.fontmd};
text-align: center;
font-weight: 300;


a{
    img{
        width: 1.5rem;
        height: auto;
    }
}

@media (max-width: 64em) {
    a{
        display: none;
    }

}
`


const Footer = styled.footer`
width: 100vw;
padding: 6rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media (max-width: 30em) {
    padding: 4rem 0;

}

`
const Btn = styled.a`


background-color: ${props => props.theme.body};
padding: 1rem 2rem;
border: 1px solid ${props => `rgba(${props.theme.textRgba},0.5)`};

color: inherit;
text-decoration: none;
@media (max-width: 48em){
  position: relative;
  top: 0;
  left: 0;
}
`

const Contact = () => {
  return (
    <Container data-scroll-section id="contact">
        <Box>
        <Left>
            <img  src={img1} alt="Unknown Men NFT" />
        </Left>
        <Right data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
            <Title>Contact</Title>
            <Text>Unknown Men Mail: info@unknownmennft.com
            <br />
            <br />

            <a href="https://twitter.com/_Odysssey_"  target={"_blank"} rel="noreferrer">
            <img src={twitter} alt="Unknown Men NFT" />

            <a href="https://raritysniper.com/nft-drops-calendar">Odessey of the UnknownMen</a>

            </a>
            &nbsp;
            &nbsp;
            <a href="mailto:info@unknownmennft.com"  target={"_blank"} rel="noreferrer" data-scroll data-scroll-speed="4" >
            <img src={email} alt="Unknown Men NFT" />

            </a>
            
            </Text> <br />
            

            <Btn  href="https://ukm.pages.dev/" target={"_blank"} >
          Mint Now
        </Btn>
        </Right>
        </Box>
        <Footer >
        <SmallText>
            
      
            <a href="https://twitter.com/_Odysssey_"  target={"_blank"} rel="noreferrer" data-scroll data-scroll-speed="4" >
            <img src={twitter} alt="Unknown Men NFT" />

            </a>
            <br />
            <br />
          <span data-scroll data-scroll-speed="-4">  @{new Date().getFullYear()}&nbsp;Unknown Men.</span>
            </SmallText>
        </Footer>
    </Container>
  )
}

export default Contact