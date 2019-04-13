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
import './NewsCard.css';

export default class NewsCard extends React.Component {
  convertDate = date => {
    const tmpDate = new Date(Date.parse(date));
    const newDate = `${tmpDate.getDate()}.${tmpDate.getMonth()}.${tmpDate.getFullYear()} ${tmpDate.getHours()}:${tmpDate.getMinutes()}`;
    return newDate;
  };

  render() {
    const { url, title, description, date } = this.props;

    return (
      <div id={url} className="col-md-3">
        <Card className="news-card">
          <CardImg
            className="news-img"
            top
            src="https://via.placeholder.com/320x250/FFFFFF/000000/?text=FOneBook+Newsfeed"
            alt="Card image cap"
          />
          <CardBody className="news-card-body">
            <CardTitle
              className="news-title"
              tag={Link}
              to={`/news/${url}`}
              target="_blank"
            >
              {title}
            </CardTitle>
            <CardSubtitle className="news-date">
              {this.convertDate(date)}
            </CardSubtitle>
            <CardText className="news-description">{description}</CardText>
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
    );
  }
}
