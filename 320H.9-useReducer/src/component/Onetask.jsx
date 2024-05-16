import { useEffect } from "react";
import { useState } from "react";


function Onetask(props) {
    const [checked, setChecked] = useState(props.completed)

    useEffect(() => {
        props.dispatch({ type: "complete-task", payload: { completed:checked, id:props.id} })
    }, [checked])

    return (  
        <div>
            <input onChange={() => setChecked(!checked)} type="checkbox" checked={checked} name="create" id={props.id} />
            <label for={props.id}> {props.title} </label>
        <button>Edit</button>
            <button disabled={checked}> Delete </button>
        </div>
    );
}

export default Onetask;


