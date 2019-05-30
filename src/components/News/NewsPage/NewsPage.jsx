import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import CommentSection from '../../../containers/commentSectionContainer';
import './NewsPage.css';
import './OtherNews.css';

export class NewsPage extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.MM.YYYY HH:mm');
    return newDate;
  };

  componentDidMount() {
    this.props.getNewsPage(this.props.match.params.url);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.url !== this.props.match.params.url) {
      this.props.getNewsPage(nextProps.match.params.url);
    }
  }

  render() {
    const { newsPage, otherNews, isFetching, error } = this.props;

    let newsComponent;

    let otherNewsComponent;

    if (isFetching) {
      newsComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !newsPage) {
      newsComponent = <Error error="404: такой новости нет!" />;
    } else {
      const newsBlock = newsPage.blocks.map(block => {
        switch (block.type) {
          case 'photo':
            return (
              <div
                key={block.content.photoDescription.length}
                className="news-page-img"
              >
                <img
                  className="scalable-img"
                  src={block.content.photoURL}
                  alt="News"
                />
                <div className="photo-description">
                  {block.content.photoDescription}
                </div>
              </div>
            );
          case 'text':
            return (
              <p key={block.content.length} className="news-paragraph">
                {block.content}
              </p>
            );
          default:
            return '';
        }
      });

      otherNewsComponent = otherNews
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(news => {
          return (
            <div key={news.url} className="other-news-card">
              <Card className="news-card">
                <CardImg
                  className="news-img"
                  top
                  src={news.pic}
                  alt="Card image cap"
                />
                <CardBody className="news-card-body">
                  <CardTitle
                    className="other-news-title"
                    tag={Link}
                    to={`/news/${news.url}`}
                  >
                    {news.title}
                  </CardTitle>
                  <CardSubtitle className="other-news-date">
                    {this.convertDate(news.date)}
                  </CardSubtitle>
                  <CardText className="other-news-description">
                    {news.description}
                  </CardText>
                </CardBody>
                <Button
                  className="read-more"
                  tag={Link}
                  to={`/news/${news.url}`}
                >
                  Читать дальше
                </Button>
              </Card>
            </div>
          );
        })
        .slice(0, 3);

      newsComponent = (
        <React.Fragment>
          <Helmet>
            <title>{newsPage.title} - FOneBook</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <div className="row news-row">
            <div className="news-page col-md-8">
              <div className="news-page-title">{newsPage.title}</div>
              <div className="news-page-date">
                {this.convertDate(newsPage.date)}
              </div>
              <div className="news-page-author">
                Автор:{' '}
                <span data-tip data-for="article-author" className="author">
                  {newsPage.author.name}
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
                    src={newsPage.author.avatar}
                    alt="Профиль"
                  />
                  <p>{newsPage.author.name}</p>
                  <p className="more-author-date">Дата регистрации:</p>
                  <p className="more-author-date">
                    {this.convertDate(newsPage.author.registrationDate)}
                  </p>
                  <p className="more-author-date">Рейтинг:</p>
                  <span className="more-author-rating">
                    {newsPage.author.rating}
                  </span>
                </ReactTooltip>
              </div>
              <div className="news-page-img">
                <img
                  className="scalable-img"
                  src={newsPage.pic}
                  alt="News desc"
                />
              </div>
              <div className="news-page-description">
                {newsPage.description}
              </div>
              {newsBlock}
            </div>

            <div className="other-news col-md-3">
              <div className="other-title">Другие новости</div>
              {otherNewsComponent}
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
        <ScrollUpButton />
        {newsComponent}
        <CommentSection url={this.props.match.params.url} />
        <Footer />
      </React.Fragment>
    );
  }
}
