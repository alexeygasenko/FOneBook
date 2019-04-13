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
import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './NewsPage.css';
import './OtherNews.css';

import newsPageJSON from '../../../data/newsPage.json';

export default class News extends React.Component {
  convertDate = date => {
    const tmpDate = new Date(Date.parse(date));
    const newDate = `${tmpDate.getDate()}.${tmpDate.getMonth()}.${tmpDate.getFullYear()} ${tmpDate.getHours()}:${tmpDate.getMinutes()}`;
    return newDate;
  };

  render() {
    const { url, date, title, description, blocks } = newsPageJSON;

    const newsBlock = blocks.map(block => {
      switch (block.type) {
        case 'photo':
          return (
            <div className="news-page-img">
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
          return <p className="news-paragraph">{block.content}</p>;
        default:
          return '';
      }
    });

    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
        <Helmet>
          <title>{title} - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <ScrollUpButton />
        <div className="row news-row">
          <div className="news-page col-md-8">
            <div className="news-title">{title}</div>
            <div className="news-date">{this.convertDate(date)}</div>
            <div className="news-page-img">
              <img
                className="scalable-img"
                src="https://via.placeholder.com/600x300/EEEEEE/000000/?text=FOneBook+Newsfeed"
                alt="News desc"
              />
            </div>
            <div className="news-description">{description}</div>
            {newsBlock}
          </div>

          <div className="other-news col-md-3">
            <div className="other-title">Другие новости</div>
            <div className="other-news-card">
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
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
