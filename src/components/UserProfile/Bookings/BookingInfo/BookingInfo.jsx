import React from 'react';
import { Helmet } from 'react-helmet';
import ModalImage from 'react-modal-image';
import ScrollUpButton from 'react-scroll-up-button';
import moment from 'moment';
import CustomNavbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import './BookingInfo.css';
import emptyPlaceholder from '../../../../data/img/empty-placeholder.png';

import trackLarge from '../../../../data/img/trackLarge.jpg';
import trackSmall from '../../../../data/img/trackSmall.jpg';

export class BookingInfo extends React.Component {
  convertDate = date => {
    const newDate = moment(date).format('D.MM.YYYY');
    return newDate;
  };

  convertDay = day => {
    if (day) return 'Включено';
    else return 'Отсуствует';
  };

  priceCalculator = bookingInfo => {
    let price = 0;
    let tribunePricing;

    for (let i = 0; i < bookingInfo.event.tribunes.length; ++i) {
      if (bookingInfo.event.tribunes[i].name === bookingInfo.tribune) {
        tribunePricing = {
          dayOne: bookingInfo.event.tribunes[i].dayOne.price,
          dayTwo: bookingInfo.event.tribunes[i].dayTwo.price,
          dayThree: bookingInfo.event.tribunes[i].dayThree.price,
        };
      }
    }

    if (bookingInfo.dayOne) price += tribunePricing.dayOne;
    if (bookingInfo.dayTwo) price += tribunePricing.dayTwo;
    if (bookingInfo.dayThree) price += tribunePricing.dayThree;

    return price;
  };

  componentDidMount() {
    this.props.getBookingInfo(this.props.match.params.id);
  }

  render() {
    const { bookingInfo, isFetching, error } = this.props;

    let bookingInfoComponent;

    if (isFetching) {
      bookingInfoComponent = (
        <React.Fragment>
          <div className="empty-booking-info">
            <img
              className="empty-booking-info-img"
              src={emptyPlaceholder}
              alt="News desc"
            />
            <p>Идёт загрузка...</p>
          </div>
        </React.Fragment>
      );
    } else if (error || !bookingInfo) {
      bookingInfoComponent = (
        <React.Fragment>
          <div className="empty-booking-info">
            <img
              className="empty-booking-info-img"
              src={emptyPlaceholder}
              alt="News desc"
            />
            <p>Заявки на бронирование с таким ID не существует.</p>
          </div>
        </React.Fragment>
      );
    } else {
      bookingInfoComponent = (
        <div className="booking-info">
          <div className="booking-info-title">Бронирование билета</div>
          <div className="booking-info-block track-map">
            <div className="booking-info-block-title">Карта трассы</div>
            <ModalImage
              small={trackSmall}
              large={trackLarge}
              hideZoom
              hideDownload
            />
          </div>
          <div className="booking-info-block">
            <div className="booking-info-block-title">Общая информация</div>
            <div className="booking-general-info">
              <div className="booking-info-title">
                {bookingInfo.event.title}
              </div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">Дата:</div>
              <div className="booking-right booking-inline">
                {this.convertDate(bookingInfo.event.date)}
              </div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">Страна:</div>
              <div className="booking-right booking-inline">
                {bookingInfo.event.country}
              </div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">Трибуна:</div>
              <div className="booking-right booking-inline">
                {bookingInfo.tribune}
              </div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">
                Билет на пятницу:
              </div>
              <div className="booking-right booking-inline">
                {this.convertDay(bookingInfo.dayOne)}
              </div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">
                Билет на субботу:
              </div>
              <div className="booking-right booking-inline">
                {this.convertDay(bookingInfo.dayTwo)}
              </div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">
                Билет на воскресенье:
              </div>
              <div className="booking-right booking-inline">
                {this.convertDay(bookingInfo.dayThree)}
              </div>
            </div>
            <div className="booking-general-info">
              <div className="booking-left booking-total booking-inline">
                Итого:
              </div>
              <div className="booking-right booking-total booking-inline">
                {this.priceCalculator(bookingInfo)} EUR
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Информация о бронировании - FOnebook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <CustomNavbar />
        <ScrollUpButton />
        {bookingInfoComponent}
        <Footer />
      </React.Fragment>
    );
  }
}
