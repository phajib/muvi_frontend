import React from "react" 
import Comments from '../Comments/Comments'

let HOST_URL = "http://localhost:3001/api/v1"
class UserComments extends React.Component {
    // _isMounted = false;

    // constructor(){
    //     super()

    //     this.state = {
    //         userComments: []
    //     }
    // }

    // componentDidMount(){
    //     // this._isMounted = true;
    //     fetch(`${HOST_URL}/comments/user_comments`, {
    //         headers: {
    //             "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
    //         }
    //     })
    //     .then(resp => resp.json())
    //     .then(comms => {
    //         // if(this._isMounted) {
    //             this.setState({userComments: comms})
    //         // }
    //     })
    // }

    // componentWillMount() {
    //     this._isMounted = false;
    // }

    removeComment = (commId) => {
        fetch(`${HOST_URL}/comments/${commId}`, {
            method: "DELETE",
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then( comm => {
            this.updatedComments(comm)
        })
    }

    updatedComments = (comm) => {
        let filterComments = this.state.userComments.filter(userComm => {
            return userComm.id !== comm.id
        })

        this.setState({
            userComments: filterComments
        })
    }

    render(){
        // console.log(this.props.userComments)
        return (
            <div> 
                <h1 className="text-success">Your Comments</h1>
                <div className="row">
                    {this.props.userComments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <Comments commentObj={comment} removeComment={this.removeComment} />
                            </div> )
                    })}
                </div>
            </div>
        )
    }
}

export default UserComments