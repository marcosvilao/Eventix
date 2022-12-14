import React, { useState } from 'react'
import './grid.css'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getAllEventList, getAllEvents } from '../../Redux/actions'
import Card from '../Card/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios, { all } from 'axios'



export default function Grid() {
    const URL = "http://localhost:3001"
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const Events = useSelector( (state) => state.events )
    const allEvents = useSelector((state) => state.allevent)
    const [concatEvents, setconcatEvents] = useState([])

    const next = () => {
        setPage((prevPage) => prevPage + 1)
    }

    useEffect(() => {
        axios(URL + '/events/page/' + page).then((data) => {
            setconcatEvents((prevEvents) => prevEvents.concat(data.data))
        })
        dispatch(getAllEventList())
        
        
    }, [dispatch, page])    
    return (
        <InfiniteScroll
            dataLength={concatEvents.length}
            hasMore={hasMore}
            next={next}
            >
           <ul className='eventsGrid'>
            {
                Events.length > 0 ?
                Events.map((event)=>{
                    return (
                        <Card event={event} key={event.id}/>
                    );
                })
                :
                concatEvents?.map((event)=>{
                    return (
                        <Card event={event} key={event.id}/>
                    );
                })
            }
            </ul> 
        </InfiniteScroll>
        
    )
}
