import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { apis, baseImgUrl } from '../../API/API';
import { StyledImg, StyledPeopleContentCarousel } from '../SingleMovie/single-movie.styles';
import { StyledPeopleBox, StyledPeopleBtn, StyledPeopleContentt, StyledPeopleImg, StyledPeopleMovieBox, StyledPeopleText, StyledPeopleTitle } from './person.styles';
import Exit from "../../assets/images/left.png";
import { CarouselFilm } from '../../components/CarouselFilm/carousel-film.component';

export const Person = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [ person, setPerson ] = useState([])
    const [ personFilm, setPersonFilm ] = useState([])

    const getMoviePeople = async(personId) => { 
        const res = await apis.getMoviePeople(personId)
        setPerson(res.data);
    }

    const getPeopleFilm = async(peopleId) => {
      const res = await apis.getMoviePeopleFilm(peopleId)
      console.log(res.data.cast);
      setPersonFilm(res.data.cast)
    }
     
    useEffect(() => {
        getMoviePeople(id)
        getPeopleFilm(id)
    },[id])

  return (
    <StyledPeopleMovieBox>
      <StyledPeopleBtn onClick={() => navigate('/')} type='button'>
        <StyledImg src={Exit} alt='exit img' width={40} height={30}/>
      </StyledPeopleBtn>
      <StyledPeopleContentt>
      <StyledPeopleImg src={baseImgUrl + person.profile_path} alt={person.name} width={230} height={80}/>
      <StyledPeopleBox>
        <StyledPeopleTitle>{person.name}</StyledPeopleTitle>
        <StyledPeopleText>Birthday: {person.birthday}</StyledPeopleText>
        <StyledPeopleText>Place of birth: {person.place_of_birth}</StyledPeopleText>
        <StyledPeopleText>Popularity: {person.popularity}</StyledPeopleText>
        <StyledPeopleText>Biography: {person.biography}</StyledPeopleText>
        <StyledPeopleText> Gender:   
        {
          person.gender === 2 ?
          (' Main') : (' Women')
        }
      </StyledPeopleText>
      </StyledPeopleBox>
      </StyledPeopleContentt>

      <StyledPeopleContentCarousel>
              <CarouselFilm peopleFilm={personFilm}/>
        </StyledPeopleContentCarousel>
    </StyledPeopleMovieBox>
  )
}
