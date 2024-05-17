import Child from './Child'

function Parent(props) {

    return ( 
        <div>
            <span>Parent</span><br/>|
            <Child/>
        </div>
     );
}

export default Parent;