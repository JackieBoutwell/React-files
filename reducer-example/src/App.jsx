import { useReducer, useState } from 'react'
import './App.css'

// TYPES
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'
const SET_NUMBER = 'set_number'

function App() {

  function reducer(state, action) {
    //...
    // if (action === 'inc') {
    //   return state + 1
    // } else if (action === 'dec') {
    //   return state - 1
    // } else if (action === 'res') {
    //   return 0
    // } else if (action === 'setNumber') {
    
    // action is an object with type and then payload
    //action -> {type: .../, payload:...}
    
      switch (action.type) {
    case "increment": {
      return state + action.payload;
    }
    case "decrement": {
      return state - action.payload;
        }
        case "reset": {
          return 0;
        }
       case SET_NUMBER:
        return action.payload
        default: {
          return state
        }      
    }


    console.log('state:', state) //0
    console.log('action:', action) // increment, decremnet, reset
    return state
  }
    //dispatch -> reducer gets info from dispatch -> and returns a new state
    
  const [count, dispatch] = useReducer(reducer, 0) //return -> [stateVariable, function]
    const [num, setNum] = useState(1)

  return (
    <>
      Hello
      <br />
      <h1> Counter: {count} </h1>
      <br />
      
           <br/>
      <button onClick={() => dispatch({ type: 'increment'})}>Increment</button>
      <br/>
      <button onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
      <br/>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <br />
     <button onClick={() => dispatch({ type: SET_NUMBER, payload: num })}>Set Number</button>
      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <br />
      <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
      {/* <button onClick={() => dispatch('inc')}>Increment</button>
      <br/>
      <button onClick={() => dispatch('dec')}>Decrement</button>
      <br/>
      <button onClick={() => dispatch('res')}>Reset</button> */}
    </>
  )
}

export default App
