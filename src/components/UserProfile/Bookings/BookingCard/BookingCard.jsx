import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './BookingCard.css';

export default class BookingCard extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('D.MM.YYYY');
    return newDate;
  };

  convertDay = day => {
    if (day) return 'Включено';
    else return 'Отсуствует';
  };

  render() {
    const {
      id,
      title,
      date,
      country,
      tribune,
      friday,
      saturday,
      sunday,
    } = this.props;

    return (
      <div className="col-md-3">
        <Card className="booking-card">
          <CardBody className="booking-card-body">
            <CardTitle
              className="booking-card-title"
              tag={Link}
              to={`/bookings/${id}`}
            >
              {title}
            </CardTitle>
            <CardSubtitle className="booking-card-info">
              <div className="booking-subtitle-left booking-inline">Дата:</div>
              <div className="booking-subtitle-right booking-inline">
                {this.convertDate(date)}
              </div>
            </CardSubtitle>
            <CardSubtitle className="booking-card-info">
              <div className="booking-subtitle-left booking-inline">
                Страна:
              </div>
              <div className="booking-subtitle-right booking-inline">
                {country}
              </div>
            </CardSubtitle>
            <CardSubtitle className="booking-card-info">
              <div className="booking-subtitle-left booking-inline">
                Трибуна:
              </div>
              <div className="booking-subtitle-right booking-inline">
                {tribune}
              </div>
            </CardSubtitle>
            <CardSubtitle className="booking-card-info">
              <div className="booking-subtitle-left booking-inline">
                Пятница:
              </div>
              <div className="booking-subtitle-right booking-inline">
                {this.convertDay(friday)}
              </div>
            </CardSubtitle>
            <CardSubtitle className="booking-card-info">
              <div className="booking-subtitle-left booking-inline">
                Суббота:
              </div>
              <div className="booking-subtitle-right booking-inline">
                {this.convertDay(saturday)}
              </div>
            </CardSubtitle>
            <CardSubtitle className="booking-card-info">
              <div className="booking-subtitle-left booking-inline">
                Воскресенье:
              </div>
              <div className="booking-subtitle-right booking-inline">
                {this.convertDay(sunday)}
              </div>
            </CardSubtitle>
          </CardBody>
          <Button className="open-booking" tag={Link} to={`/bookings/${id}`}>
            Подробнее
          </Button>
        </Card>
      </div>
    );
  }
}
