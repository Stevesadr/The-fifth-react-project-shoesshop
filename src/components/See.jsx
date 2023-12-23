import React from 'react'
import style from './See.module.css'

const See = ({data , callBack}) => {
  const click = () => {
    callBack(parseInt(data.id))
    
  }
  return (
    <div className={`${style.a1}`} onClick={click}>
        <img src={data.image} className={`${style.see_img}`} />
        <h3 className={`${style.a2}`}>{data.name}</h3>
    </div>
  )
}

export default See