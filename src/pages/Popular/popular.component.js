import { useEffect, useState } from 'react';
import { apis } from '../../API/API.js';
import { Card } from '../../components/Card/card.component.js';
import { StledPopularList, StyledAnimatsa } from './popular.styles.js';
import Animatsa from '../../assets/images/animatsa.svg';

export const Popular = () => {

  const [film , setFilm] = useState([]);

  const getPopularMovie = async () => {
    const res = await apis.getPopularMovies();
    setFilm(res.data.results)
  }  
  useEffect(() => {
    getPopularMovie()
  },[]);

  return (
    <div>
      {
        film.length ? (
        <StledPopularList>
          {
         film.map((el) => (
            <Card key={el.id} el={el}/>
         ))}
        </StledPopularList> )
         : (<StyledAnimatsa src={Animatsa} alt='imd-animsa' width={200} height={200}/>)
      }
    </div>
  )
}
