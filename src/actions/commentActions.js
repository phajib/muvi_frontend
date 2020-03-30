// import { FETCH_COMMENTS, FETCH_MOVIE_COMMENTS, NEW_COMMENT, DELETE_COMMENT } from './types';
import axios from 'axios';
import Swal from 'sweetalert2'

let HOST_URL = "http://localhost:3001/api/v1"

//-----------COMMENTS--------------------
export const fetchComments = dispatch => {
    axios.get(`${HOST_URL}/comments`)
    .then(response =>
        dispatch({ type: 'FETCH_COMMENTS', payload: response.data })
    )
    .catch(err => console.log(err));
}

export const fetchMovieComments = tmdb_id => dispatch => {
    axios.get(`${HOST_URL}/comments/movie/${tmdb_id}`)
    .then(response => 
        dispatch({ type: 'FETCH_MOVIE_COMMENTS', payload: response.data })
    )
    .catch(err => console.log(err));
}

export const fetchNewComment = dispatch => {
    axios.post(`${HOST_URL}/comments`)
        .then(newComment => {
        if (newComment.message) {
            Swal.fire({
                icon: 'error',
                title: 'Unable to Add',
                text: `${newComment.message}`,
            })
        } else {
            console.log(newComment)
            this.props.newCommnetAdded(newComment)
            this.props.addComment(newComment)
        }
        })
        .then(response =>
            dispatch({ type: 'NEW_COMMENT', payload: response.data })
        )
        .catch(err => console.log(err));
}

export const fetchDeleteComment = id => dispatch => {
    axios.delete(`${HOST_URL}/comments/${id}`)
        .then(response =>
            dispatch({ type: 'DELETE_COMMENT', payload: response.data })
        )
        .catch(err => console.log(err));
}
