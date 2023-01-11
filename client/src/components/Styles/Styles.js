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
margin-bottom: 50px;
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
export const Pages = styled.h1`
font-size: 20px;
margin-left: 15px;

&:hover {
  color: #673c77;
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
export const Title = styled.h1`
font-size: 20px;
margin-left: 15px;
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

  .text {
    height: 20vh;
    position: absolute;
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

///////////////ABOUTUS////////////////

export const Techno = styled.div`
    position: relative;
    display: inline-block;
    height: 480px;
    width: 25vw;
  
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
height: 70vh;
padding: 20px;
background-color: rgba(68, 63, 63, 0.603);
`
export const Names = styled.div`
margin: 50px;
margin-top: 25px;
margin-left: 5px;
margin-right: 100px;
padding: 10px;

 p {
      display: inline-block;
      margin: 1px;
      padding: 85px;
      // margin-bottom: 10px;
      // margin-top: 10px;
      // margin-left: 10px;
      // margin-right: 10px;
      border: 3px solid #ab4a8c;
      // font-size: 16px;
      // text-align: top;
      // color: white;
      // line-height: 50px;
      // box-shadow: 6px 9px 27px -2px rgba(5, 5, 5, 1)
    }
`

///////////////FILTERS////////////////

export const Search = styled.input`
width: 100%;
height: 30px;
border-radius: 5px;
background-color: white;
border-color: black;
margin-relative: 20px;
`
export const Locat = styled.input`
width: 80%;
height: 30px;
border-radius: 5px;
background-color: white;
border-color: black;
margin-relative: 20px;
`

export const MaxMin = styled.input`
width: 35%;
height: 30px;
border-radius: 5px;
background-color: white;
border-color: black;
margin-relative: 20px;
`


export const Butt = styled.button`
border-radius: 10px;
background-color: grey;
width: 30%;
height: 40px;
margin-top: 6px;

&:hover {
    background-color: #673c77
}
`

export const ButtX = styled.button`
border-radius: 10px;
background-color: grey;
width: 15%;
height: 40px;
margin-top: 6px;

&:hover {
    background-color: #673c77
}
`

export const Sort = styled.select`
border-radius: 10px;
background-color: grey;
width: 100%;
height: 40px;

&:hover {
  background-color: #673c77
}
`

///////////////DETAIL////////////////

export const DetailImg = styled.img`
border-radius: 10px;
float: left;
margin: 80px;
margin-top: 50px;
box-shadow: 11px 13px 37px 3px rgba(5, 5, 5, 1)
`

export const Suma = styled.button`
border-radius: 10px;
background-color: grey;
width: 4%;
height: 40px;
margin-top: 6px;

&:hover {
    background-color: #673c77
}
`

export const BuyDetail = styled.button`
border-radius: 10px;
background-color: grey;
width: 11%;
height: 40px;
margin-top: 6px;

&:hover {
    background-color: #673c77
}
`

export const DetailInfo = styled.div`
margin: 40px;
border: 3px solid #ab4a8c;
margin-right: 200px;
margin-left: 465px;
margin-bottom: 50px;
background-color: rgba(0, 0, 0, 0.521);

p{
  font-size: 18px;
  font-family: Arial;
}
`

export const ModalInfo = styled.text`
text-align: center;
color: black;
p{
  font-size: 18px;
  font-family: Arial;
}
`

///////////////CREATE EVENTS////////////////

export const CreateEvents = styled.div`
margin: 40px;
border: 3px solid #ab4a8c;
margin-right: 100px;
margin-left: 100px;
margin-bottom: 50px;
background-color: rgba(0, 0, 0, 0.521);


p{
  font-size: 18px;
  font-family: Arial;
  text-align: center;
  margin: 20px;
  display: inline-block;
}
`

export const Input = styled.input`
width: 25%;
height: 30px;
border-radius: 5px;
background-color: white;
border-color: black;
`
