import React from 'react'
import './aboutUs.css'
import { Link } from 'react-router-dom'
import { About, Btn, Descr, Members, Names, Techno, Icon } from '../Styles/Styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function aboutUs() {
  return (
        <div>
        <Link to="/"><Btn>Back</Btn></Link>
          <div>
            <About>About Us</About>
            <Descr>Eventix is ​​an event platform with enhanced features, affordable services, and ease of use that lets cheaper services, and ease of use that lets. Our goal is to give all our users a tool that allows them to manage and market their events for free.</Descr>
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
              <img className='images' src='https://hyunseob.github.io/images/sequelizejs.png' alt='' />
            </Techno>
            <Techno>
              <p>Node.js</p>
              <img className='images' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' alt='' />
            </Techno>
          </div>
          
          </div>
          <Members>
          <div>
            <About>Members</About>
            <Names>
            <p>Maximiliano Meder <Icon>
              <a href='https://github.com/MaxMdr2022'><GitHubIcon /></a>
              </Icon>
              <Icon>
                <a href='/aboutUs'><LinkedInIcon/></a>
                </Icon> </p>
            <p>Marcos Vila <Icon>
            <a href='https://github.com/Markanight'><GitHubIcon/></a>
              </Icon>
              <Icon>
              <a href='/aboutUs'><LinkedInIcon/></a>
                </Icon> </p>
            <p>Nicolas Morales <Icon>
            <a href='https://github.com/Machit0x'><GitHubIcon/></a>
              </Icon>
              <Icon>
              <a href='/aboutUs'><LinkedInIcon/></a>
                </Icon> </p>
            <p>Celeste Mateo <Icon>
            <a href='https://github.com/CelesteMateo'><GitHubIcon/></a>
              </Icon>
              <Icon>
              <a href='https://www.linkedin.com/in/celeste-mateo-266902252/'><LinkedInIcon/></a>
                </Icon> </p>
            </Names>
          </div>
          </Members>
        </div> 
  )
}
