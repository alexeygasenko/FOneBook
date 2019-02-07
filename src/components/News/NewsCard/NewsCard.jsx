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
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97250&w=320&h=250"
            alt="Card image cap"
          />
          <CardBody className="news-card-body">
            <CardTitle className="news-title">{title}</CardTitle>
            <CardSubtitle className="news-date">
              {this.convertDate(date)}
            </CardSubtitle>
            <CardText className="news-description">{description}</CardText>
          </CardBody>
          <Button className="read-more">Читать дальше</Button>
        </Card>
      </div>
    );
  }
}
