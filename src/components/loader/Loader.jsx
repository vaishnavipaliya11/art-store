import React from 'react'
import loading from "../../assets/loader.gif";
import "../../styles.css"
const Loader = () => {
  return (
    <div>
        <img src={loading} className='loader-img'/>
    </div>
  )
}

export default Loader