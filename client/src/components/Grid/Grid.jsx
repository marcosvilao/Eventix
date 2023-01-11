import React, { useState } from "react";
import "./grid.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllEventList, getAllEvents } from "../../Redux/actions";
import Card from "../Card/Card";
import styled, { keyframes } from "styled-components";
import Loading from "../Loading/Loading";
import { Carousel } from "react-responsive-carousel";
import { Cube, NotFound, H1 } from "../Styles/Styles";
import Filters from "../Filters/Filters";



export default function Grid() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const Events = useSelector((state) => state.events);
  const err = useSelector(s=> s.error);
  const filtered = useSelector(s => s.filtrado);

  // const next = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  useEffect(() => {
    dispatch(getAllEventList());

  }, [dispatch]);

  const eventsFilter18 = Events.filter( e => e.name?.includes("(+"));
  const eventsFilter17 = Events.filter( e => !e.name?.includes("(+"));

  let arrGenre = Events.map(e => e.typeEvent?.genre);
  const genres = new Set(arrGenre.flat());
  let arrayGenres = [...genres];
 

  

  //-----------------------------------------------------
  let Events2 = []

  for (let i = 0; i < Events.length; i += 5) {
    let arr = Events.slice(i, i + 5);
    Events2?.push(arr);
  }
  // console.log("Arreglo: ", Events2);

  //-----------------------------------------------------
  let Events18 = []

  for (let i = 0; i < eventsFilter18.length; i += 5) {
    let arr = eventsFilter18.slice(i, i + 5);
    Events18?.push(arr);
  }
  // console.log("Arreglo: ", Events18);
  //-----------------------------------------------------
  let Event17 = []

  for (let i = 0; i < eventsFilter17.length; i += 5) {
    let arr = eventsFilter17.slice(i, i + 5);
    Event17?.push(arr);
  }
  // console.log("Arreglo: ", Events2);

  //-----------------------------------------------------
  let EventsFiltered = []

  for (let i = 0; i < filtered.length; i += 5) {
    let arr = filtered.slice(i, i + 5);
    EventsFiltered?.push(arr);
  }
  // console.log("Arreglo: ", Events2);

  //-----------------------------------------------------
 
  if(err.length >0){

    return (
      <NotFound>EVENT NOT FOUND</NotFound>
    )
  };


  if(filtered.length > 0){
    return (
      filtered.length ? (
      <div>
        <Carousel showThumbs={false}>
        {
          EventsFiltered.map( (eventos,i) => 
            <Cube key={i} className="contenedor">
              { 
                eventos.map((event,i) => {
                  return <Card event={event} key={i} />
                })
              }
            </Cube>
          )    
        }
      </Carousel>
      </div>  
      
      ): <Loading/>
    ) 
  };
  //----------------------------------------------------
  return(

    Events.length ? (
    <div>
      <p>All events</p>

      <Carousel showThumbs={false}>
        {
          Events2.map( (eventos,i) => 
            
            <Cube key={i} className="contenedor">
      
              { 
                eventos.map((event,i) => {
                  return <Card event={event} key={i} />
                })
              }
            
            </Cube>
          )
        
        }
      </Carousel>
      
        <div>

          <p>events +18</p>

          <Carousel slidesToShow={1}>
            {
              Events18.map( (eventos,i) => 
                
                <Cube key={i} className="contenedor">
          
                  { 
                    eventos.map((event,i) => {
                      return <Card event={event} key={i} />
                    })
                  }
                
                </Cube>
              )
            
            }
          </Carousel>
        </div>
      
      

      <p>events -18</p>

      <Carousel slidesToShow={1}>
        {
          Event17.map( (eventos,i) => 
            
            <Cube key={i} className="contenedor">
      
              { 
                eventos.map((event,i) => {
                  return <Card event={event} key={i} />
                })
              }
            
            </Cube>
          )
        
        }
      </Carousel>  

      {
        arrayGenres.map(genero => {
          
          let eventFil = Events.filter( e => e.typeEvent?.genre === genero);
          // console.log( "eventmap",eventFil);
          let EventsGenre = []

          for (let i = 0; i < eventFil.length; i += 5) {
            let arr = eventFil.slice(i, i + 5);
            EventsGenre?.push(arr);
          }
          // console.log("Arreglo: ", Events2);


          return(<div>

            <p>{eventFil[0]?.typeEvent? eventFil[0]?.typeEvent.type : "Event Created"} - {eventFil[0]?.typeEvent? eventFil[0]?.typeEvent.genre : null}</p>

            <Carousel slidesToShow={1}>
              {
                EventsGenre.map( (eventos,i) => 
                  
                  <Cube key={i} className="contenedor">
            
                    { 
                      eventos.map((event,i) => {
                        return <Card event={event} key={i} />
                      })
                    }
                  
                  </Cube>
                )
              
              }
            </Carousel> 

          </div>)
          
        })

      }
       
    </div>
    ): <Loading/>
  )








}
