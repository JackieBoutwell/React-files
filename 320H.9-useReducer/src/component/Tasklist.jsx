import initialState from '../initialState'
import Onetask from './Onetask';

function Tasklist(props) {

    return (
        <div>
            {
                props.state.map((eachTask, index) => (
                    <Onetask key={index} title={eachTask.title} completed={eachTask.completed} />
                ))
            }
        </div>

    );
}

export default Tasklist;