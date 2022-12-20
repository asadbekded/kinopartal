import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
background-color: teal;
box-shadow: teal 0px 2px 8px 0px;
`;

export const StyledNavbar = styled.nav``;

export const StyledList = styled.ul`
display: flex;
padding: 0px;
margin: 0px;
list-style: 0px;
`;

export const StyledItem = styled.li`
margin-right: 20px;
`;

export const StyledLink = styled(Link)``;

export const StyledNavLink = styled(NavLink)`
&{font-size: 18px;
color: #fff;
transition: 1s;
}
&:hover{
    color: red;
    transform: scale(1.1);
    z-index: 1;
}
`;

export const StyledSearch = styled.input`
width: 100%;
max-width: 230px;
padding: 8px 15px;
font-size: 16px;
border: none;
border-radius: 20px;
outline: none;
box-shadow: #fff 0px 1px 2px 0px, #fff 0px 2px 6px 2px;
`;
