import React from "react" 
import Comments from '../Comments/Comments'

let HOST_URL = "http://localhost:3001/api/v1"
class UserComments extends React.Component {
    _isMounted = false;

    constructor(){
        super()

        this.state = {
            userComments: []
        }
    }

    componentDidMount(){
        this._isMounted = true;
        fetch(`${HOST_URL}/comments/user_comments`, {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then(comms => {
            if(this._isMounted) {
                this.setState({userComments: comms})
            }
        })
    }

    componentWillMount() {
        this._isMounted = false;
    }

    deleteComment = (id) => {
        fetch(`${HOST_URL}/comments/${id}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('jwt')}`
          }
        })
        .then(resp => resp.json())
        .then(comms => {
            let commentsUpdated = this.state.userComments.filter(userComm => userComm.id !== comms.id)
            this.setState({ userComments: commentsUpdated })
        })
    }

    render(){
        return (
            <div> 
                <h1 className="text-success">Your Comments</h1>
                <div className="row">
                    {this.props.userComments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <Comments commentObj={comment} deleteComment={this.deleteComment} />
                            </div> )

                            // <Label image >
                            //     eslint-disable-next-line
                            //     { this.props.users.data.id == user_id && <img src={profile_picture} alt='prof' />}
                            //     eslint-disable-next-line
                            //     { this.props.users.data.id == user_id && <Icon inverted color='green' size="small" name='close' onClick={() => this.props.deleteComment(id)} /> }
                            //     { username } - { movie_title } - <i>{content}  </i>
                            //     <small><Moment format="DD-MM-YYYY">{created_at}</Moment></small>
                            // </Label>
                    })}
                </div>
            </div>
        )
    }
}

export default UserComments