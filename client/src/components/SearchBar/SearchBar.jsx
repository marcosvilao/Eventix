import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getNameCountry } from '../../actions'
import styles from './searchbar.module.css'


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (e)=>{
        setName(e.target.value)
        
    }

    const handleSubmit = (e)=>{
      if(name === ''){
        e.preventDefault()
        alert('Insert a country')
      } 
      else{
        e.preventDefault()
        dispatch(getNameCountry(name))
        setName('')
      }
    }

    


  return (
    <form className={styles.container}>
        <input onChange={handleChange} value={name} onSubmit={handleSubmit} className={styles.searchBar} type="text" placeholder='search...'/>
        <button  onClick={handleSubmit} className={styles.btn}></button>
    </form>
  )
}
