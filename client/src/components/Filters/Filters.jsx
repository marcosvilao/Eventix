import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { filter } from '../../Redux/actions';
import { Butt, ButtX, Locat, MaxMin, MenuFilter } from '../Styles/Styles';
import { Search, Sort } from '../Styles/Styles';


export default function Filters(check) {    //npm i react-datepicker


  const dispatch = useDispatch();

  const [stateDate, setStateDate] = useState(new Date());

  const [stateLocation, setStateLocation]= useState("");

  const [statePrice, setStatePrice] = useState({min:"", max:""});

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
          <Search type={"text"} placeholder={`Search...`} onChange={(e)=>submitName(e)}  value={state.name}   />
        {/* <button onChange={submitNmae}>name</button>*/}
        </div>

        <div>

          <DatePicker selected={stateDate}  onChange={(e) =>onChangeDate(e)}/>

          <Butt onClick={()=>handleDate(stateDate)}>Filtrar</Butt>
          <ButtX onClick={(e)=>handleDeleteFilterDate(e)}>x</ButtX>
        </div>
        
        <div>

          <Sort onChange={(e)=>handleAge(e)}>

            <option value={"false"}>Todas las edades</option>
            <option value={"mayores"}>Mayores de edad</option>
            <option value={"atp"}>Apto para menores</option>
          </Sort>
        </div>

        <div>
        <Locat  type={"text"} name={"location"} placeholder={`Location...`} value={stateLocation} onChange={(e)=>handleChangeLocation(e)} />
        <Butt onClick={handleSubmitLocation}>Filtrar</Butt>
        <ButtX onClick={deleteFilterLocation}>x</ButtX>
        </div>

        <div>
        <MaxMin  type={"text"} name={"min"} placeholder={`Minimal price`} value={statePrice.min} onChange={(e)=>handleChangePrice(e)} />
        <MaxMin  type={"text"} name={"max"} placeholder={`Maximum price`} value={statePrice.max} onChange={(e)=>handleChangePrice(e)} />
        <Butt onClick={handleSubmitPrice}>Filtrar</Butt>
        <ButtX onClick={deleteFilterPrice}>x</ButtX>
        </div>

        <div>
              <Sort onChange={(e)=> handleSort(e)}>
                  <option value={"notSort"}>Not Sort</option>
                  <option value={"A-Z"}>A-Z</option>
                  <option value={"Z-A"}>Z-A</option>
              </Sort>
        </div>
    </MenuFilter>
  )
}
