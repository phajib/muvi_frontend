import React, { Component } from 'react';
import { Grid, Segment, Form, TextArea } from 'semantic-ui-react'
import Swal from 'sweetalert2'

import Comments from './Comments'
import '../../App.css'


let HOST_URL = "http://localhost:3001/api/v1"

class CommentsContainer extends Component {
  _isMounted = false;

  constructor() {
    super();

    this.state = {
      muviComments: [],
      content: ""
    }
  }

  componentDidMount() {
    this._isMounted = true;

    fetch(`${HOST_URL}/comments/movie/${this.props.movieObj.id}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if(this._isMounted) {
          data.message ? console.log('no comments') : this.setState({ muviComments: data.comments })
        }
      })
  }

  componentWillMount(){
    this._isMounted = false;
  }

  onChange = (event) => {
    this.setState({ content: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('Trying to post new Comment', this.state.content)
    if (this.state.content === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'You forgot to type a comment!',
        confirmButtonText: 'Type Comment'
      })
    } else {
      fetch(`${HOST_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
          movie: this.props.movieObj,
          content: event.target.content.value,
        })
      })
        .then(resp => resp.json())
        .then(comment => {
          if (comment.message === 'Please log in') {
            Swal.fire({
              icon: 'error',
              title: 'Unable to make comment!',
              text: `${comment.message}`,
              confirmButtonText: 'Back'
            })
          } else {
            this.setState({
              muviComments: [...this.state.muviComments, comment]
            })
            console.log(this.state.muviComments)
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
    console.log(this.state.muviComments)
    return (
      <>
        <Grid container columns={2} divided relaxed stackable className="bg-dark">
          <Grid.Column>
            <Segment className="bg-dark">
              <Form onSubmit={(event) => { this.onSubmit(event) }}>
                <Form.Field control={TextArea} name="content" placeholder='Thoughts of the Movie' onChange={(event) => {this.onChange(event)}} value={this.state.content} />
                <Form.Button type='submit' inverted color='green'>Submit</Form.Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="bg-dark">
              <h3 className="text-success"><b>Comments</b></h3>
              {this.state.muviComments.length === 0 ?
                <h4 className="text-secondary">Be the first to comment about this movie!</h4> : (
                  this.state.muviComments.map(comment => {
                    return (
                    <React.Fragment key={comment.id}>
                      <Comments id={comment.id} commentObj={comment} deleteComment={this.deleteComment} users={this.props.users} />
                    </React.Fragment> )
                })
              )}
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default CommentsContainer
