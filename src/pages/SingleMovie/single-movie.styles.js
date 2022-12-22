import styled from "styled-components";

export const StyledSingle = styled.div`
padding: 40px;
height: 100vh;
background-image: ${(props) => props.img ? `url(${"https://image.tmdb.org/t/p/original/" + props.img})` : "url(https://via.placeholder.com/300)"};
background-position: center top;
background-repeat: no-repeat;
background-size: 100%;
`;

export const StyledBtn = styled.button`
padding: 0px;
background-color: transparent;
border: none;
`;
export const StyledImg = styled.img``;

export const StyledSingCardBox = styled.div`
margin: 0px auto;
margin-top: 20px;
margin-bottom: 20px;
width: 100%;
max-width: 540px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: nowrap;
background-color: #FEF78C;
padding: 8px;
border-radius: 15px;
`;

export const StyledSingCardContent = styled.div`
width: 100%;
max-width: 300px;
`;
export const StyledSingCardTitle = styled.h3`
font-family: "Arial";
font-size: 15;
margin: 0px;
padding: 0px;
color: red;
margin-bottom: 10px;
`;
export const StyledCardImg = styled.img`
border-radius: 10px;
`;
export const StyledSingCardAverage = styled.p`
font-family: "Arial";
margin: 0px;
padding: 0px;
font-size: 12px;
color: red;
margin-bottom: 8px;
`;
export const StyledSingCardStr = styled.strong`
font-family: "Arial";
margin: 0px;
font-size: 12px;
color: red;
`;

export const StyledSingCardBudget = styled.p`
font-family: "Arial";
margin: 0px;
padding: 0px;
font-size: 12px;
color: red;
margin-bottom: 8px;
`;

export const StyledSingCardTime = styled.time`
display: block;
font-family: "Arial";
font-size: 12px;
margin: 0px;
padding: 0px;
color: red;
margin-bottom: 8px;
`;

export const StyledSingCardText = styled.p`
font-family: "Arial";
font-size: 12px;
margin: 0px;
padding: 0px;
color: red;
`;
export const StyledSingCardCount = styled.p`
font-family: "Arial";
font-size: 12px;
padding: 0px;
margin: 0px;
color: red;
margin-bottom: 8px;
`;


// people styled

export const StyledPeopleBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const StyledPeopleContent = styled.div`
width: 1000px;
display: flex;
align-items: center;
justify-content: space-between;
`;
