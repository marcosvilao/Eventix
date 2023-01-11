import React, {useState, useEffect} from 'react'
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'
import Loading from '../Loading/Loading'
import axios from 'axios'
// const key = process.env.REACT_APP_GOOGLE_MAPS_KEY


const center = {lat: -34.6037, lng: -58.3816}

export default function Map({direction}) {

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey : "AIzaSyADc2MLZNlRKuETh2QEaDYA49aqZa9pNIU",  
  })
  const [directionResponse, setDirectionResponse] = useState(null)

  async function getCoordinates(address) {
    const response = await axios(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyADc2MLZNlRKuETh2QEaDYA49aqZa9pNIU`
    )
    const data = response.data.results[0] ? response.data.results[0] : null;
    return setDirectionResponse(data !== null ? data.geometry.location : center)
  }
    useEffect(() => {
      getCoordinates(direction)
      
    }, [direction])

  if(!isLoaded){
    return <Loading/>
  }

  return (
    <div style={{width: "18vw", height: "40vh"}}>
      <h3>Check location</h3>
      <GoogleMap
      center={directionResponse}
      zoom={14}
      mapContainerStyle={{width: "100%", height: "100%", "border-radius" : "20px"}}
      options={{
        zoomControl:false,
        streetViewControl:false,
        mapTypeControl:false,
        fullscreenControl:false
      }}>
        <Marker position={directionResponse}/>
      </GoogleMap>
    </div>
  )
}