import React from 'react'
import { H1, H5 } from '../Styles/Styles';
import { Rating } from 'react-simple-star-rating';
// import {Carousel} from 'react-responsive-carousel'
import {Carousel} from 'react-responsive-carousel'
import Loading from '../Loading/Loading';


export default function Reviews({reviews}) {
  if(reviews !== null) {
    return (
    <div>
        <H1>Reviews</H1>
        
          {
           reviews.length > 0 ?
          <Carousel> 
          {reviews.map((review) => {
            return (
                <div key={review.id}>
                    <h3>{review.title}</h3>
                    <Rating readonly={true} initialValue={review.stars} />
                    <p>{review.text}</p>
                </div>
            )
            
           })} 
           </Carousel>
           : <H5>This event has no reviews</H5>
        }
        
        
    </div>
  )

  } else {
    return <Loading/>
  }
}
