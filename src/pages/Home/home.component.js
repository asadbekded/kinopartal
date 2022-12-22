import { useEffect, useState } from 'react';
import { apis } from '../../API/API.js';
import { Card } from '../../components/Card/card.component.js';
import Animatsa from '../../assets/images/animatsa.svg';
import { StledPopularList, StyledAnimatsa } from './home.styles.js';

export const Home = () => {

  const [films , setFilms] = useState([]);

  const getTopMovie = async () => {
    const res = await apis.getTopMovies();
    setFilms(res.data.results)
  }  
  useEffect(() => {
    getTopMovie()
  },[]);

  return (
    <div>
      {
        films?.length ? (
        <StledPopularList>
          {
         films.map(el => (
            <Card key={el.id} el={el}/>))
          }
        </StledPopularList> ) : (<StyledAnimatsa src={Animatsa} alt='imd-animsa' width={200} height={200}/>)
      };
    </div>
  )
}
