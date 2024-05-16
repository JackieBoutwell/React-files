import { useState } from 'react'

function Addtask(props) {
   
    const[task,setTask] = useState("")

    return (
        <>
            <input type='text' onChange={(event) => setTask(event.target.value) }   />
            
            <button onClick={() => { props.dispatch({ type: "add-task", payload: { userId: 1, id: 2, title: task, completed: false }})}}> Add Task </button> 
            
            
        </>
    );
}

export default Addtask;

