import React from 'react';
const Input = (props) =>{
    return(
        <div className="input-group input-group-sm mb-3">
            <input onChange={props.input} type="text" placeholder="enter a station" />
            <button onClick={props.btnF} className="btn bnt-primary">summit</button>

        </div>
    )

}

export default Input