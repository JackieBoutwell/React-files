import { useRef , useState} from 'react'

export default function Counter() {
    //let ref = useRef(0) // returns an object return -> {CURRENT: 0}
    let [counter, setCounter] = useState(0)
    let ref = { current: 0 }
    
  function handleClick() {
      ref.current = ref.current + 1;
      setCounter(counter + 1 )
    alert('You clicked ' + ref.current + ' times!');
    }
    
    function handleClick1() {
        setCounter(counter + 1)
    }

    console.log('rendered Counter:', counter)  
    console.log('ref value is:', ref.current)

    return (
        <>
            <br></br>
            state counter: {counter}
            ref counter: {ref.current}
            <button onClick={handleClick}>
                click me! (to updatre ref)
            </button>
            <button onClick={handleClick}>
                click me! (to updatre state)
            </button>
        </>
    );  
}