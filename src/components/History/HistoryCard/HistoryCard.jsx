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
import './HistoryCard.css';

export default class HistoryCard extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.MM.YYYY HH:mm');
    return newDate;
  };

  render() {
    const { url, title, description, date, pic } = this.props;

    return (
      <div id={url} className="col-md-3">
        <Card className="history-card">
          <CardImg className="history-img" top src={pic} alt="Новость" />
          <CardBody className="history-card-body">
            <CardTitle
              className="history-title"
              tag={Link}
              to={`/history-article/${url}`}
            >
              {title}
            </CardTitle>
            <CardSubtitle className="history-date">
              {this.convertDate(date)}
            </CardSubtitle>
            <CardText className="history-description">{description}</CardText>
          </CardBody>
          <Button
            className="read-more"
            tag={Link}
            to={`/history-article/${url}`}
          >
            Читать дальше
          </Button>
        </Card>
      </div>
    );
  }
}
