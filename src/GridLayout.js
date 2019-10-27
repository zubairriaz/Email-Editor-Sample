import React, { useRef } from 'react'
import {useGlobalState} from "./useGlobalState";
import {useHistory } from "react-router-dom";





function GridLayout() {
    const [state] = useGlobalState();
    console.log(state);
    let history = useHistory();

    
    const onClickEdit = (designObject ,key) => {
        history.push(`edit/${key}`)
      }
  

    return (
     <div className= "flex-grid-container">
      
      {Object.keys(state).map(key=>{
          let designObject = state[key];
          return(
            <div className="flex-grid"> 
               <div className = "inner-content">
              <p> {designObject.text ? String(designObject.text).toUpperCase() : "Sample Design"} </p>
              <button onClick={()=>onClickEdit(designObject ,key)}>
                  Edit design
              </button>
              </div>
            </div>
          )
        
       

      })}

    </div>
  )

 
}

export default GridLayout;