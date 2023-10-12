import React, { useContext } from 'react'
import {ThemeContext} from '../context/ThemeContext'
import {BsSun} from 'react-icons/bs'
import {BsFillMoonFill} from 'react-icons/bs'

function Theme (){
    const {theme,handleOnClick} =useContext(ThemeContext);
  return (
    <div>
        <button id='theme__icon'  onClick={handleOnClick}>
        {theme=== "dark" ? <BsSun/> :  <BsFillMoonFill/>}
        {/* {theme=== "dark" ? "light" : "dark"} */}
            </button>
        
    </div>
  )
}

export default Theme
