import { useState } from 'react'
import Addtask from './component/Addtask'
import Onetask from './component/Onetask'
import Tasklist from './component/Tasklist'

import './App.css'
import { useReducer } from 'react'
import initialState from './initialState'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  function reducer(state, action) { 
    switch (action.type) {
      case "add-task":
        return[action.payload, ...state]
    }
    
  }
  
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>todo list</h1>
      <Addtask dispatch={dispatch} />
      <Tasklist dispatch={dispatch} state={state} />
    </>
  )
}

export default App
