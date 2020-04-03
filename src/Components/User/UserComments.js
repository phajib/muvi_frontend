import React from 'react';
import Comments from '../Comments/Comments'

const UserComments = (props) => {
    return (
      <div className={props.classes}>
        {props.mycomments ? <div className="myCommentsTitle">MY COMMENTS</div> : null}
        {(props.movieComments) && props.movieComments.map(comm =>
            <Comments
                key={comm.id}
                comment={comm}
                deleteComment={props.deleteComment}
                mycomments={props.mycomments}
                user={props.user}
            />
        )}
      </div>
    )
}

export default UserComments