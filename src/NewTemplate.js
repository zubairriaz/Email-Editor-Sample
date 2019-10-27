import React, { useRef , useEffect , useState } from 'react'
import {useGlobalState} from "./useGlobalState";
import EmailEditor from 'react-email-editor'
import {useHistory , useParams} from "react-router-dom";



function NewTemplate() {
    let { id } = useParams();
    const [state, dispatch] = useGlobalState();
    let history = useHistory();
    let refEditor = useRef(null);
    const [value, setValue ] = useState(undefined);
    const [error, setError ] = useState("");

    

   
     
   
const saveDesign = () => {
        if(!value){
            setError(" *This is required field");
            return;
        }
      
        refEditor.saveDesign(design => {
          let date = new Date();
          let index = id ? id:date.getTime();
          let payload = {index:index ,design , text:value}
          dispatch({ type: "ADD_DESIGN_TO_STATE" , payload})
          history.push("/")

        })
      }
  



      useEffect(() => {
          if(id){
        const json = state[id];
        if(json){
        refEditor.loadDesign(json)
          }}
    }, []);


    
    
    const handleChange = (event)=>{
        
        let val = event.target.value;
       setValue(val);
       setError("");
       
    }
    const getValue=()=>{
        let returnValue = ""
       if(id && value === undefined){
           returnValue = state[id] ? state[id].text :"";
           return returnValue;
       }else{
           return value; 
       }
    }   
    return (
     <div>
     <label>Name: </label> <input className="input-right" type="text" value={getValue()} onChange={handleChange}  required/>
       {error && (<span className = "required">{error}</span>)} 
      <button onClick={saveDesign} className="button-right">Save Design</button>
   

      <EmailEditor
        ref={editor =>refEditor = editor}
        minHeight={800}
      />
    </div>
  )

 
}

export default NewTemplate;