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
import moment from 'moment';
import './NewsCard.css';

export default class NewsCard extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.mm.YYYY HH:MM');
    return newDate;
  };

  render() {
    const { url, title, description, date, pic } = this.props;

    return (
      <div id={url} className="col-md-3">
        <Card className="news-card">
          <CardImg className="news-img" top src={pic} alt="Новость" />
          <CardBody className="news-card-body">
            <CardTitle className="news-title" tag={Link} to={`/news/${url}`}>
              {title}
            </CardTitle>
            <CardSubtitle className="news-date">
              {this.convertDate(date)}
            </CardSubtitle>
            <CardText className="news-description">{description}</CardText>
          </CardBody>
          <Button className="read-more" tag={Link} to={`/news/${url}`}>
            Читать дальше
          </Button>
        </Card>
      </div>
    );
  }
}
