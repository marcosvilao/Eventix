import React, { useEffect }from 'react';
import { searchEventById } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


export default function Detail() {
  const events = useSelector( (state) => state.events )
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  
  
  const func = searchEventById(id)
  console.log(events)
  console.log(id)
  console.log(func())

  useEffect(() => {
    dispatch(searchEventById(id))
  }, [id, dispatch])


  function handleBack() {
    history.goBack()
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
          <img src={events[0].image} alt= "" />
        </div>
        <div>
          <p>{events[0].name}</p>
          <p>{events[0].location}</p>
          <p>{events[0].price}</p>
        </div>
      </div>
    </div>
  )
}
