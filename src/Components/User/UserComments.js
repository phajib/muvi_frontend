import React from "react" 
import Comments from '../Comments/Comments'

let HOST_URL = "http://localhost:3001/api/v1"
class UserComments extends React.Component {
    constructor(){
        super()

        this.state = {
            userComments: []
        }
    }

    componentDidMount(){
        fetch(`${HOST_URL}/comments`, {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then(comms => {
            this.setState({userComments: comms})
        })
    }

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
        return (
            <div className="container animated zoomIn"> 
                <h1 className="text-success">Comments</h1>
                <div className="container">
                    {this.state.userComments.map(comment => {
                        return <Comments key={comment.id} commentObj={comment} removeComment={this.removeComment} />
                    })}
                </div>
            </div>
        )
    }
}

export default UserComments