import { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';


export default function LocomotiveScrollComponent() {
  useLayoutEffect(() => {

    const scrollEl = document.body;

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      mobile: {
        smooth: false
    },
    tablet: {
        smooth: false
    }
    });


    




    return () => {
      if (locoScroll) {
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  },[]);

  return null;
}