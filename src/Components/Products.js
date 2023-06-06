// import React from "react";
// import Produc from "./Date";
// const all = Produc.map((ele) => {
//   return (
//     <div key={ele.id} style={{ display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
//         <div style={{ width: "300px", height: "600px" ,boxShadow:'5px 5px 5px 5px   red', margin:'10px'}} >
//           <img
//             style={{ width: "300px", height: "300px" }}
//             src={ele.image}
//             alt="thisImageIsGood"
//           />
//           <h1 style={{color:'white'}}>Name : {ele.title}</h1>
//           <h1 style={{color:'white'}}>price : {ele.price}</h1>
//           <button style={{width:'100%',height:'40px',backgroundColor:'gray'}} >Details</button>
//         </div>
//     </div>
//   );
// });
// const Products = () => {
//   return <div>{all}</div>;
// };
// export default Products;
// import React, {  useState } from "react";
import  produc  from './Date';
// import  ReactDOM  from "react";


const AllData=produc.map((data)=>{
  
      return (
        <div key={data.id} className="all" >
          <div className="cardcontent" >
            <img src={data.image} alt="this imagee is good !!"/>
            <h1>Name : {data.title}</h1>
            <h2 className="red"> Price : {data.price}</h2>
            <h3 className="blue"> Rate : {data.rating.rate}</h3>
            <button className="btnn"  >Buy</button>
          </div>
        </div>
      )
}

)
const Products = () => {
  // const [state,setstate]=useState(0)
  //   function handleclikc(){
  //     setstate(state+1)
  //   }
  // window.localStorage.setItem('color','rgb(77, 69, 69)')
  // let a=  window.localStorage.getItem('color')

    // document.body.style.backgroundColor=a
    
  

  return (
    <div>
      {/*<div className="NavBar">
         <h1 className="cart">{state}</h1>
         <h2>Home</h2>
         <h2>Sorts</h2>
         <input type="text" placeholder="Search" className="SearchBox"/>
      </div>
      
  <button className="upbtn" onClick={handleclikc}>up</button>*/}
    {AllData}
    
    </div>
  )
}
export default Products;









