import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import { dark } from './styles/Themes';
import {  useLayoutEffect, useRef, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import About from "./sections/About";
import RoadMap from "./sections/RoadMap";
import How from './sections/How';
import Contact from "./sections/Contact";
import LocomotiveScroll from 'locomotive-scroll';
import Start from './components/Start';
import Vision from "./sections/Vision";



function App() {
  const containerRef = useRef(null);
  const [scrollInstance, setScrollInstance] = useState();
useLayoutEffect(() => {

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
     mobile: {
       smooth: true
   },
   tablet: {
    smooth: true,
    breakpoint: 0,    // <---- Fixes The Issue 🎉
  }
});
setScrollInstance(scroll);


  return () => {
    if(scroll) scroll.destroy();
  };
}, [])

  return (
    <ThemeProvider theme={dark}>
{/* <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
> */}
<GlobalStyle />

  <main data-scroll-container ref={containerRef} >
    <NavBar scroll={scrollInstance}/>
    <Home />
<Start />
<Vision />
   <About />

<RoadMap />
<How />
<Contact />
  </main>
 {/* </LocomotiveScrollProvider> */}
   
    </ThemeProvider>
  );
}

export default App;
