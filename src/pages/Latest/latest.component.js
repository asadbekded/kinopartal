import { useEffect, useState } from 'react';
import { apis } from '../../API/API.js';
import { Card } from '../../components/Card/card.component.js';
import Animatsa from '../../assets/images/animatsa.svg';
import { StledPopularList, StyledAnimatsa } from './latest.styles.js';

export const Latest = () => {

  const [filmLatest , setFilmLatest] = useState([]);

  const getLatestMovie = async () => {
    const res = await apis.getLatestMovies();
    setFilmLatest(res.data.results)
  }  
  useEffect(() => {
    getLatestMovie()
  },[]);

  return (
    <div>
      {
        filmLatest ? (
        <StledPopularList>
          {
         filmLatest.map((el) => (
            <Card key={el.id} el={el}/>
         ))}
        </StledPopularList> )
         : (<StyledAnimatsa src={Animatsa} alt='imd-animsa' width={200} height={200}/>)
      }
    </div>
  )
}
