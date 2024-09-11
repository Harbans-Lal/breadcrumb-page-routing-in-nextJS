import React, { useEffect, useRef } from 'react'

interface IControlledInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, ind: number) => void;
  initialVal: string;
  keyPress: (key: string) => void;
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
  ind: number;
  setClickedValue: (ind: number) => void;
  clickedValue: number;
}

export const ControlledINput = ({handleChange,initialVal,keyPress,clicked, setClicked, ind, setClickedValue,clickedValue}:IControlledInputProps) => {
    const valueRef = useRef()

    useEffect(()=>{
       if(clickedValue===ind ){
        valueRef.current?.focus()
       }
    },[clickedValue, ind])
    const hadnleBlud = () =>{
      setClicked(false);
    }
  return (
    <div onClick={(e)=> e.stopPropagation()}>
       {
       clickedValue===ind && clicked?
       <input key={ind} ref={valueRef} onBlur={hadnleBlud} type='text' value={initialVal} onChange={(e)=>handleChange(e, ind)} onKeyDown={(e)=>keyPress(e.key)} />
       :
       <p onClick={()=>{ 
        setClickedValue(ind),
        setClicked(true)
     }}>{initialVal}</p>
       }
    </div>
  )
}
