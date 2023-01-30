import React, { useState } from 'react'

export default function Sqr() {
    const [ num, setNum ] = useState(0);


    return (
        <>
            <h1>Find Square</h1>
            <input type="text" onChange={event => setNum(event.target.value)} />
            <h1>Square of {num} is {num * num}</h1>
        </>
    )
}
