import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Comments extends Component {
    render() {
        let {username, content, created_at, user_id, id} = this.props.commentObj

        return (
            <div>
                <div className="container">
                    <h3 className="text-success">Your Comments</h3>
                    <Link to={`/user/${user_id}`}>{username}</Link>
                    <p className="text-success">{content}</p>
                    <p className="text-success">Created On: {created_at.split('T')[0]}</p> */}
                    {this.props.users.data.id === user_id &&
                        <button className="btn btn-light" onClick={() => this.props.deleteComment(id)}>
                            Delete Comment
                        </button>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps, null)(Comments)
