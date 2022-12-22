import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import { baseImgUrl } from "../../API/API";
import { Link } from "react-router-dom";

export const Carousel = ({people}) => {
    
    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        draggable: false,
        initialSlide: 1,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <div className="carousel-box">
        <Slider {...settings}>
        {
            people.map(el => (
                <Link key={el.id} to={`/person/${el.id}`}>
                <img  className="carouselimg-box" src={baseImgUrl + el.profile_path} alt={'img'} width={60} height={40}/>
                </Link>
                ))
        }
        </Slider>
        </div>
    )
    }