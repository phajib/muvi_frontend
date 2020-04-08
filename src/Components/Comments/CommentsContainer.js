import React, { Component } from 'react';

import Comments from './Comments'

import Swal from 'sweetalert2'

let HOST_URL = "http://localhost:3001/api/v1"

debugger
class CommentsContainer extends Component {
    constructor() {
        super();

        this.state = {
            muviComments: [],
            content: ""
        }
    }

    componentDidMount() {
        fetch(`${HOST_URL}/comments/movie/${this.props.movie.id}`)
            .then(resp => resp.json())
            .then(data => {
                data.message ? console.log('no comments') : this.setState({ muviComments : data.comments })
            })
    }

    commentInput = (event) => {
        this.setState({ content: event.target.value })
    }

    onSubmitComment = () => {
        console.log('trying to send new Comment', this.state.content)
        if (this.state.content === "") {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'You forgot to type a comment!',
            //     confirmButtonText: 'Type Comment'
            // })
            alert('This cannot be empty')
        } else {
            fetch(`${HOST_URL}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('jwt')}`
                },
                body: JSON.stringify({
                    movie: this.props.movie,
                    content: this.state.content,
                    movie_id: this.props.showMovie.id,
                    movie_title: this.props.showMovie.title  //maybe movie_title
                })
            })
            .then(resp => resp.json())
            .then(comment => {
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
        this.setState({ content: "" }) //clear content
    }

    deleteComment = (id) => {
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

    render() {
        return (
            <div className="container bg-dark">
                <h3 className="formLabel text-success"><strong>Comments</strong></h3>
                <div className="container">
                    COMMENTS HERE
                    {/* {this.state.muviComments === 0 ?
                        <h3 className="text-secondary">No Comments Yet</h3> //: <Comments />
                        : this.state.muviComments.map(comment => {
                            return <Comments key={comment.id} commentObj={comment} deleteComment={this.deleteComment} />
                        })
                    } */}
                </div>
                <form id="NewCommentForm" className="ui form" onSubmit={() => {this.onSubmitComment()}}>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            rows="3"
                            name="content"
                            form="NewCommentForm"
                            placeholder="Thoughts of the Movie"
                            onChange={(event) => {this.commentInput(event)}}
                            value={this.state.content} >
                        </textarea>
                    </div>
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CommentsContainer
