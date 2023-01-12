import styled from "styled-components";

////////////Navbar//////////////

export const NavBar = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
height: 15vh;
`

export const Menu = styled.div`
background: linear-gradient( black);
`

export const Leftbar = styled.div`
margin-left: 5vh;
height: 60px;
border-radius: 5px;
color:black;
align-items: center;
display: flex;
width: 30vw;
justify-content: space-between;
text-align: center;
`

export const Rightbar = styled.div`
align-items: center;
display: flex;
gap: 10px;
`

export const MenuFilter = styled.nav`
text-align: center;
display: flex;
position: relative;
height: 50px;
width: auto;
background-color: transparent;
justify-content: center;

`
export const Searchbar = styled.input`
    width: 20vw;
    max-with: 400px;
    background: rgba(255,255,255, 0.2);
    display: flex;
    align-items:center;
    border-radius: 60px;
    padding: 10px 20px;
`

export const H3 = styled.h3`
color: white;
padding: 30px;

&:hover {
  color:  #673c77;
}
`

///////////////GRID////////////////

export const NotFound = styled.p`
display: flex;
text-align: center;
`
export const Cube = styled.section`
display: flex
`
export const H1 = styled.h1`
text-align: center;
`

///////////////CARDS////////////////

export const EventCard = styled.div`
width: 25vw;
// height: 400px;
margin-right: 20px; 
`

export const EventImg = styled.img`
border-radius: 5px;
width: 230px; 
height: 145px
`

export const ECard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 500px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 1px solid black;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`;

export const CardTitle = styled.h4`
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    height:15vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const CardDate = styled.p`
  font-size: 16px;
  text-align: center;
  color: white;
`;

export const H5 = styled.h5`

`

export const BuyBtn = styled.button`
border-radius: 5px;
background-color: transparent;
width: 100%;
height: 50px;

&:hover {
    background-color: green
}
`

export const CardE = styled.div`
    position: relative;
    display: inline-block;
    height: 480px;
    width: 25vw;
  
  p {
    font-size: 16px;
    text-align: center;
    color: white;
  }
  

  img {
    width: 100%;
    height: 278px;
    
  }

  .shadow {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .text {
    // height: 10vh;
    position: absolute;
    align-items: center
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.8s linear;
  }

  &:hover .text {
    visibility: visible;
    opacity: 1;
  }
`

//////////////Profile/////////////////

export const PersonalContainer = styled.section`
  display : flex;
  width : 100vw;
  justify-content : space-around;

  nav {
    background-color : gray;
    opacity : 0.6;
    border-radius : 20px;
    display: flex;
    justify-content : space-around;
    flex-direction : column;
    width : 15vw;
    height : 20vh;
    align-items : center;
  }

  button {
    background-color : black;
    color : white;
    font-family: 'Poppins', sans-serif;
    width : 10vw;
    height : 4vh;
    border-radius : 10px;
    border : none
  }

  section {
    background-color : gray;
    opacity : 0.6;
    border-radius : 20px;
    width : 75vw;
    height : 70vh;
    justify-content: space-around;
  }
`

/////////////DETAIL//////////////

export const DetailContainer = styled.div`
width : 90vw;
background-color : rgb(22, 21, 21);
margin: 0 auto;
position: relative;

`

export const DetailEvent = styled.div`
margin-top: 3vh;
display : flex;
// width : 95vw;
justify-content : space-around;
`

export const BuyEvent = styled.div`
display : flex;
// width : 90vw;
justify-content : space-around;
`

/////////////Reviews///////////////

export const FormReview = styled.form`
background-color : rgb(22, 21, 21);
width : 18vw;
height : 30vh;
text-align : center

`

///////////////ABOUTUS////////////////

export const Techno = styled.div`
    position: relative;
    display: inline-block;
    height: 480px;
    width: 25vw;
    align-items: center;
  
  p {
    font-size: 25px;
    text-align: center;
    color: white;
  }
  

  img {
    width: 85%;
    height: 220px;
    
  }
`
export const Btn = styled.button`
border-radius: 5px;
background-color: grey;
width: 10%;
height: 40px;
margin: 20px;

&:hover {
    background-color: #673c77
}
`
export const About = styled.h1`
text-align: center;
top: 10px;
margin-bottom: 50px;
font-color: white;
// float: left;
// margin-left: 20px;
`
export const Descr = styled.div`
font-size: 23px;
color: white;
margin-top: 40px;
margin-bottom: 60px;
margin-left: 300px;
margin-right: 300px;
text-align: center;
font-family: arial;
`
export const Members = styled.div`
height: 115vh;
padding: 1px;
margin-top: -60px;
background: linear-gradient(180deg, rgba(0, 0, 0) 0%, rgba(156, 150, 150) 100%) 
`
export const Names = styled.div`
margin: 50px;
// margin-top: 25px;
// margin-left: 100px;
// margin-right: 1px;
padding: 1px;

 p {
      
      margin: 20px;
      padding: 35px;
      // margin-bottom: 10px;
      // margin-top: 10px;
      margin-left: 200px;
      margin-right: 200px;
      border: 3px solid #ab4a8c;
      font-size: 20px;
      // display: flex;
      // justify-content: center;
      text-align: center;
      // color: white;
      // line-height: 50px;
      // box-shadow: 6px 9px 27px -2px rgba(5, 5, 5, 1)
    }

`

export const Icon = styled.svg`
display: inline;
// place-content: center;
height: 40px;
// padding: 1px;


&:hover{
  color: black;
}

`







