import { StyledHeader, StyledItem, StyledLink, StyledList, StyledNavbar, StyledNavLink, StyledSearch } from "./header.styles"
import Logo from '../../assets/images/logo.png';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {

   const [ searchVal, setSearchVal ] = useState('')
   const navigate = useNavigate()

   useEffect(() => {
      if(searchVal.length > 0){
         navigate("/search/" + searchVal);
      }else{
         navigate('/');
      }
   }, [searchVal])
   
  return (
    <StyledHeader>
      <StyledLink to='/'><img src={Logo} alt='Logo img' width='140' height='50'/></StyledLink>
      <StyledNavbar>
         <StyledList>
            <StyledItem>
               <StyledNavLink  to='/'>Home</StyledNavLink>
            </StyledItem>
            <StyledItem>
               <StyledNavLink to='/popular'>Popular</StyledNavLink>
            </StyledItem>
            <StyledItem>
               <StyledNavLink to='/latest'>Latest</StyledNavLink>
            </StyledItem>
         </StyledList>
      </StyledNavbar>
      <StyledSearch onChange={(evt) => setSearchVal(evt.target.value)} type='search' placeholder="Search film..."/>
    </StyledHeader>
  )
}
