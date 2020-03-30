import React from 'react';
import { connect } from 'react-redux'

import { fetchNewComment } from '../../actions/commentActions';

class CommentForm extends React.Component {
    state = {
        commentContent: ""
    }

    commentContentChange = (e) => {
        this.setState({ commentContent: e.target.value })
    }

    onSubmitComment = (event, newComment) => {
        event.preventDefault();
        fetchNewComment(newComment)
        this.setState({ commentContent: "" })
    }

    render() {
        return (
            <div className="commentFormCon">
                <p className="formLabel">Thoughts of the Movie?</p>
                <form id="NewCommentForm" className="ui form" onSubmit={this.onSubmitComment}>
                    <div className="field">
                        <textarea
                            rows="2"
                            name="content"
                            form="NewCommentForm"
                            onChange={this.commentContentChange}
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