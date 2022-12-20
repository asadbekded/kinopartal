import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { apis, baseImgUrl } from "../../API/API";
import { StyledBtn, StyledCardImg, StyledImg, StyledSingCardAverage, StyledSingCardBox, StyledSingCardBudget, StyledSingCardContent, StyledSingCardCount, StyledSingCardText, StyledSingCardTime, StyledSingCardTitle, StyledSingle } from "./single-movie.styles";
import Exit from "../../assets/images/left.png";

export const SingleMovie = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [ movie , setMovie] = useState([]);

    const getSingleMovie = async(movieId) => {
        const res = await apis.getMovies(movieId)
        console.log(res.data);
        setMovie(res.data);
    }

    useEffect(() => {
        getSingleMovie(id)
    },[id]);

  return (
    <StyledSingle img={movie.backdrop_path}>
        <StyledBtn onClick={() => navigate("/")} type='button'>
            <StyledImg src={Exit} alt='exit img' width={40} height={30}/>
        </StyledBtn>


        <StyledSingCardBox>
            <StyledCardImg src={baseImgUrl + movie.poster_path} alt={movie.title} width={200} height={100}/>
            <StyledSingCardContent>
                <StyledSingCardTitle>{movie.original_title}</StyledSingCardTitle>
                <StyledSingCardAverage>Average: {movie.vote_average}</StyledSingCardAverage>
                <StyledSingCardCount>Count: {movie.vote_count}</StyledSingCardCount>
                <StyledSingCardTime>Release date: {movie.release_date}</StyledSingCardTime>
                <StyledSingCardBudget>Budget: {movie.budget}</StyledSingCardBudget>
                <StyledSingCardText>{movie.overview}</StyledSingCardText>
            </StyledSingCardContent>
        </StyledSingCardBox>
    </StyledSingle>
  )
}
