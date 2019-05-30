import React from 'react';
import Error from '../Loading/Error/Error';
import Comment from './Comment/Comment';
import './CommentSection.css';

export default class CommentSection extends React.Component {
  componentDidMount() {
    this.props.getComments(this.props.url);
  }

  render() {
    const { comments, isFetching, error } = this.props;

    let commentSection;

    if (isFetching) {
      commentSection = <Error error="Идёт загрузка..." />;
    } else if (error || !comments.length) {
      commentSection = <Error error="Комментариев пока нет." />;
    } else {
      commentSection = comments
        .sort((a, b) => b.rating - a.rating)
        .map(comment => {
          return (
            <Comment
              key={comment.date + comment.rating}
              text={comment.text}
              user={comment.author}
              rating={comment.rating}
              date={comment.date}
            />
          );
        });
    }

    return (
      <div className="comment-section">
        <div className="comment-section-title">Комментарии</div>
        {commentSection}
      </div>
    );
  }
}
