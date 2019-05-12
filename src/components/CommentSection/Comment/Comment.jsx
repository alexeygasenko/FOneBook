import React from 'react';
import moment from 'moment';
import './Comment.css';
import up from '../../../data/img/btn-up.png';
import down from '../../../data/img/btn-dwn.png';

export default class Comment extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.MM.YYYY HH:mm');
    return newDate;
  };

  render() {
    const { text, user, rating, date } = this.props;

    return (
      <div className="comment">
        <div className="display-inline">
          <img className="comment-avatar" src={user.avatar} alt="sad" />
        </div>
        <div className="comment-top display-inline">
          <div className="comment-author display-inline">{user.name}</div>
          <div className="comment-date display-inline">
            {this.convertDate(date)}
          </div>
          <div className="comment-rating display-inline">
            <button className="comment-btn" id="apartmentBtnUp">
              <img src={up} id="votegUp" alt="Up" />
            </button>
            {rating}
            <button className="comment-btn" id="apartmentBtnDown">
              <img src={down} id="voteDown" alt="Down" />
            </button>
          </div>
          <div className="comment-text">{text}</div>
        </div>
      </div>
    );
  }
}
