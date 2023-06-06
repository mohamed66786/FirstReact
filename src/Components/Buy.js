import React from 'react'
import  produc  from './Date';


const AllData=produc.map((data)=>{
    return (
      data.price>600&&

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

 function Buy() {
  return (
    <div>
    {AllData}
    </div>
  )
}
export default Buy;