import { lazy, Suspense } from "react";
import "./App.css";
import CounterComponent from "./CounterComponent";
import Rtkcomponent from "./Rtkcomponent";
import CallbackExample from "./CallbackExample";
// import Contact from './Contact'
// import Firstcomponent from './Firstcomponent'
// import Home from './Home'
const Home = lazy(()=>import("./Home"));
const Contact = lazy(()=>import("./Contact"));
function App() {
  return (
    <>
    <CallbackExample />
    {/* <CounterComponent /> */}
    {/* <Rtkcomponent /> */}
      {/* <h3>Lazy Loading Example</h3>
      <Suspense fallback={<div>Plz wait. Contact is loading</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div>Home page is loading......</div>}>
        <Home />
      </Suspense> */}
      {/* <div>First component
        <h3>Hello</h3>
      </div> */}
      {/* <Firstcomponent /> */}
    </>
  );
}
export default App;
