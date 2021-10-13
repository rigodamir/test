import React from 'react';

const Card = (props) => {
    return (
        <>
            <h1>Hello</h1>
            <h2>{props.name}</h2>
            <h3>{props.oib}</h3>
            <h4>{props.position}</h4>
        </>
    )
}

export default Card