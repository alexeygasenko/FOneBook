import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './BookingCard.css';

export default class BookingCard extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('D MM YYYY');
    return newDate;
  };

  render() {
    const { key, title, date, country } = this.props;

    return (
      <div key={key} className="col-md-3">
        <Card className="booking-card">
          <CardBody className="booking-card-body">
            <CardTitle className="booking-card-title" tag={Link} to="/">
              {title}
            </CardTitle>
            <CardSubtitle className="booking-card-date">
              <div className="booking-subtitle-left booking-inline">Дата:</div>
              <div className="booking-subtitle-right booking-inline">
                {this.convertDate(date)}
              </div>
            </CardSubtitle>
            <CardSubtitle className="booking-card-date">
              <div className="booking-subtitle-left booking-inline">
                Страна:
              </div>
              <div className="booking-subtitle-right booking-inline">
                {country}
              </div>
            </CardSubtitle>
          </CardBody>
          <Button className="open-booking" tag={Link} to="/">
            Подробнее
          </Button>
        </Card>
      </div>
    );
  }
}
