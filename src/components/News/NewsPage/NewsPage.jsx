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
    const { url, date, title, description } = newsPageJSON;
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
            <div className="news-photo">
              {/* <img
                src="https://via.placeholder.com/600x450/FFFFFF/000000/?text=FOneBook+Newsfeed"
                alt="Card cap"
              /> */}
            </div>
            {url}
            {description}
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
                    target="_blank"
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
                <Button
                  className="read-more"
                  tag={Link}
                  to={`/news/${url}`}
                  target="_blank"
                >
                  Читать дальше
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
