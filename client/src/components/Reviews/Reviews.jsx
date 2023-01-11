import React from 'react'
import { H5 } from '../Styles/Styles';
import { Rating } from 'react-simple-star-rating';
// import {Carousel} from 'react-responsive-carousel'
import {Carousel} from 'react-responsive-carousel'
import Loading from '../Loading/Loading';


export default function Reviews({reviews}) {
  if(reviews !== null) {
    return (
    <div>
        <h3>Reviews</h3>
        
          {
           reviews.length > 0 ?
          <Carousel> 
          {reviews.map((review) => {
            return (
                <div key={review.id}>
                    <H5>{review.title}</H5>
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
