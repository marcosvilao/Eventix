import {useForm } from 'react-hook-form'
import DatePicker from "react-datepicker";
import { useState} from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import {useDispatch} from 'react-redux'
import { createEvent } from '../../Redux/actions';
import Modal from "react-modal";
import {GrClose} from 'react-icons/gr';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './createEvent.css'
import { H1 } from '../Styles/Styles';








export default function CreateEvent({isopen, close}) {
  const {register, setValue, handleSubmit, reset, formState: { errors }} = useForm()
  const [selectedDate, setSelectedDate] = useState(null);
  const [price, setPrice] = useState([]);
  const history = useHistory()
  const dispatch = useDispatch()
  const eventype = ["Rock", "Reggeaton", "Electronica", "Cumbia", "Tango", "Folklore", "Pop", "Art", "Ballet"]
  const user = useSelector(state => state.user)

  const userId = Object.keys(user).length > 0 ? user.user.id : null

  useEffect(() => {
    setValue('userId', userId)
  }, [setValue, userId])
  
  // setValue('userId', userId)

  
  const handleAddItem = (e) => {
    e.preventDefault();
    setPrice(prevPrice => [...prevPrice, { tipoDeTicket: '', precio: '' }]);
    setValue('price', prevPrice => [...prevPrice, { tipoDeTicket: '', precio: '' }]);
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
    console.log(data)
      dispatch(createEvent(data))
      reset()
      return history.push("/")
  }

  const priceform = price.map((item, index) => (
    <div key={index}>
      <div>
        <label>Ticket Type</label>
        <input
        placeholder='Entrada General..'
        name={`price[${index}].tipoDeTicket`}
        {...register(`price[${index}].tipoDeTicket`)}
        defaultValue={item.tipoDeTicket}
      />
      </div>
      <div>
        <label>Price</label>
      <input
      placeholder='price'
        name={`price[${index}].precio`}
        {...register(`price[${index}].precio`)}
        defaultValue={item.precio}
      />
      </div>
      
    </div>
  ))
  
  return (
    
      <Modal
      style={{
        content: {
          "background-color" : 'rgb(22, 21, 21)',
          width : "30vw",
          margin : "0 auto"
        }
      }}
        isOpen={isopen}
        onRequestClose={close}
        contentLabel="Example Modal"
      >
        <GrClose onClick={close} style={{'background-color' : 'white'}}/>
        <H1>Create Event</H1>

        <p>(if your event is +18, please include it in the name with parentesis )</p>
    <form className='formcontainer' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input placeholder='name of the event' type="text" {...register('name', {
          required: true,
        })} />
        {errors.name && <span>This field is required</span>}

      </div>
      <div>
        <label>Date</label>
        <DatePicker 
        name="date"
        {...register('date', { required: true })}
        placeholderText='pick a date'
        selected={selectedDate}
        onChange={handleDateChange}/>
        {errors.date && <span>This field is required</span>}
      </div>
      <div>
        <label>Image</label>
        <input placeholder='URL of the image' type="text" {...register('image', { required: true })} />
        {errors.image && <span>This field is required</span>}
      </div>
      <div>
        <label>Location</label>
        <input placeholder='address' type="text" {...register('location', { required: true })} />
        {errors.location && <span>This field is required</span>}
      </div>
      <div>
        <label>Genre</label>
        <select name="" id="">
          <option value="">select</option>
          {eventype.map((type, i) => {
            return <option key={i} value={type} {...register('typeEvent.genre', {required: true})}>{type}</option>
          })}
        </select>
        {errors.typeEvent && <span>This field is required</span>}
      </div>
      <div>
      <button onClick={handleAddItem}>Add Price type</button>
      {priceform}
      </div>
      <div>
        <label>Description</label>
        <input type="text" {...register('description')} />
      </div>
      <input type="submit" value='Create'/>
    </form>
      </Modal>
    

  )
}
