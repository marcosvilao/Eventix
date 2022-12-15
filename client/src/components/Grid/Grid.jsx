import React, { useState } from "react";
import "./grid.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllEventList, getAllEvents } from "../../Redux/actions";
import Card from "../Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import styled, { keyframes } from "styled-components";
import Loading from "../Loading/Loading";

export default function Grid() {
  const URL = "http://localhost:3001";
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const Events = useSelector((state) => state.events);

  

  const next = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    dispatch(getAllEvents(page));
  }, [dispatch, page]);
  return Events.length ? (
    <InfiniteScroll dataLength={Events.length} hasMore={hasMore} next={next}>
      <ul className="eventsGrid">
        { 
          Events.map((event) => {
            return <Card event={event} key={event.id} />;
          })
        }
      </ul>
    </InfiniteScroll>
  ): <Loading/>
}
