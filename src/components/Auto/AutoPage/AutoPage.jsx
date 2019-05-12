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
import './AutoPage.css';

export class AutoPage extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.MM.YYYY HH:mm');
    return newDate;
  };

  convertType = type => {
    switch (type) {
      case '50s':
        return '1950-е';

      case '60s':
        return '1960-е';

      case '70s':
        return '1970-е';

      case '80s':
        return '1980-е';

      case '90s':
        return '1990-е';

      case '00s':
        return '2000-е';

      case '10s':
        return '2010-е';

      default:
        return null;
    }
  };

  componentDidMount() {
    this.props.getAutoPage(this.props.match.params.url);
  }

  render() {
    const { autoPage, isFetching, error } = this.props;

    let autoComponent;

    if (isFetching) {
      autoComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !autoPage) {
      autoComponent = <Error error="404: такой новости нет!" />;
    } else {
      const autoBlock = autoPage.blocks.map(block => {
        switch (block.type) {
          case 'photo':
            return (
              <div
                key={block.content.photoDescription.length}
                className="auto-page-img"
              >
                <img
                  className="scalable-img"
                  src={block.content.photoURL}
                  alt="auto"
                />
                <div className="photo-description">
                  {block.content.photoDescription}
                </div>
              </div>
            );
          case 'text':
            return (
              <p key={block.content.length} className="auto-paragraph">
                {block.content}
              </p>
            );
          default:
            return '';
        }
      });

      autoComponent = (
        <React.Fragment>
          <Helmet>
            <title>{autoPage.title} - FOneBook</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <div className="auto-row">
            <div>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/auto">Техника</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to={`/auto/${autoPage.type}`}>
                    {this.convertType(autoPage.type)}
                  </Link>
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="auto-page">
              <div className="auto-page-title">{autoPage.title}</div>
              <div className="auto-page-date">
                {this.convertDate(autoPage.date)}
              </div>
              <div className="auto-page-author">
                Автор:{' '}
                <span data-tip data-for="article-author" className="author">
                  {autoPage.author.name}
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
                    src={autoPage.author.avatar}
                    alt="Профиль"
                  />
                  <p>{autoPage.author.name}</p>
                  <p className="more-author-date">Дата регистрации:</p>
                  <p className="more-author-date">
                    {this.convertDate(autoPage.author.registrationDate)}
                  </p>
                  <p className="more-author-date">Рейтинг:</p>
                  <span className="more-author-rating">
                    {autoPage.author.rating}
                  </span>
                </ReactTooltip>
              </div>
              <div className="auto-page-img">
                <img
                  className="scalable-img"
                  src={autoPage.pic}
                  alt="Auto desc"
                />
              </div>
              <div className="auto-page-description">
                {autoPage.description}
              </div>
              {autoBlock}
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
        <ScrollUpButton />
        {autoComponent}
        <CommentSection />
        <Footer />
      </React.Fragment>
    );
  }
}
