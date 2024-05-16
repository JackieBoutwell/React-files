function Onetask(props) {
    return (  

        <div>
        <input type="checkbox" checked={props.completed} name="create" id={props.title} />
            <label for={props.title}> {props.title} </label>
        <button>Edit</button>
            <button disabled={props.completed}> Delete </button>
        </div>
    );
}

export default Onetask;