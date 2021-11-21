import React from 'react'

export default function Select(props) {
    return (
        <div>
            <select className="form-select" aria-label="Default select example">
               {props.items?.map( (item, i) => (<option key={i} value={item}>{item}</option>))}
            </select>
        </div>
    )
}

