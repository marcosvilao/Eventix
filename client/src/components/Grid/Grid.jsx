import React from 'react'
import './grid.css'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getAllEvents } from '../../Redux/actions'
import Card from '../Card/Card'



export default function Grid() {
    const dispatch = useDispatch()
    const allEvents = useSelector( (state) => state.events )
    console.log(allEvents)

    useEffect(() => {
      dispatch(getAllEvents())
    }, [dispatch])    
    return (
  
        <ul className='eventsGrid'>
            {
                allEvents?.map((event)=>{
                    return (
                        <Card event={event} key={event.id}/>
                    );
                })
            }
        </ul>
    )
}
