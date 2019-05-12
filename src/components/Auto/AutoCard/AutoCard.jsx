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
import './AutoCard.css';

export default class AutoCard extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.MM.YYYY HH:mm');
    return newDate;
  };

  render() {
    const { url, title, description, date, pic } = this.props;

    return (
      <div id={url} className="col-md-4">
        <Card className="auto-card">
          <CardImg className="auto-img" top src={pic} alt="Новость" />
          <CardBody className="auto-card-body">
            <CardTitle
              className="auto-title"
              tag={Link}
              to={`/auto-article/${url}`}
            >
              {title}
            </CardTitle>
            <CardSubtitle className="auto-date">
              {this.convertDate(date)}
            </CardSubtitle>
            <CardText className="auto-description">{description}</CardText>
          </CardBody>
          <Button className="read-more" tag={Link} to={`/auto-article/${url}`}>
            Читать дальше
          </Button>
        </Card>
      </div>
    );
  }
}
