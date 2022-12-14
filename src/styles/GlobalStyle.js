import { createGlobalStyle } from "styled-components";
import "@fontsource/kdam-thmor-pro"

export const GlobalStyle = createGlobalStyle`

*,*::before, *::after{
    margin: 0;
    padding: 0;
}

body{
  overflow-x: hidden;
  background-color: #000;
  font-family: "Kdam Thmor Pro", sans-serif;
  font-weight: 100 !important;
}

html.has-scroll-smooth {
  overflow: hidden;
}
html.has-scroll-dragging,
html.has-scroll-dragging * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.has-scroll-smooth body {
  overflow: hidden;
}
.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100vh;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
}
.c-scrollbar:hover {
  transform: scaleX(1.45);
}
.c-scrollbar:hover,
.has-scroll-dragging .c-scrollbar,
.has-scroll-scrolling .c-scrollbar {
  opacity: 1;
}
.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #000;

  width: 7px;

  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab;
}
.has-scroll-dragging .c-scrollbar_thumb {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}


`