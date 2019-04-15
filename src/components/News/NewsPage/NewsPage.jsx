import React from 'react';
/* import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom'; */
import ScrollUpButton from 'react-scroll-up-button';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './NewsPage.css';
import './OtherNews.css';
import emptyPlaceholder from '../../../data/img/empty-placeholder.png';

export class NewsPage extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.mm.YYYY HH:MM');
    return newDate;
  };

  componentDidMount() {
    this.props.getNewsPage(this.props.match.params.url);
  }

  render() {
    const { newsPage, isFetching, error } = this.props;

    let newsComponent;

    if (isFetching) {
      newsComponent = <p className="empty-news">Идёт загрузка...</p>;
    } else if (error || !newsPage) {
      newsComponent = (
        <React.Fragment>
          <div className="empty-news-page">
            <img
              className="empty-news-page-img"
              src={emptyPlaceholder}
              alt="News desc"
            />
            <p>404: такой новости нет!</p>
          </div>
        </React.Fragment>
      );
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
                  src="https://via.placeholder.com/600x400/EEEEEE/000000/?text=FOneBook+Newsfeed"
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
              <div className="news-page-img">
                <img
                  className="scalable-img"
                  src="https://via.placeholder.com/600x300/EEEEEE/000000/?text=FOneBook+Newsfeed"
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
              {/* <div className="other-news-card">
                <Card className="news-card">
                  <CardImg
                    className="news-img"
                    top
                    src="https://via.placeholder.com/320x250/FFFFFF/000000/?text=FOneBook+Newsfeed"
                    alt="Card image cap"
                  />
                  <CardBody className="news-card-body">
                    <CardTitle
                      className="other-news-title"
                      tag={Link}
                      to={`/news/${url}`}
                    >
                      {title}
                    </CardTitle>
                    <CardSubtitle className="other-news-date">
                      {this.convertDate(date)}
                    </CardSubtitle>
                    <CardText className="other-news-description">
                      {description}
                    </CardText>
                  </CardBody>
                  <Button className="read-more" tag={Link} to={`/news/${url}`}>
                    Читать дальше
                  </Button>
                </Card>
              </div> */}
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
        <ScrollUpButton />
        {newsComponent}
      </React.Fragment>
    );
  }
}
