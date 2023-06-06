/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import  Link  from 'react-router-dom'
  import { Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>
   
    <Link to={"/"}>Home</Link>
    <Link to={"/sort"}>Sort</Link>
    <Link to={"/buy"}>Buy</Link>

   
   
 

   
      
      <input type='text' placeholder='Search' className='SearchBox'/>
    </div>
  )
}
export default NavBar;