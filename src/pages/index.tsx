import { ControlledINput } from "@/views/ControlledINput"
import { useState } from "react"
import useGetUser from "@/views/useGetUser";

export default function Home(){


  const [value, setValue] = useState(["hello","world","something"]);
  const [clicked, setClicked] = useState(false);
  const [clickedValue, setClickedValue] = useState();
  const userRole = useGetUser();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>, indd) =>{
    setValue(value.map((item, ind)=>ind===indd ? item = e.target.value:item))
  }
  
  const handleKeyPress = (key:any) =>{
   if(key==='Enter'){
    setClicked(false)
   }
  }

  return (
    <div className="ml-7 w-[100vw] h-[100vh]" onClick={()=>setClicked(false)}>
     {value.map((item, ind)=>{
        return <ControlledINput 
        key={ind} initialVal={item} 
        handleChange={handleChange} 
        keyPress={handleKeyPress}
         clicked={clicked} 
         setClicked={setClicked} 
         ind={ind} 
         setClickedValue={setClickedValue}
         clickedValue={clickedValue}
          />
     })} 
      <h1>user role is: {userRole}</h1>
      </div>
  )
}