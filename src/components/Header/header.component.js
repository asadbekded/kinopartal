import { StyledHeader, StyledItem, StyledLink, StyledList, StyledNavbar, StyledNavLink, StyledSearch } from "./header.styles"
import Logo from '../../assets/images/logo.png';

export const Header = () => {
   
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
      <StyledSearch type='search' placeholder="Search film..."/>
    </StyledHeader>
  )
}
