import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <>
        <nav className='overflow-hidden relative pt-8'>
            <img src='https://i.postimg.cc/rsWXHHn7/sam-1.png' className='scale-75'></img>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="float-right mr-16 -mt-[3.5rem]" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </nav>
    </>
  )
}

export default Navbar
