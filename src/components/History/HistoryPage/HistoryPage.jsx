import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import CommentSection from '../../CommentSection/CommentSection';
import './HistoryPage.css';

export class HistoryPage extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.MM.YYYY HH:mm');
    return newDate;
  };

  convertType = type => {
    switch (type) {
      case 'drivers':
        return 'Гонщики';

      case 'grandPrix':
        return 'Гран-при';

      case 'tracks':
        return 'Трассы';

      case 'auto':
        return 'Авто';

      default:
        return null;
    }
  };

  componentDidMount() {
    this.props.getHistoryPage(this.props.match.params.url);
  }

  render() {
    const { historyPage, isFetching, error } = this.props;

    let historyComponent;

    if (isFetching) {
      historyComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !historyPage) {
      historyComponent = <Error error="404: такой новости нет!" />;
    } else {
      const historyBlock = historyPage.blocks.map(block => {
        switch (block.type) {
          case 'photo':
            return (
              <div
                key={block.content.photoDescription.length}
                className="history-page-img"
              >
                <img
                  className="scalable-img"
                  src={block.content.photoURL}
                  alt="history"
                />
                <div className="photo-description">
                  {block.content.photoDescription}
                </div>
              </div>
            );
          case 'text':
            return (
              <p key={block.content.length} className="history-paragraph">
                {block.content}
              </p>
            );
          default:
            return '';
        }
      });

      historyComponent = (
        <React.Fragment>
          <Helmet>
            <title>{historyPage.title} - FOneBook</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <div className="history-row">
            <div>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/history">История</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to={`/history/${historyPage.type}`}>
                    {this.convertType(historyPage.type)}
                  </Link>
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="history-page">
              <div className="history-page-title">{historyPage.title}</div>
              <div className="history-page-date">
                {this.convertDate(historyPage.date)}
              </div>
              <div className="history-page-author">
                Автор:{' '}
                <span data-tip data-for="article-author" className="author">
                  {historyPage.author.name}
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
                    src={historyPage.author.avatar}
                    alt="Профиль"
                  />
                  <p>{historyPage.author.name}</p>
                  <p className="more-author-date">Дата регистрации:</p>
                  <p className="more-author-date">
                    {this.convertDate(historyPage.author.registrationDate)}
                  </p>
                  <p className="more-author-date">Рейтинг:</p>
                  <span className="more-author-rating">
                    {historyPage.author.rating}
                  </span>
                </ReactTooltip>
              </div>
              <div className="history-page-img">
                <img
                  className="scalable-img"
                  src={historyPage.pic}
                  alt="History desc"
                />
              </div>
              <div className="history-page-description">
                {historyPage.description}
              </div>
              {historyBlock}
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
        <ScrollUpButton />
        {historyComponent}
        <CommentSection />
        <Footer />
      </React.Fragment>
    );
  }
}
