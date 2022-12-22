import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apis } from '../../API/API';
import { StyledAnimatsa } from '../../pages/Home/home.styles';
import Animatsa from '../../assets/images/animatsa.svg';

export const Vidio = () => {

    const [ vidio , setVidio ] = useState([])

    const {id} = useParams();

    const getSingleVidioMovie = async(vidioId) => {
        const res = await apis.getMovieVidioFilm(vidioId)
        console.log(res.data.results[0]);
        setVidio(res.data.results);
    }

    useEffect(() => {
        getSingleVidioMovie(id)
    }, [id])


  return (
    <div>
      {
        vidio ? (
          <div>
              {
                vidio.map((el) => (
                  <iframe width={560} height={315} src={`https://www.youtube.com/embed/${el.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                ))
              }
          </div>
        ) : (<StyledAnimatsa src={Animatsa} alt='imd-animsa' width={200} height={200}/>)
      }
    </div>
  )
}
