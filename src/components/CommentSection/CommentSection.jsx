import React from 'react';
import Comment from './Comment/Comment';
import './CommentSection.css';

export default class CommentSection extends React.Component {
  render() {
    /* const { comments } = this.props; */
    const comments = [
      {
        user: {
          name: 'alex59',
          avatar:
            'http://www.gravatar.com/avatar/324a730e1cec1f5c57628a990779d370?s=200&r=pg&d=mm',
        },
        text: 'testesadsadsfjsadfhsadjhfsjoadhlkadhf',
        rating: 59,
        date: Date.now(),
      },
      {
        user: {
          name: 'alex59',
          avatar:
            'http://www.gravatar.com/avatar/324a730e1cec1f5c57628a990779d370?s=200&r=pg&d=mm',
        },
        text: 'testesadsadsfjsadfhsadjhfsjoadhlkadhf',
        rating: 40,
        date: Date.now(),
      },
    ];

    let commentSection = comments
      .sort((a, b) => b.rating - a.rating)
      .map(comment => {
        return (
          <Comment
            key={comment.date + comment.rating}
            text={comment.text}
            user={comment.user}
            rating={comment.rating}
            date={comment.date}
          />
        );
      });

    return (
      <div className="comment-section">
        <div className="comment-section-title">Комментарии</div>
        {commentSection}
      </div>
    );
  }
}
