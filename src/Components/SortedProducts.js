import React from 'react'
  
import  produc  from './Date';
// import  ReactDOM  from "react";


const AllData=produc.map((data)=>{
      return (
        data.price>200&&

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



 function SortedProducts() {
  return (
    <div>
      {AllData}
    </div>
  )
}
export default SortedProducts;