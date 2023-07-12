import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: 'apple',
    comment: 'hihi',
  },
  {
    name: 'mango',
    comment: 'helloooo',
  },
  {
    name: 'blueberry',
    comment: 'byebye',
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
