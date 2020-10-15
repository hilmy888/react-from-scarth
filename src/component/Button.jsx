import React from 'react'

function Button(props){

    const {buttonClick,color} = props

    return (
        <button
            onClick={buttonClick}
            style={{color: color}}
            type="button"
        >
           klik 
        </button>
    )
}

export default Button