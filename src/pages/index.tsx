import { ControlledINput } from "@/views/ControlledINput"
import { useState } from "react"
import useGetUser from "@/views/useGetUser";
import BreadCrumbb1 from "@/views/BreadCrumb1";
export default function Home(){


  const [value, setValue] = useState(["hello","world","something"]);
  const [clicked, setClicked] = useState(false);
  const [clickedValue, setClickedValue] = useState();
  const userRole = useGetUser();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>, indd :number) =>{
    setValue(value.map((item, ind)=>ind===indd ? item = e.target.value:item))
  }
  
  const handleKeyPress = (key:string) =>{
   if(key==='Enter'){
    setClicked(false)
   }
  }

  return (
    <div className="ml-7 w-[100vw] h-[100vh]" >
      {/* <BreadCrumbb1 /> */}
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