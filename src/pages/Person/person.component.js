import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { apis } from '../../API/API';

export const Person = () => {

    const {id} = useParams();

    const getMoviePeople = async(movieId) => {
        const res = await apis.getMovieCreditsFilm(movieId)
        console.log(res);
    }
     
    useEffect(() => {
        getMoviePeople(id)
    },[id])

  return (
    <div>Person component{id}</div>
  )
}
