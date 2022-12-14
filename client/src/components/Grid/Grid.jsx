import React, { useState } from 'react'
import './grid.css'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getAllEventList, getAllEvents } from '../../Redux/actions'
import Card from '../Card/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import { all } from 'axios'



export default function Grid() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)
    const [hasMore, setHasMore] = useState(true)
    const Events = useSelector( (state) => state.events )
    const allEvents = useSelector((state) => state.allevent)
    // const [currentEvents, setCurrentEvents] = useState(Events)

    // console.log(Events)
    // console.log(allEvents)    
    // console.log(page)



    

    if(page === totalPages) {
        setHasMore(false)
    }

    useEffect(() => {
        dispatch(getAllEvents(page))
        dispatch(getAllEventList())
    }, [dispatch, page])    
    return (
        <InfiniteScroll
            dataLength={allEvents.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            >
           <ul className='eventsGrid'>
            {
                Events?.map((event)=>{
                    return (
                        <Card event={event} key={event.id}/>
                    );
                })
            }
            </ul> 
        </InfiniteScroll>
        
    )
}
