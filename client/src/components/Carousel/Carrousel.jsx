import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllEventList } from "../../Redux/actions";
import "./carousel.css";
import { H1 } from "../Styles/Styles";
export default function Carrousel() {
  const dispatch = useDispatch();
  const Events = useSelector((state) => state.allevents);
  useEffect(() => {
    dispatch(getAllEventList());
  }, [dispatch]);
  
  const Human = Events.length ? Events.findIndex(event => event.name === "Sábado 28.01 - Maria Becerra") : null;
  //const Burda = Events.length ? Events.findIndex(event => event.name === "20.01 YSY (ATP)") : "null";
  const newYear = Events.length ? Events.findIndex(event => event.name === "Bresh Enero en Niceto Club (+18)") : null;
  const newYear2 = Events.length ? Events.findIndex(event => event.name === "BRUJA SALGUERO-BRUNO ARIAS Y FACUNDO RAMIREZ.") : null;
  const newYear3 = Events.length ? Events.findIndex(event => event.name === "Club 69 Super Sábado Enero en Niceto Club (+18)") : null;
  const newYear4 = Events.length ? Events.findIndex(event => event.name === "Fiesta Glamour Duque Mar Del Plata 13-1") : null;
  const newYear5 = Events.length ? Events.findIndex(event => event.name === "BANANARAMA en la AZOTEA 🍌🏳️‍🌈 🏳️‍⚧️ 2 Music Rooms✨ / Sábado 14.01 - Open 23:55hs #OpenAir (+18)") : null;
  const newYear6 = Events.length ? Events.findIndex(event => event.name === "DIXIT - ROMPER EL PARY ( GUSTY DJ ) (+18)") : null;
  const newYear7 = Events.length ? Events.findIndex(event => event.name === "ATERCIOPELADOS EN GROOVE") : null;
  const newYear8 = Events.length ? Events.findIndex(event => event.name === "sabado 21 ≈ REI en vivo @ufopoint") : null;

  return (
    <div className="carousel">
      <H1>Main Events</H1>
      <Carousel showThumbs={false} infiniteLoop={true} interval={2500} autoPlay={true}>
          <Link to={'/home/' + (Events.length ? Events[Human].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[Human].imageBanner : null}
            alt={Events.length ? Events[Human].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[1].name : null}</p>*/}
        </div>
        </Link>
        <Link to={'/home/' + (Events.length ? Events[newYear].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[newYear].imageBanner : null}
            alt={Events.length ? Events[newYear].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[2].name : null}</p>*/}
        </div>
        </Link>
        <Link to={'/home/' + (Events.length ? Events[newYear2].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[newYear2].imageBanner : null}
            alt={Events.length ? Events[newYear2].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[2].name : null}</p>*/}
        </div>
        </Link>
        <Link to={'/home/' + (Events.length ? Events[newYear3].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[newYear3].imageBanner : null}
            alt={Events.length ? Events[newYear3].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[2].name : null}</p>*/}
        </div>
        </Link>
        <Link to={'/home/' + (Events.length ? Events[newYear4].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[newYear4].imageBanner : null}
            alt={Events.length ? Events[newYear4].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[2].name : null}</p>*/}
        </div>
        </Link>
        <Link to={'/home/' + (Events.length ? Events[newYear5].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[newYear5].imageBanner : null}
            alt={Events.length ? Events[newYear5].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[2].name : null}</p>*/}
        </div>
        </Link>
        <Link to={'/home/' + (Events.length ? Events[newYear6].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[newYear6].imageBanner : null}
            alt={Events.length ? Events[newYear6].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[2].name : null}</p>*/}
        </div>
        </Link>
        <Link to={'/home/' + (Events.length ? Events[newYear7].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[newYear7].imageBanner : null}
            alt={Events.length ? Events[newYear7].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[2].name : null}</p>*/}
        </div>
        </Link>
        <Link to={'/home/' + (Events.length ? Events[newYear8].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[newYear8].imageBanner : null}
            alt={Events.length ? Events[newYear8].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[2].name : null}</p>*/}
        </div>
        </Link>
      </Carousel>
    </div>
  );
}
