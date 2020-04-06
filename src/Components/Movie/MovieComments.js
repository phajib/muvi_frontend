import React from 'react';
import Comments from '../Comments/Comments'

const MovieComments = (props) => {
    return (
      <div className={props.classes}>
        {props.mycomments ? <div className="myCommentsTitle">Comments List</div> : null}
        {/* {(props.movieComments.length > 0) && props.movieComments.map(comm =>  */}
        {props.movieComments.map(comm => 
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

export default MovieComments
