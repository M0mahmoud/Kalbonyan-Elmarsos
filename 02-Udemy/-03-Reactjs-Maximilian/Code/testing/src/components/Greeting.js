import React, { useState } from 'react'
import Output from './output/Output'

export default function Greeting() {
  const [text , setText ] = useState()

  const changeTextHandler = ()=>{
    setText(true)
  } 
    return (
    <div>
    <h1>Greeting Test</h1>
    {!text && <p><Output>Greeting</Output> </p>}
    {text && <p><Output>Changed</Output></p>}
    <button onClick={changeTextHandler}>Change Text </button>
    </div>
  )
}
