import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { filter } from '../../Redux/actions';
import { MenuFilter } from '../Styles/Styles';


export default function Filters(check) {    //npm i react-datepicker


  const dispatch = useDispatch();

  const [stateDate, setStateDate] = useState(new Date());

  const [stateLocation, setStateLocation]= useState("");

  const [statePrice, setStatePrice] = useState({min:"", max:""});

  const events = useSelector( s => s.allevents); 

  // console.log("eventos front", events);<----------------- borrar
  const [state, setState] = useState({

    day:  "",
    month: "",
    year: "",
    fDate: false,
    
    fName: false,
    name: "",
    
    fPrice: false,
    price:[],
    
    
    fAge: false,
    age:"",
    
    fLocation:false,
    location:"",

    fTypeEvent: false,
    typeEvent: "",

    fSort: false,
    sort:""

  });
  //---------------------------------------------------

  useEffect(()=>{

    dispatch(filter(state));; // <--------------------

  }, [dispatch, state]);

  //------------------------------------------------------
  // console.log(check);
  //----------------------reset--------------------------
  if(!check){

    setState({
      day:  "",
      month: "",
      year: "",
      fDate: false,
      
      fName: false,
      name: "",
      
      fPrice: false,
      price:[],
      
      
      fAge: false,
      age:"",
      
      fLocation:false,
      location:"",

      fTypeEvent: false,
      typeEvent: "",

      fSort: false,
      sort:""
    })
  };
  //--------------DATE-------------------------------------
  function onChangeDate (date){

    setStateDate(date);
     
  };
  // console.log(stateDate);  

  function handleDate (date){

    let meses = [
      "Enero", "Febrero", "Marzo",
      "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre",
      "Noviembre", "Diciembre"
    ]

    let dia = date.getDate();
    if(dia < 10){
      dia = "0" + dia
    }
    let mes = date.getMonth();
    let yyy = date.getFullYear();

    setState({

      ...state,
      day:  dia.toString(),
      month: meses[mes],
      year: yyy.toString(),
      fDate: true,
    })
    // dispatch(filter(state));
  };

  function handleDeleteFilterDate (e){
  
    e.preventDefault();


    setState({
      ...state,
      day:  "",
      month: "",
      year: "",
      fDate: false,
    });

    // return  dispatch(filter(state));

    
  };
  //--------------AGE------------------------------
  function handleAge (e){

  setState({
    ...state,
    fAge: e.target.value === "false"? false : true,
    age: e.target.value,    
  })
  };
  //-----------LOCATION-------------------------
  function handleChangeLocation(e){

    setStateLocation(e.target.value);
    // console.log("text", e.target.value);
  };

  function handleSubmitLocation(){

    setState({
      ...state,
      location: stateLocation,
      fLocation: true
    })
  }

  function deleteFilterLocation(){

    setState({

      ...state,
      location: "",
      fLocation: false
    });

    setStateLocation("");
  };
  //------------PRICE----------------------------

  const prices = events.map( e => e.price?.map( el=> el.precio ));

  const setPrice = new Set(prices.flat());

  const priceArr = [...setPrice];

  const price = priceArr.sort(function (a, b){return a - b });

  price.splice( 0, 0, "Entrada Liberada");


  function handleFilterPrice (e){

    // console.log("eeeeeeeeeeee", e.target.value);

    e.preventDefault();
    
    if( e.target.value === "Todo"){

      return setState({
        ...state,
        fPrice: false,
        // price: e.target.value,
      })
    };

    setState({
      ...state,
      fPrice: true,
      price: e.target.value,
    })
  };

  //-------------------
  function handleChangePrice(e){

    setStatePrice({

      ...statePrice,
      [e.target.name]: e.target.value
    })

  };

  function handleSubmitPrice(){

    setState({
      ...state,
      fPrice: true,
      price:[statePrice.min, statePrice.max],
    })
  };

  function deleteFilterPrice(){

    setState({
      ...state,
      fPrice: false,
      price:[],
    })

    setStatePrice({min:"",max:""})
  };

  //--------------NAME-------------
  function submitName(e){

    setState({
      ...state,
      fName: e.target.value.length >0? true : false,
      name: e.target.value,
    })
    
  };

  //----------------TYPE EVENT-----------------------------

  

  const genre = events.map( e => e.typeEvent.genre);

  const setgenres = new Set(genre.flat());

  const genres = [...setgenres];

  function handleFilterTypeEvent (e){

    // console.log("eeeeeeeeeeee", e.target.value);

    e.preventDefault();
    
    if( e.target.value === "Todo"){

      return setState({
        ...state,
        fTypeEvent: false,
        // price: e.target.value,
      })
    };

    setState({
      ...state,
      fTypeEvent: true,
      typeEvent: e.target.value,
    })
  };


 //--------------SORT---------------

  const handleSort = (e)=>{

    e.preventDefault();
    // dispatch(sort(e.target.value))

    setState({
      ...state,
      fSort: e.target.value === "notSort" ? false : true,
      sort: e.target.value,
    })
  };

  // console.log("estado",state);

  // let checkBox = false;

  // function handleCheck(e){

  //   let checkbox = document.getElementById(`${e.target.value}`);
  //   // console.log("chee",checkbox.checked);
  //   checkBox = checkbox.checked;
  // };


  return (
    <MenuFilter>
      {/* <input type={"checkbox"} id={"1"} value={1} onClick={e=>handleCheck(e)} className="mostrar-menu"/> */}
      {/* <label>Search</label> */}


        <div>
          <input type={"text"} placeholder={`search...`} onChange={(e)=>submitName(e)}  value={state.name}   />
        {/* <button onChange={submitNmae}>name</button>*/}
        </div>

        <div>

          <DatePicker selected={stateDate}  onChange={(e) =>onChangeDate(e)}/>

          <button onClick={()=>handleDate(stateDate)}>Filtrar</button>
          <button onClick={(e)=>handleDeleteFilterDate(e)}>x</button>
        </div>
        
        <div>

          <select onChange={(e)=>handleAge(e)}>

            <option value={"false"}>Todas las edades</option>
            <option value={"mayores"}>Mayores de edad</option>
            <option value={"atp"}>Apto para menores</option>
          </select>
        </div>

        {/*<div>
        <input  type={"text"} name={"location"} placeholder={`Location...`} value={stateLocation} onChange={(e)=>handleChangeLocation(e)} />
        <button onClick={handleSubmitLocation}>Filtrar</button>
        <button onClick={deleteFilterLocation}>x</button>
        </div>*/}

        {/*<div>
        <input  type={"text"} name={"min"} placeholder={`min`} value={statePrice.min} onChange={(e)=>handleChangePrice(e)} />
        <input  type={"text"} name={"max"} placeholder={`max`} value={statePrice.max} onChange={(e)=>handleChangePrice(e)} />
        <button onClick={handleSubmitPrice}>Filtrar</button>
        <button onClick={deleteFilterPrice}>x</button>
        </div>*/}

        <div>
          <select onChange={(e)=>handleFilterPrice(e)}>

            <option value="Todo"  >Price</option>

                {price.map((e) =>

                  <option key={e} value={e} >{e}</option>
                )}

          </select>
        </div>

       <div>
          <select onChange={(e)=>handleFilterTypeEvent(e)}>

            <option value="Todo"  >Type-Events</option>

                {genres.map((e) =>

                  <option key={e} value={e} >{e}</option>
                )}

          </select>
        </div>

        <div>
              <select onChange={(e)=> handleSort(e)}>
                  <option value={"notSort"}>Not Sort</option>
                  <option value={"A-Z"}>A-Z</option>
                  <option value={"Z-A"}>Z-A</option> 
              </select>
        </div>
    </MenuFilter>
  )
}
