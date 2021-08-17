import React, {useState} from "react";

function Counter(props) {
    const [count, setCount] = useState(props.render(0));
    return (
        <div className="input-group my-5">
            <span className="input-group-text" onClick={() => setCount(props.render(0))}>Reset</span>
            <span className="input-group-text" onClick={() => setCount(count - 1)}>-</span>
            <input type="text" className="form-control" value={count}
                   onChange={(e) => setCount(e.target.value)}/>
            <span className="input-group-text" onClick={() => setCount(count + 1)}>+</span>
        </div>
    );
}

export default Counter;