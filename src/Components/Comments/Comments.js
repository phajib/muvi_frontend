import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import { Icon, Label } from 'semantic-ui-react'

class Comments extends Component {
    render() {
        let { movie_title, content, created_at, user_id, id, username } = this.props.commentObj

        return (
            <div className="animated flipInX">
                <Label image className='bg-dark text-white'>
                    {username} - {movie_title} - <i>{content}  </i>
                    <small><Moment format="DD-MM-YYYY">{created_at}</Moment></small>
                    {this.props.users.length === 0 ?
                        this.props.users.id === user_id && console.log('You Must Log In')
                    :
                        //  eslint-disable-next-line
                        this.props.users.data.id == user_id && <Icon inverted color='green' size="small" name='close' onClick={() => this.props.deleteComment(id)} />
                    }
                </Label>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, null)(Comments)
