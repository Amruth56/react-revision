import React from 'react'

function ListRendering() {
    const names = ['Amruth', 'Amulya', 'Suresh', 'Yamuna', 'Ruby']
    return (
        <div>{
            names.map((name, index) => <h2 key={index}>{name}</h2>)
        }
        </div>
    )
}

export default ListRendering;
