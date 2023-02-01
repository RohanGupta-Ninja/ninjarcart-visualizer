// import logo from './logo.svg';
import './App.css';

import datas from './data.json';

function App() {
  return(
    <div>
      {
        datas.map(data => {
          return(
            <div className = "box">
              {data.apiComponentList}
              <h1>Rohan</h1>
            </div>

          )
        })
      }
    </div>
  )
}

export default App;
