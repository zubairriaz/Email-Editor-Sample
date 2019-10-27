import React, { useRef } from 'react'
import {useGlobalState} from "./useGlobalState";
import {useHistory } from "react-router-dom";





function GridLayout() {
    const [state, dispatch] = useGlobalState();
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
              <p> New Design </p>
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