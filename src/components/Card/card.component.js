import { baseImgUrl } from "../../API/API"
import { StledCardItem, StyledCardImg, StyledCardSpn, StyledCardText, StyledCardTime, StyledCardTitle, StyledNav} from "./card.styles"

export const Card = ({el}) => {
  return (
     <StledCardItem>
      <StyledNav to={`/movie/${el.id}`}>
        <StyledCardSpn>{el.vote_average}</StyledCardSpn>
        <StyledCardImg src={baseImgUrl + el.poster_path} alt={el.title} width={200} height={80}/>
        <StyledCardTitle>{el.title}</StyledCardTitle>
        <StyledCardTime>{el.release_date}</StyledCardTime>
        <StyledCardText>Vote count : {el.vote_count}</StyledCardText>
      </StyledNav>
     </StledCardItem> 
  )
}
