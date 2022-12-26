import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apis } from '../../API/API'
import { StledPopularList, StyledAnimatsa } from '../../pages/Home/home.styles';
import { Card } from '../Card/card.component';
import Animatsa from '../../assets/images/animatsa.svg';
import useDebounce from '../../Hooks/useDebounce.component';

export const Search = () => {

    const {searchQuery} = useParams();
    const [ searchMovie, setSearchMovie ] = useState([])

    const debouncedSearchTerm = useDebounce(searchQuery, 1000);

    const getSerchMovie = async(searchQuery) => {
        const res = await apis.getMovieSearch(searchQuery)
        console.log(res.data.results);
        setSearchMovie(res.data.results)
    } 

    useEffect(() => {
        getSerchMovie(debouncedSearchTerm)
    },[debouncedSearchTerm])

  return (
    <div>
        {
        searchMovie?.length ? (
        <StledPopularList>
          {
         searchMovie.map(el => (
            <Card key={el.id} el={el}/>))
          }
        </StledPopularList> ) : (<StyledAnimatsa src={Animatsa} alt='imd-animsa' width={200} height={200}/>)
      }
    </div>
  )
}
