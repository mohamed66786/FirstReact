/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import  Link  from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>

      <a>Home</a>
      <a>Sort</a>
      <a>Buy</a>
      <input type='text' placeholder='Search' className='SearchBox'/>
    </div>
  )
}
export default NavBar;