import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
   scroll-behavior: smooth;
   height: 100%;
}
*, *::after, *::before{
   box-sizing: border-box;
   list-style: none;
   text-decoration: none;
}

body{
   display: flex;
   flex-direction: column;
   height: 100%;
   margin: 0px;
   font-family: 'Roboto', sans-serif;
   background-color: silver;
}
img{
   max-width: 100%;
   height: auto;
   vertical-align: middle;
   object-fit: cover;
}
main{
   flex-grow: 1;
}
`;