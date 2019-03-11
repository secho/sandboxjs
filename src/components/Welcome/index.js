import React, {useState, useEffect} from 'react';
import { useCounterStatus } from "../hooks/useCounterStatus";



// function Welcome(props) {

const Welcome = (props) => {

    const [count, setCount] = useState(0);
    const status = useCounterStatus(count);

    useEffect( () => {
        document.title = `You clicked ${count} times`;
    });

    function clickHandler() {
        props.clickHandler(count);
        setCount(count+1);
    }

    return (
        <div>
            <p>super {props.name} has status {status? "more than two":"less than two"}</p>
            <button onClick={() => clickHandler()}># times: {count} </button>
        </div>
    )
}

export default Welcome;