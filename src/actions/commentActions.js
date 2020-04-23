import Swal from 'sweetalert2'

let HOST_URL = "http://localhost:3001/api/v1"

//-----------COMMENTS--------------------
export const fetchComments = (comment) => dispatch => {
    fetch(`${HOST_URL}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
            comment: {
                movie: comment.movie,
                content: comment.content,
                movie_id: comment.movie_id,
                title: comment.title
            }
        })
    })
    .then(resp => resp.json())
    .then(comment => {
        console.log(comment)
        if (comment.message === "Please log in") {
            Swal.fire({
                title: 'Unable to make comment!',
                text: `${comment.message}`,
                icon: 'error',
                confirmButtonText: 'Back'
            })
        } else {
            dispatch({type: 'FETCH_COMMENTS', payload: comment.data})
            this.setState({
                muviComments: [...this.state.muviComments, comment]
            })
        }
    })
}

// export const fetchUserComments = (user) => dispatch => {
//     fetch(`${HOST_URL}/comments`, {
//       headers: {
//         "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
//         "User": user,
//       }
//     })
//     .then(resp => resp.json())
//     .then(comms => {
//         this.setState({userComments: comms})
//     })
// }

export const fetchMovieComments = (tmdb_id) => {
    return (dispatch) => {
        fetch(`${HOST_URL}/comments/movie/${tmdb_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.message ? console.log('no comments') :
            dispatch({ type: 'FETCH_MOVIE_COMMENTS', payload: data.data})
        })
        .catch(err => console.log(err));
    }
}


export const deleteComment = (id) => dispatch => {
    fetch(`${HOST_URL}/comments/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('jwt')}`
        }
    })
        .then(resp => resp.json())
        .then(data => {
            let commentsUpdated = [...this.state.muviComments].filter(comment => comment.id !== data.id)
            this.setState({ muviComments: commentsUpdated })
        })
}
