import React from 'react';
import Comments from '../Comments/Comments'

const UserComments = (props) => {
    return (
      <div className="container animated zoomIn">
      <div className={props.classes}>
        <h3 className="text-success">Your Comments</h3>
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
      </div>
    )
}

export default UserComments