import logo from './logo.svg';
import './App.css';

import Mycomponent from './Mycomponent';
import BootstrapComponent from './BootstrapComponent';

function App() {
  let a=10
  var name="Hii"
  const disp = ()=>{
    alert('hii')
  }
  return (
    <div>
      {/* <h3>My First react project</h3>
      <h4>Name is --- {name}</h4>
      <h4>Age is -- {a}</h4>
      <h4>Addition is -- {25+10}</h4>
      <button onClick={disp}>Add</button> */}
      {/* <Mycomponent /> */}
      <BootstrapComponent />
    </div>
  );
}
export default App;
