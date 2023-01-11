import {useForm, } from 'react-hook-form'
import DatePicker from "react-datepicker";
import { useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {useDispatch} from 'react-redux'
import { createEvent } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import { Btn, CreateEvents, DetailInfo, H1, Input, Search } from '../Styles/Styles';




export default function CreateEvent() {
  const {register, setValue, handleSubmit, reset, formState: {errors}} = useForm()
  const [selectedDate, setSelectedDate] = useState(null);
  const [price, setPrice] = useState([]);
  const dispatch = useDispatch()



  

  const handleAddItem = (e) => {
    e.preventDefault();
    setPrice([...price, { tipoDeTicket: '', precio: '' }]);
    setValue('price', [...price, { tipoDeTicket: '', precio: '' }]);
    
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setValue("date", formattedDate);
  }

  const onSubmit = (data) => {
      dispatch(createEvent(data))
      reset()
  }

  const priceform = price.map((item, index) => (
    <div key={index}>
      <div>
        <p>Ticket Type</p>
        <input
        name={`price[${index}].tipoDeTicket`}
        {...register(`price[${index}].tipoDeTicket`)}
        defaultValue={item.tipoDeTicket}
      />
      </div>
      <div>
        <label>Price</label>
      <input
        name={`price[${index}].precio`}
        {...register(`price[${index}].precio`)}
        defaultValue={item.precio}
      />
      </div>
      
    </div>
  ))
  
  return (
    <div>
      <Link to="/"><Btn>Back</Btn></Link>
    <CreateEvents>
    <div>
    <H1>Create Event</H1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>Name</p>
        <Input type="text" {...register('name', {
          // required: true,
          // maxLength: 100
        })} />
        {/* {errors.name?.type === 'required' && <p>required</p>}
        {errors.name?.type === 'maxLength' && <p>up to 100 characters</p>} */}
      </div>
      <div>
        <p>Date</p>
        <p><DatePicker 
        id="date"
        selected={selectedDate}
        onChange={handleDateChange}/></p>
      </div>
      <div>
        <p>Image</p>
        <input type="file" {...register('image')} />
      </div>
      <div>
        <p>Location</p>
        <Input type="text" {...register('location')} />
      </div>
      <div>
      <Btn type="button" onClick={handleAddItem}>Add Price type</Btn>
      {priceform}
      </div>
      <div>
        <p>Description</p>
        <Input type="text" {...register('description')} />
      </div>
      <Btn type="submit" value='Create'>Create</Btn>
    </form>
  </div>
  </CreateEvents>
    
  </div>
  )
}
