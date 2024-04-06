import React from 'react';
import './child.css';
const Childcomponent = ({sendingData}) => {
// console.log(sendingData)

  return (
    <div>
      
      
      <div className='main-div'>
      <p>id: {sendingData.id}</p>
      <p>Name : {sendingData.name}</p>
      <img src={sendingData.image} alt="xyz" className='image-size' />
      </div>



    </div>
  )
}

export default Childcomponent