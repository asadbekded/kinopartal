import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { apis, baseImgUrl } from "../../API/API";
import { StyledBtn, StyledCardImg, StyledImg, StyledPeopleBox, StyledPeopleContent, StyledSingCardAverage, StyledSingCardBox, StyledSingCardBudget, StyledSingCardContent, StyledSingCardCount, StyledSingCardStr, StyledSingCardText, StyledSingCardTime, StyledSingCardTitle, StyledSingle } from "./single-movie.styles";
import Exit from "../../assets/images/left.png";
import { Carousel } from "../../components/Carousel/carousel.component";
import { CarouselFilm } from "../../components/CarouselFilm/carousel-film.component";

export const SingleMovie = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [ movie , setMovie] = useState([]);
    const [ people, setPeople ] = useState([]);
    const [ peopleFilm, setPeopleFilm ] = useState([]);

    const getSingleMovie = async(movieId) => {
        const res = await apis.getMovies(movieId)
        setMovie(res.data);
    }

    
    const getMovieCredit = async(creditId) => {
        const res = await apis.getMovieCredits(creditId)
        setPeople(res.data.cast)
    }

    const getMovieCreditFilm = async(filmId) => {
        const res = await apis.getMovieCreditsFilm(filmId)
        setPeopleFilm(res.data.results)
    }
    
    useEffect(() => {
        getSingleMovie(id)
        getMovieCredit(id)
        getMovieCreditFilm(id)
    },[id]);

  return (
    <StyledSingle img={movie.backdrop_path}>
        <StyledPeopleBox>
            <StyledBtn onClick={() => navigate("/")} type='button'>
                <StyledImg src={Exit} alt='exit img' width={40} height={30}/>
            </StyledBtn>

            <StyledPeopleContent>
              <Carousel people={people}/>
            </StyledPeopleContent>
        </StyledPeopleBox>


        <StyledSingCardBox>
            <StyledCardImg src={baseImgUrl + movie.poster_path} alt={movie.title} width={150} height={100}/>
            <StyledSingCardContent>
                <StyledSingCardTitle>{movie.original_title}</StyledSingCardTitle>
                <StyledSingCardAverage><StyledSingCardStr>Average: </StyledSingCardStr>{movie.vote_average}</StyledSingCardAverage>
                <StyledSingCardCount><StyledSingCardStr>Count: </StyledSingCardStr> {movie.vote_count}</StyledSingCardCount>
                <StyledSingCardTime><StyledSingCardStr>Release date: </StyledSingCardStr> {movie.release_date}</StyledSingCardTime>
                <StyledSingCardBudget><StyledSingCardStr>Budget: </StyledSingCardStr> {movie.budget}</StyledSingCardBudget>
                <StyledSingCardText>{movie.overview}</StyledSingCardText>
            </StyledSingCardContent>
        </StyledSingCardBox>
        
        <button>
        <Link to={`/vidios/${movie.id}`}>Send</Link>
        </button>

        <StyledPeopleContent>
              <CarouselFilm peopleFilm={peopleFilm}/>
            </StyledPeopleContent>
    </StyledSingle>
  )
}
