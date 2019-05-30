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
import './CommunityCard.css';

export default class CommunityCard extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('DD.MM.YYYY HH:mm');
    return newDate;
  };

  render() {
    const { url, title, description, date, pic, rating } = this.props;

    return (
      <div id={url} className="col-md-3">
        <Card className="community-card">
          <CardImg className="community-img" top src={pic} alt="Новость" />
          <CardBody className="community-card-body">
            <CardTitle
              className="community-title"
              tag={Link}
              to={`/community/${url}`}
            >
              {title}
            </CardTitle>
            <CardSubtitle className="community-date">
              {this.convertDate(date)}
            </CardSubtitle>
            <CardText className="community-description">{description}</CardText>
          </CardBody>
          <Button className="read-more" tag={Link} to={`/community/${url}`}>
            Читать дальше ({rating})
          </Button>
        </Card>
      </div>
    );
  }
}
