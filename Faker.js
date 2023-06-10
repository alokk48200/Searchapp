
import {faker} from '@faker-js/faker'


import React from 'react';
const Card=()=>{  
    //const isHovered=true;
    const [isHovered, setIsHovered]=React.useState(false);
    
     const src1=faker.image.urlLoremFlickr({ category: 'fashion' });
     const b=()=>{
        setIsHovered(true);
     }
     const c=()=>{
        setIsHovered(false);
     }
    
     
    return (
        <div >
       
        <div  className='card' key={new Date().getTime}  >
        
               <img id="img" src= {src1} onMouseEnter={b} onMouseLeave={c} />
             
             {console.log(isHovered)}
             
                {isHovered && <button id="cart2">View Product</button>}
            <h2>{faker.commerce.productName()} </h2>
            <h> Price:${faker.commerce.price()}</h>
            <h> Rating:{ Math.floor(Math.random() * 5) + 1}</h>
           
          </div>
         
       
          
        </div>
    )
}
export default Card;