import { baseImgUrl } from "../../API/API"
import { StledCardItem, StyledCardImg, StyledCardSpn, StyledCardText, StyledCardTime, StyledCardTitle} from "./card.styles"

export const Card = ({el}) => {
  return (
     <StledCardItem>
        <StyledCardSpn>{el.vote_average}</StyledCardSpn>
        <StyledCardImg src={baseImgUrl + el.poster_path} alt={el.title}/>
        <StyledCardTitle>{el.title}</StyledCardTitle>
        <StyledCardTime>{el.release_date}</StyledCardTime>
        <StyledCardText>Vote count : {el.vote_count}</StyledCardText>
     </StledCardItem> 
  )
}
