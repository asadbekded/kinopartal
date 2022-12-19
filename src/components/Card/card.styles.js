import styled from "styled-components";

export const StledCardItem = styled.li`
position: relative;
width: 100%;
max-width: 300px;
height: 550px;
background-color: teal;
border-radius: 15px;
padding: 15px;
margin-bottom: 30px;
box-shadow: teal 0px 2px 8px 0px;
`;
export const StyledCardSpn = styled.span`
position: absolute;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
text-align: center;
padding: 5px 14px;
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
font-size: 20px;
color: #fff;
margin: 0px;
margin-top: 8px;
margin-bottom: 18px;
`;

export const StyledCardTime = styled.time`
margin: 0px;
color: #fff;
`;

export const StyledCardText = styled.p`
margin: 0px;
color: #fff;
margin-top: 8px;
`;