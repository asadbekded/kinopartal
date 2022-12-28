import { useEffect, useState } from 'react';
import { apis } from '../../API/API.js';
import { Card } from '../../components/Card/card.component.js';
import Animatsa from '../../assets/images/animatsa.svg';
import { StledPopularList, StyledAnimatsa } from './latest.styles.js';
import { StyledPaginition } from '../Home/home.styles.js';
import { Paginations } from '../../components/Paginations/paginations.component.js';

export const Latest = () => {

  const [filmLatest , setFilmLatest] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getLatestMovie = async (pages) => {
    const res = await apis.getLatestMovies(pages);
    setFilmLatest(res.data.results)
    setTotalPages(res.data.total_pages);
  }  
  useEffect(() => {
    getLatestMovie(pages)
  },[pages]);

  return (
    <div>
      {
        filmLatest?.length ? (
        <StledPopularList>
          {
         filmLatest.map((el) => (
            <Card key={el.id} el={el}/>
         ))}
        </StledPopularList> )
         : (<StyledAnimatsa src={Animatsa} alt='imd-animsa' width={200} height={200}/>)
      }

      <StyledPaginition>
              <Paginations
                setPages={setPages}
                pages={pages}
                totalPages={totalPages}
              />
      </StyledPaginition>
    </div>
  )
}
