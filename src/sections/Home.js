import React from 'react'
import styled from 'styled-components';
import img1 from '../assets/unnamed.jpg'
import img2 from '../assets/Final River copy-1.webp'
import img3 from '../assets/boat copy.webp'






const Container = styled.div`
width: 100vw;
min-height: 100vh;
height: 150vh;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
overflow-x: hidden;

position: relative;

@media (max-width: 48em) {
height: auto;
margin-bottom: 5rem;
}


`


const ImgContainer = styled.div`
width: 100vw;
height: auto;


/* background-image: url(${img1});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */

img{
    width: 100%;
height: auto;
    object-position: bottom;
    object-fit: cover;
    position: absolute;
    top: 0;
}

&>*:last-child{
  z-index: 2;
}


@media (max-width: 64em) {
 img{
  height: 100vh;
 }
}

@media (max-width: 48em) {
  img{
    object-position: bottom right;

 }
}
`
const Title = styled.h1`
/* height: 100vh; */
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;
font-size: ${props => props.theme.fontBig};
font-weight: 300;
text-align: center;
position: relative;
z-index: 1;

text-shadow: 4px 8px 16px ${props => props.theme.body};
margin-top: 20%;

@media (max-width: 64em) {
  font-size: ${props => props.theme.fontxxxl};
}

@media (max-width: 48em) {
  font-size: ${props => props.theme.fontxxl};
  height: auto;
}


`



const Home = () => {




  return (
    <Container data-scroll-section id="home">
   <Title data-scroll data-scroll-speed={-4} >
        Unknown Man
    </Title>
        <ImgContainer>
        <img src={img1} alt="Unknown Man" />
            
            <img  src={img2} alt="Unknown Man" />
            <img  src={img3} alt="Unknown Man" />
        </ImgContainer>
    </Container>
  )
}

export default Home