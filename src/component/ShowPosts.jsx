import Axios from 'axios'
import React, { useEffect, Fragment, useState } from 'react'


function App() {
    const [id, setId] = useState(1)
    const [name, setName] = useState('')

    function handleServerReturn(response) {
        const { data, status } = response
        setName(data.name)

    }
    function changeId(e) {
        setId(e.target.value)

    }

    useEffect(() => {
        Axios
        .get(`http://localhost:3000/posts`)
        .then(handleServerReturn)
    }, [id])

    return (
        <Fragment>
            <div>{name}</div>
            <input type='text' onChange={changeId} />
        </Fragment>
    )
}

export default App