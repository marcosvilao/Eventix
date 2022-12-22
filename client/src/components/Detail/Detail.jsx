import React, { useEffect }from 'react';
import { searchEventById } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import Map from '../Map/Map';



export default function Detail() {
  const eventShowed = useSelector(state => state.events)
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()


  useEffect(() => {
    dispatch(searchEventById(id))
  }, [id, dispatch])


  function handleBack() {
    eventShowed.shift()
    return history.goBack()
  }
  

  return (
    <div>
      <div>
        <button onClick={handleBack}>
          BACK
        </button>
      </div>
      <div>
        <div>
          <img src={eventShowed.length ? eventShowed[0].image : null} alt= "" />
        </div>
        <div>
          <p>{eventShowed.length ? eventShowed[0].name : null}</p>
          <p>{eventShowed.length ? eventShowed[0].location : null}</p>
         {
          eventShowed.length ? eventShowed[0].price?.map((e, i) => 
            <div key={i}>
              <p>{e.tipoDeTicket}</p>
              <p>{e.precio}</p>
            </div> 
          ) :
          null
         }
        </div>
        <Map/>
        <div>
          <Link to={'/event/sale'}><button>BUY TICKETS</button></Link>
        </div>
      </div>
    </div>
  )
}
