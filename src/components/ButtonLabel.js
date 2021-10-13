import React from 'react';

const ButtonLabel = (props) => {
    return(
        <>
            <h1>{props.varijabla}</h1>
            <button onClick={props.funckija}>{props.dodaj}</button>
        </>
    )
}

export default ButtonLabel;