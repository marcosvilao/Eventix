import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const mapUrl = `https://maps.googleapis.com/maps/api/js?key=AIzaSyADc2MLZNlRKuETh2QEaDYA49aqZa9pNIU&v=3.exp&libraries=geometry,drawing,places`

const MyMapComponent = compose(
    withProps({
      googleMapURL: mapUrl,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `70vh`, width: '50vw' }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
    //   apiKey={"AIzaSyADc2MLZNlRKuETh2QEaDYA49aqZa9pNIU"}
      defaultZoom={11}
      defaultCenter={{ lat: -34.6037, lng: -58.3816 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.6037, lng: -58.3816 }} />}
    </GoogleMap>
  )

export default function Map() {
  return (
    <div>
      <MyMapComponent isMarkerShown/>
    </div>
  )
}
