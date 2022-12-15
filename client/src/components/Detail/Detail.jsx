import React, { useEffect }from 'react';
import { searchEventById } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


export default function Detail() {
  const eventShowed = useSelector(state => state.events)
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()


  useEffect(() => {
    dispatch(searchEventById(id))
  }, [id, dispatch])


  function handleBack() {
    history.goBack()
  }
  console.log(eventShowed[0].image)

  return (
    <div>
      <div>
        <button onClick={handleBack}>
          BACK
        </button>
      </div>
      <div>
        <div>
          <img src={eventShowed[0].image} alt= "" />
        </div>
        <div>
          <p>{eventShowed[0].name}</p>
          <p>{eventShowed[0].location}</p>
          <p>{eventShowed[0].price}</p>
        </div>
      </div>
    </div>
  )
}
