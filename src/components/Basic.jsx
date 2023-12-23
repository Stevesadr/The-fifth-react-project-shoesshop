import React, { useState } from 'react'
import style from './Bssic.module.css'

const Basic = ({data}) => {
    const [num , setNum]=useState(data.count)
    const [sum , setSum]=useState(0)

    
    const up=()=>{
        setNum(num+1)
        setSum(parseInt(sum)+parseInt(data.price))

    }
    const down=()=>{
        if(num !== 0){
            setNum(num-1)
            setSum(parseInt(sum)-parseInt(data.price))
        }

    }
  return (
    <div className={`${style.b1}`}>
        <div className={`${style.b1_a1}`}>
            <div className={`${style.b1_a1_c1}`}>
                <div className={`${style.b1_a1_c1_d1}`}>
                    <img src={data.image} className={`${style.basic_img}`}/>
                </div>
                <div className={`${style.b1_a1_c1_d2}`}> 
                    <h2>{'$'+data.price}</h2>
                </div> 
                <div className={`${style.b1_a1_c1_d3}`}>
                    <button className={`${style.btns}`} onClick={up}>+</button>
                    <h2 >{num}</h2>
                    <button className={`${style.btns}`} onClick={down}>-</button>
                </div>
            </div>

            <div className={`${style.b1_a1_c2}`}>
                <div className={`${style.b1_a1_c2_e1}`}>
                    <h2>{data.name}</h2>
                </div>
                <div className={`${style.b1_a1_c2_e2}`}>
                    <h5>{data.Description}</h5>
                </div>
                <div className={`${style.b1_a1_c2_e3}`}>
                    <p>Total : </p>
                    <h3>{"$" + sum}</h3>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Basic