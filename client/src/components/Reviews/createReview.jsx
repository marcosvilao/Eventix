import React, {useEffect, useState} from 'react'
import { Rating } from 'react-simple-star-rating'
import { H5, FormReview, H1 } from '../Styles/Styles'
import {useForm, } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createReview } from '../../Redux/actions'


export default function Review({event, updateComponent}) {
    const dispatch = useDispatch();
    const {register, setValue, handleSubmit, reset} = useForm();

    const [stars, setStars] = useState(0);
    
    useEffect(() => {
        setValue('stars', stars)
        setValue('eventName', event)
    }, [stars, event, setValue])
    
    
    //Catch Rating Value
    const handleRating = (rate) => {
        setStars(rate);
        
    }
    const handleReset = (e) => {
        // Set the initial value
        e.preventDefault();
        setStars(0);
        reset();
      }
    
    const onSubmit = (data) => {
        console.log(data)
        dispatch(createReview(data))
        reset()
        setStars(0)
        updateComponent(true)
    }

  return (
    <FormReview onSubmit={handleSubmit(onSubmit)}>
        <H1>Leave us you review</H1>
        <div>
           <h3>Title</h3>
           <input type="text" {...register('title')}/> 
        </div>
        <div>
            <Rating initialValue={stars} onClick={handleRating} allowFraction={true} transition={true}/>
        </div>
        <div>
            <h3>description</h3>
            <input type="text" {...register('text')}/>
        </div>
        <div>
            <button>Rate</button>
            <button onClick={handleReset}>Reset</button>
        </div> 
    </FormReview>
  )
}
