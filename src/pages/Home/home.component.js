import { useEffect, useState } from 'react';
import { apis } from '../../API/API.js';
import { Card } from '../../components/Card/card.component.js';
import Animatsa from '../../assets/images/animatsa.svg';
import { StledPopularList, StyledAnimatsa, StyledPaginition } from './home.styles.js';
import { Pagination } from '@mui/material';

export const Home = () => {

  const [films , setFilms] = useState([]);
  const [ page, setPage ] = useState(1);

  const getTopMovie = async () => {
    const res = await apis.getTopMovies();
    setFilms(res.data.results)
  }

  const getMoviePage = async (pageFilm) => {
    const res = await apis.getMoviePage(pageFilm)
    setPage(res.data);
    // console.log(res.data);
  }

  useEffect(() => {
    getTopMovie()
  },[]);


  useEffect(() => {
    getMoviePage(page)
  }, [page])

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
      }

      <StyledPaginition>
        <Pagination onChange={(_, num) => setPage(num)} count={page.total_pages} color="primary" />
      </StyledPaginition>
    </div>
  )
}


