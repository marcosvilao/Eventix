import React from 'react'
import { Link } from 'react-router-dom'
import {About, Techno, Btn, Descr, Members, Names, CardE} from '../Styles/Styles'

export default function aboutUs() {
  return (
        <div>
          <Link to="/"><Btn>Back</Btn></Link>
          <div>
            <About>About Us</About>
            <Descr>Eventix is ​​an event platform with enhanced features, affordable services, and ease of use that lets you create, search, filter, share, and attend your favorite events. From music festivals, parties, events, discos and much more.
            Our goal is to give all our users a tool that allows them to manage and market their events for free.</Descr>
          </div>
          <div>
          <About>Used Technologies</About>
          <div>
            <Techno>
              <p>React</p>
              <img className='images' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png' alt='' />
            </Techno>
            <Techno>
              <p>Redux</p>
              <img className='images' src='https://img.icons8.com/color/480/redux.png' alt='' />
            </Techno>
            <Techno>          
              <p>Sequelize</p>
              <img className='images' src='https://user-images.githubusercontent.com/77861206/107676832-57368c00-6c78-11eb-9288-cd933e208229.png' alt='' />
            </Techno>
            <Techno>
              <p>Node.js</p>
              <img className='images' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' alt='' />
            </Techno>
          </div>
          
          </div>
          <Members>
            <About>Members</About>
             <Names>
               <p>Maximiliano Meder</p>
               <p>Marcos Vila</p>
               <p>Nicolas Morales</p>
               <p>Celeste Mateo</p>
             </Names>
          </Members>
        </div>
  )
}
