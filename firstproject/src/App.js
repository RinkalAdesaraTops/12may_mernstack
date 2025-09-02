import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import MaterialExample from './MaterialExample';
import Material2 from './Material2';

function App() {
  let name="ABC"
  const age=30
  const disp = ()=>{
      alert("Hello....")
  }
  return (
    // fragment - 3 methods 1)<React.Fragment> 2)<Fragment> 3)<> </>
    <>
    <div>
      {/* <h3>My First react project</h3>
      <h4>Name is -- {name} </h4>
      <h4>Age is -- {age} </h4>
      <button onClick={disp}>Click</button>
      <Firstcomponent /> */}
      {/* <MaterialExample /> */}
      <Material2 />
    </div>
    <div></div>
    </>
   
  );
}

export default App;
