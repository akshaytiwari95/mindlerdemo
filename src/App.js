import Header from './components/Header';
import Element from './components/Element';
import Data from './Data';
import { React, useState } from 'react';
import './App.css';
function App() {
  const [state, setState] = useState(0); // state used to initialize the cart

  //console.log(state);
  function add() {
    setState(prevstate => prevstate + 1);
  }
  function subtract() {
    setState(prevstate => prevstate - 1);
  }

  return (
    <>
      <Header />
      <div className="flex-container">
        <div className="flex-child services">
          {Data.map(item => (
            <Element data={item} add={add} subtract={subtract} />
          ))}
        </div>
        <div className="flex-child popup">
          <h1>Added Services :</h1>
          <h2>{state}</h2>
        </div>
      </div>
    </>
  );
}
export default App;
