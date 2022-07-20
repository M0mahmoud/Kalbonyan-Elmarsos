import React ,{useState , useCallback} from 'react';

import Button from './components/UI/Button/Button'
import DomeOutput from './components/Demo/Demo';

import './App.css';

function App() {
  const [showP , setShowP] = useState(false)
  const [allowToggle , setAllowToggle] = useState(false)

  console.log("APP RUNING")

  //New Fun Every To Runder App So Memo Not Work 
  // To Solv This Use Callback  
  const togglePHandler = useCallback(()=>{
    if(allowToggle){
      setShowP((prevShowP)=>!showP)
    }
  }, [allowToggle , showP])

  const allowToggleHandler=()=>{
    setAllowToggle(true)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DomeOutput show={showP} />
      <Button onClick={togglePHandler}>Toggle Paragraph!</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    </div>
  );
}

export default App;


//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures 