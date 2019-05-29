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

export class CommunityPage extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.MM.YYYY HH:mm');
    return newDate;
  };

  componentDidMount() {
    this.props.getCommunityPage(this.props.match.params.url);
  }

  render() {
    const { communityPage, isFetching, error } = this.props;

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
                  {communityPage.author.name}
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
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
        <ScrollUpButton />
        {communityComponent}
        <CommentSection />
        <Footer />
      </React.Fragment>
    );
  }
}
