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
        return [action.payload, ...state]
      case "complete-task":
        let match = state.find(eachTask => eachTask.id === action.payload.id)
        let arrNoMatch = state.filter(eachTask => eachTask.id !== action.payload.id)
        match.completed = action.payload.completed
        return [match, ...arrNoMatch]
      
      // IF I'm setting the task as completed, return [...arrNoMatch, match], ELSE [match, ...arrNoMatch]
    }
    
  }
  
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>todo list</h1>
      <Addtask dispatch={dispatch} />
      <Tasklist dispatch={dispatch} state={state}  />
    </>
  )
}

export default App
