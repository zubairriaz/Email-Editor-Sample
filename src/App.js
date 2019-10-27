import React , { useEffect} from 'react';
import NewTemplate from './NewTemplate';
import GridLayout from './GridLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import { Provider } from "./useGlobalState";



const initialState = {};

function reducer(state, action) {
  console.log(action , state);
 let payload = action.payload;
  switch (action.type) {
    case "ADD_DESIGN_TO_STATE":
      return {...state , [payload.index]:{...payload.design , text:payload.text} }
  default:
      return state;
  }
}



function Main(){
 let history = useHistory();
return (
<React.Fragment>
  <div className="header">
    <h1>Templates</h1>
    <button className="button-right" onClick = {()=>{history.push("/new")}}>New Template</button>
    </div>
    <GridLayout/>
    
    </React.Fragment>
);
}


export default () => (
  <div>
        <Provider reducer={reducer} initialState={initialState}>

     <Router>
     <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/new" component={NewTemplate}/>
          <Route path="/edit/:id" component={NewTemplate} />
          </Switch>    
     </Router>
     </Provider>
 </div>
);
