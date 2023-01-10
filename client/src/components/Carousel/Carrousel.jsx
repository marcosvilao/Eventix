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
  
  const Human = Events.length ? Events.findIndex(event => event.name === "HUMAN NEW YEAR´S EVE") : null;
  const Burda = Events.length ? Events.findIndex(event => event.name === "BRUDA (+23)") : null;
  const newYear = Events.length ? Events.findIndex(event => event.name === "AÑO NUEVO EN LA CARPA - DJ Kelo en vivo (+18)") : null;

  return (
    <div className="carousel">
      <H1>Main Events</H1>
      <Carousel showThumbs={false} infiniteLoop={true} interval={2500} autoPlay={true}>
          <Link to={'/home/' + (Events.length ? Events[Burda].id : null)}>
        <div>
          <img className="carouselimg"
            src={Events.length ? Events[Burda].imageBanner : null}
            alt={Events.length ? Events[Burda].name : null}
          />
          {/*<p className="legend">{Events.length ? Events[0].name : null}</p>*/}
        </div>
          </Link>
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
      </Carousel>
    </div>
  );
}
