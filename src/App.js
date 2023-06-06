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
    <Routes>
      <Route path='/' element={ <><NavBar/>  <Products/>  </>   }   />
      <Route path='/sort' element={ <>  <NavBar/>  <SortedProducts/></>}/>
      <Route path='/buy' element={ <>  <NavBar/>  <Buy/></>}/>

    </Routes>
   
    </div>
  )
}
export default App;
