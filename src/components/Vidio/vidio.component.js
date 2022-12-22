import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apis } from '../../API/API';
import { StyledAnimatsa } from '../../pages/Home/home.styles';
import Animatsa from '../../assets/images/animatsa.svg';
import { StyledImg } from '../../pages/SingleMovie/single-movie.styles';
import Exit from "../../assets/images/left.png";
import { StyledvidioBtn, StyledvidioContent, StyledvidioIframe } from './vidio.styles';

export const Vidio = () => {

    const [ vidio , setVidio ] = useState([])

    const {id} = useParams();
    const navigate = useNavigate();

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

            <StyledvidioBtn onClick={() => navigate(`/movie/${id}`)} type='button'>
                <StyledImg src={Exit} alt='exit img' width={40} height={30}/>
            </StyledvidioBtn>

      {
        vidio?.length ? (
          <StyledvidioContent>
              {
                vidio.splice(0,1).map((el) => (
                  <StyledvidioIframe width={550} height={315} src={`https://www.youtube.com/embed/${el.key}`} title={`${el.name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                ))
              }
          </StyledvidioContent>
        ) : (<StyledAnimatsa src={Animatsa} alt='imd-animsa' width={200} height={200}/>)
      }
    </div>
  )
}
