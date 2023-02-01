// import logo from './logo.svg';
import './App.css';

import {data} from './data';

function App() {
const res=data.apiComponentList;
const apiData=res.map((item,index)=>{
  return item.apiConfigDefinition.apiConfigReference
})
  return(
    <div >
      {apiData.length>0 && apiData.map((item,index)=>{
        return (<div className="api-node-container"  key={index}>
          <div className="node-heading">API {index+1}</div>
          <div>ServiceName: {item.serviceName}</div>
          <div>Verb: {item.verb}</div>
          <div>URL: {item.url}</div>
          </div>)
      })}
    </div>
  )
}

export default App;
