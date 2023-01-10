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







