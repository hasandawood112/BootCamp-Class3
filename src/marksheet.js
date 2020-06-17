import React from 'react';

function Marksheet(props) {

    return (
        <div>
            <h1>Marksheet</h1>
            <p>English : {props.Eng}</p>
            <p>Urud : {props.Urdu}</p>
            <p>Math : {props.Math}</p>
            <p>Chem : {props.Chem}</p>
            <p>Physics : {props.Physics}</p>
        </div>
    );

}

export default Marksheet;