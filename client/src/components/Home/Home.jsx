import React from 'react'
import Grid from '../Grid/Grid'
import Navbar from '../Navbar/Navbar'


function Home() {


  return (
    <div>
        <Navbar/>
        <p>Eventix is an event marketplace whith better functionalities, cheaper servicies, and simple tu use.
            Be free to filter the events like you want </p>
        <Grid/>
    </div>

  )
}

export default Home