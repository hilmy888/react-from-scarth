import React, { Fragment, useState } from 'react'

function FormPost() {
    const [title, setTitle] = useState('')

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }
    function handlePostSave(){
        const data = {
            title: title
        }
        Axios.post(`http://localhost:3000/post`, data)
    }

    return (
        <Fragment>
            <input onChange={handleTitleChange} type="text" />
            <button onClick={handlePostSave}>save</button>
        </Fragment>
    )
}

export default FormPosts