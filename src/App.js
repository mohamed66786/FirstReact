import React from 'react'
import Products from './Components/Products'
import NavBar from './Components/NavBar'  
import { Routes,Route} from 'react-router-dom';
// import Sort from './Components/Sort';
import SortedProducts from './Components/SortedProducts';

// import Scroll from './Components/Scroll'
 import Buy from './Components/Buy';
const App = () => {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={   <Products/>    }   />
      <Route path='/sort' element={     <SortedProducts/>}/>
      <Route path='/buy' element={     <Buy/>}/>

    </Routes>
   
    </div>
  )
}
export default App;
