import initialState from '../initialState'
import Onetask from './Onetask';

function Tasklist(props) {

    return (
        <div>
            {
                props.state.map((eachTask, index) => (
                    <Onetask key={index} title={eachTask.title} completed={eachTask.completed} id={eachTask.id} dispatch={props.dispatch} />
                ))
            }
        </div>

    );
}

export default Tasklist;