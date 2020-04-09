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
            // comment: {
                movie: comment.movie,
                content: comment.content,
                movie_id: comment.movie_id,
                title: comment.title
            // }
        })
    })
    .then(resp => resp.json())
    .then(comment => {
        // console.log(comment)
        dispatch({type: 'FETCH_COMMENTS', payload: comment.data})

        if (comment.message === "Please log in") {
            Swal.fire({
                title: 'Unable to make comment!',
                text: `${comment.message}`,
                icon: 'error',
                confirmButtonText: 'Back'
            })
        } else {
            this.setState({
                muviComments: [...this.state.muviComments, comment]
            })
        }
    })
}



export const fetchMovieComments = (tmdb_id) => {
    return (dispatch) => {
        fetch(`${HOST_URL}/comments/movie/${tmdb_id}`)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            dispatch({ type: 'FETCH_MOVIE_COMMENTS', payload: response.data})
        })
        .catch(err => console.log(err));
    }
}

export const deleteComment = (id) => dispatch => {
    fetch(`http://localhost:3001/api/v1/comments/${id}`, {
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
