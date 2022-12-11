import React from 'react'
import styles from './Paginado.module.css'

export default function Paginado({countriesPerPage, allCountries, paginado, handleNextClick, handlePrevClick, currentPage}) {
    const pages = []

    for (let i = 0; i <=Math.ceil(allCountries/countriesPerPage); i++) {
        pages.push(i+1)        
    }
    pages.pop()





    const pageNumbers = pages.slice(currentPage >= 3 ? currentPage-3 : currentPage-1, currentPage + 3)
    


  return (
    <nav className={styles.paginado}>
        <ul className={styles.pageNumbers}>
            <button onClick={handlePrevClick}>prev</button>
            {pageNumbers && pageNumbers.map(number => (                
                <li key={number}>
                    <button className={styles.numbers} onClick={() => paginado(number)}>{number}</button>
                </li> 
            ))}
            <button onClick={handleNextClick}>next</button>
        </ul>
    </nav>
  )
}
