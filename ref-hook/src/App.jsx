import { useRef } from 'react' 
import './App.css'

// import Counter from './components/counter'
// import Stopwatch from './components/Stopwatch'
import CatFriends from './components/CatFriends'

function App() {
  
  const ref = useRef(0) // return ->  { current: 0 }

  ref.current = 'test'

  console.log('rendered App')

  return (
    <>
      Hello
        <ImageCarousel />
        {/* <Catfriends /> */}
        {/* <counter /> */}
      {/* <Stopwatch /> */}
    </>
  )
}

export default App