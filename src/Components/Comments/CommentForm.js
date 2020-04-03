import React from 'react';
import { connect } from 'react-redux'

import { fetchNewComment } from '../../actions/commentActions';

class CommentForm extends React.Component {
    state = {
        commentContent: ""
    }

    commentContentInput = (event) => {
        this.setState({ commentContent: event.target.value })
    }

    onSubmitComment = (event, newComment) => {
        event.preventDefault();
        fetchNewComment(newComment)
        this.setState({ commentContent: "" })
    }

    render() {
        return (
            <div className="container">
                <h3 className="formLabel text-success"><strong>Comments</strong></h3>
                <form id="NewCommentForm" className="ui form" onSubmit={this.onSubmitComment}>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            rows="3"
                            name="content"
                            form="NewCommentForm"
                            placeholder="Thoughts of the Movie"
                            onChange={this.commentContentInput}
                            value={this.state.commentContent}>
                        </textarea>
                    </div>
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchNewComment: (newComment) => {dispatch(fetchNewComment(newComment))}
})

export default connect(null, mapDispatchToProps)(CommentForm);