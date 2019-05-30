import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import Error from '../Loading/Error/Error';
import Comment from './Comment/Comment';
import './CommentSection.css';

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.props.getComments(this.props.url);
  }

  onChangeHadler = e => {
    this.setState({ text: e.currentTarget.value });
  };

  sendComment = () => {
    this.props.submitComment(
      this.props.auth.user.id,
      this.props.url,
      this.state.text
    );
  };

  render() {
    const { isAuthenticated } = this.props.auth;
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
        {isAuthenticated ? (
          <Form>
            <FormGroup>
              <Input
                className="comment-submit-text"
                type="textarea"
                name="text"
                onChange={this.onChangeHadler}
              />
            </FormGroup>
            <FormGroup>
              <Button
                className="comment-submit-btn"
                onClick={this.sendComment.bind(this)}
              >
                Отправить
              </Button>
            </FormGroup>
          </Form>
        ) : null}
        {commentSection}
      </div>
    );
  }
}
