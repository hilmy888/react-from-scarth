import Axios from 'axios'
import React from 'react'


function DeleteButton(postId) {

    function handleDeletePost(){
        Axios.delete(`http://localhost:3000/posts/${postId}/`)
    }


    return (<button 
                onClick={handleDeletePost}>
                Delete {postId}
            </button>)
}

export default DeleteButton