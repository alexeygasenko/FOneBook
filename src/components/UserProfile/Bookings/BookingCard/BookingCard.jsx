import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './BookingCard.css';

export default class BookingCard extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <Card className="booking-card">
          <CardBody className="booking-card-body">
            <CardTitle className="booking-card-title" tag={Link} to="/">
              FORMULA 1 GRAN PREMIO HEINEKEN D’ITALIA 2019
            </CardTitle>
            <CardSubtitle className="booking-card-date">
              <div className="booking-subtitle-left booking-inline">Дата:</div>
              <div className="booking-subtitle-right booking-inline">
                2 сентября 2019
              </div>
            </CardSubtitle>
            <CardSubtitle className="booking-card-date">
              <div className="booking-subtitle-left booking-inline">
                Страна:
              </div>
              <div className="booking-subtitle-right booking-inline">
                Италия
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
