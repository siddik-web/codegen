import React from 'react'

export default function List(props) {
    return (
        <div>
            <ul>
                {props.items?.map((item, index) => ( <li key={index}> {item} </li> ))}
            </ul>
        </div>
    )
}

