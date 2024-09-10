import React, { useEffect, useRef } from 'react'

export const ControlledINput = ({handleChange,initialVal,keyPress,clicked, setClicked, ind, setClickedValue,clickedValue}) => {
    const valueRef = useRef()

    useEffect(()=>{
       if(clickedValue===ind ){
        valueRef.current.focus()
       }
    },[clickedValue])
    
  return (
    <div onClick={(e)=> e.stopPropagation()}>
       {
       clickedValue===ind && clicked?
       <input key={ind} ref={valueRef} type='text' value={initialVal} onChange={(e)=>handleChange(e, ind)} onKeyDown={(e)=>keyPress(e.key)} />
       :
       <p onClick={()=>{ 
        setClickedValue(ind),
        setClicked(true)
     }}>{initialVal}</p>
       }
    </div>
  )
}
