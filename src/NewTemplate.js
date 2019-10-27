import React, { useRef , useEffect } from 'react'
import { render } from 'react-dom'

import {useGlobalState} from "./useGlobalState";

import EmailEditor from 'react-email-editor'
import {useHistory , useParams} from "react-router-dom";



function NewTemplate() {
    let { id } = useParams();
    console.log(id);
    const [state, dispatch] = useGlobalState();
    let history = useHistory();
    let refEditor = useRef(null);
    const saveDesign = () => {
      
        refEditor.saveDesign(design => {
            let date = new Date();
            let index = id ? id:date.getTime();
            let payload = {index:index ,design}
          console.log('saveDesign', design)
          dispatch({ type: "ADD_DESIGN_TO_STATE" , payload })
          history.push("/")

        })
      }
  
      const onLoad = () => {
        const json = {} /* DESIGN JSON GOES HERE */
        refEditor.loadDesign(json)
      }


      useEffect(() => {
          if(id){
        const json = state[id];
        if(json){
        refEditor.loadDesign(json)
          }}
    }, []);


     const exportHtml = () => {
        refEditor.exportHtml(data => {
          const { design, html } = data
          console.log('exportHtml', html, state)
        })
      }

    return (
     <div>
      <h1>
          {id ? 'Edit Design' : 'New Design'}
          </h1>

    
        {/* <button onClick={exportHtml}>Export HTML</button> */}
        <button onClick={saveDesign} className="button-right">Save Design</button>
   

      <EmailEditor
        ref={editor =>refEditor = editor}
        minHeight={800}
      />
    </div>
  )

 
}

export default NewTemplate;