import React, { useEffect, useState } from 'react'
import data from './data'
import {BsSun} from 'react-icons/bs'
import {BsMoonFill} from 'react-icons/bs'
import './navbar.css'
import Theme from '../../components/Theme'
import { ThemeContext,themes } from '../../context/ThemeContext'

function Navbar() {

const[theme,setTheme]=useState(themes.light);
  
function handleOnClick()
{
  theme === themes.light? setTheme(themes.dark):setTheme(themes.light);
}

const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");

        body.classList.remove("head-light");
        body.classList.add("head-dark");

        body.classList.remove("form-light");
        body.classList.add("form-dark");

        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");

        body.classList.remove("head-dark");
        body.classList.add("head-light");

        body.classList.remove("form-dark");
        body.classList.add("form-light");
       
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");

        body.classList.remove("head-light");
        body.classList.add("head-dark");

        body.classList.remove("form-light");
        body.classList.add("form-dark");
        
    }
  }, [theme]);

  return (
    <>
   <ThemeContext.Provider value={{handleOnClick,theme}}>
    <nav>
      <div className='container nav__container'>
        <ul className='nav__menu'>
          {
            data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }

        </ul>
        {/* <button id='theme__icon'><IoIosColorPalette/></button> */}
        <Theme theme={theme}/>
      
      </div>
    </nav> 
    </ThemeContext.Provider>
    </>
     )
}

export default Navbar