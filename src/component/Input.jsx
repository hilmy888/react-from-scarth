import React from 'react'

function Input(props) {

    const {handleChange} = props
    // function handleChange(event) {
    //     console.log(event.target.value)
    // }

    return (
        <input
            type="text"
            onChange={handleChange}
        />
    )
}


export default Input