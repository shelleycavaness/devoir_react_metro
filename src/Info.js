import React from 'react';

const Info =(props) => {
    return(
        <div className="container">
            <div >
            <h2>{props.station}</h2>
                <h3>{props.data[0].destination}</h3>
                <p>{props.data[0].message}</p>
                <p>{props.data[1].message}</p>
            </div>
            <div>
            <h2>{props.station}</h2>
                <h3>{props.data[4].destination}</h3>
                <p>{props.data[4].message}</p>
                <p>{props.data[5].message}</p>
            </div>
        </div>
    )


}


export default Info;
