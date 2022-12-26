import { Link } from "react-router-dom";
import styled from "styled-components";

export const StledCardItem = styled.li`
&{
position: relative;
width: 100%;
max-width: 230px;
height: 440px;
background-color: teal;
border-radius: 15px;
padding: 15px;
margin-bottom: 30px;
box-shadow: teal 0px 2px 8px 0px;
transition: 1s;
}
&:hover{
    transform: scale(1.1);
    z-index: 1;
}
`;

export const StyledNav = styled(Link)`
text-decoration: none;
`;

export const StyledCardSpn = styled.span`
position: absolute;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
text-align: center;
padding: 4px 10px;
background-color: red;
top: 15px;
right: 0px;
color: #fff;
`;

export const StyledCardImg = styled.img`
border-radius: 10px;
`;

export const StyledCardTitle = styled.h3`
font-family: "Arial";
font-weight: 400px;
font-size: 16px;
color: #fff;
margin: 0px;
margin-top: 8px;
margin-bottom: 14px;
`;

export const StyledCardTime = styled.time`
margin: 0px;
color: #fff;
font-size: 14;
`;

export const StyledCardText = styled.p`
margin: 0px;
color: #fff;
margin-top: 5px;
font-size: 14;
`;