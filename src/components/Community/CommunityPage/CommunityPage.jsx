import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import CommentSection from '../../CommentSection/CommentSection';
import './CommunityPage.css';

import up from '../../../data/img/btn-up.png';
import down from '../../../data/img/btn-dwn.png';

export class CommunityPage extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.MM.YYYY HH:mm');
    return newDate;
  };

  setRating = e => {
    if (e.currentTarget.name === 'up') {
      this.props.changeRating(this.props.match.params.url, 1);
    } else if (e.currentTarget.name === 'down') {
      this.props.changeRating(this.props.match.params.url, -1);
    }
  };

  componentDidMount() {
    this.props.getCommunityPage(this.props.match.params.url);
    this.props.getComments(this.props.match.params.url);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { communityPage, comments, isFetching, error } = this.props;

    let communityComponent;

    if (isFetching) {
      communityComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !communityPage) {
      communityComponent = <Error error="404: такого поста нет!" />;
    } else {
      const communityBlock = communityPage.blocks.map(block => {
        switch (block.type) {
          case 'photo':
            return (
              <div
                key={block.content.photoDescription.length}
                className="community-page-img"
              >
                <img
                  className="scalable-img"
                  src={block.content.photoURL}
                  alt="Community"
                />
                <div className="photo-description">
                  {block.content.photoDescription}
                </div>
              </div>
            );
          case 'text':
            return (
              <p key={block.content.length} className="community-paragraph">
                {block.content}
              </p>
            );
          default:
            return '';
        }
      });

      communityComponent = (
        <React.Fragment>
          <Helmet>
            <title>{communityPage.title} - FOneBook</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <div className="community-row">
            <div className="community-page">
              <div className="community-page-title">{communityPage.title}</div>
              <div className="community-page-date">
                {this.convertDate(communityPage.date)}
              </div>
              <div className="community-page-author">
                Автор:{' '}
                <span data-tip data-for="article-author" className="author">
                  {communityPage.author.name}{' '}
                </span>
                <ReactTooltip
                  id="article-author"
                  place="bottom"
                  type="light"
                  effect="solid"
                  className="more-author"
                >
                  <img
                    className="more-author-img"
                    src={communityPage.author.avatar}
                    alt="Профиль"
                  />
                  <p>{communityPage.author.name}</p>
                  <p className="more-author-date">Дата регистрации:</p>
                  <p className="more-author-date">
                    {this.convertDate(communityPage.author.registrationDate)}
                  </p>
                  <p className="more-author-date">Рейтинг:</p>
                  <span className="more-author-rating">
                    {communityPage.author.rating}
                  </span>
                </ReactTooltip>
              </div>
              <div className="community-page-img">
                <img
                  className="scalable-img"
                  src={communityPage.pic}
                  alt="Community desc"
                />
              </div>
              <div className="community-page-description">
                {communityPage.description}
              </div>
              {communityBlock}
              <div className="community-rating display-inline">
                Рейтинг:{' '}
                {isAuthenticated ? (
                  <button
                    className="community-btn"
                    name="up"
                    onClick={this.setRating.bind(this)}
                  >
                    <img src={up} id="votegUp" alt="Up" />
                  </button>
                ) : null}
                {communityPage.rating}
                {isAuthenticated ? (
                  <button
                    name="down"
                    className="community-btn"
                    onClick={this.setRating.bind(this)}
                  >
                    <img src={down} id="voteDown" alt="Down" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Сообщество" />
        <ScrollUpButton />
        {communityComponent}
        <CommentSection comments={comments} />
        <Footer />
      </React.Fragment>
    );
  }
}
