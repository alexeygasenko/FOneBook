import React from 'react';
import moment from 'moment';
import '../BookingInfo.css';
import './BookingInfoPrint.css';

export default class BookingInfoPrint extends React.Component {
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

  render() {
    const { bookingInfo } = this.props;

    return (
      <div className="print-info-block">
        <div className="booking-info-block-title">Заявка {bookingInfo._id}</div>
        <div>
          <div className="booking-info-title">{bookingInfo.event.title}</div>
        </div>

        <div className="print-general-info">
          <div className="booking-left booking-inline">Дата:</div>
          <div className="booking-right booking-inline">
            {this.convertDate(bookingInfo.event.date)}
          </div>
        </div>

        <div className="print-general-info">
          <div className="booking-left booking-inline">Страна:</div>
          <div className="booking-right booking-inline">
            {bookingInfo.event.country}
          </div>
        </div>

        <div className="print-general-info">
          <div className="booking-left booking-inline">Трибуна:</div>
          <div className="booking-right booking-inline">
            {bookingInfo.tribune}
          </div>
        </div>

        <div className="print-general-info">
          <div className="booking-left booking-inline">
            Практика 1 & 2 (Пт):
          </div>
          <div className="booking-right booking-inline">
            ({bookingInfo.event.dayOne.starts} - {bookingInfo.event.dayOne.ends}
            ) {this.convertDay(bookingInfo.dayOne)}
          </div>
        </div>

        <div className="print-general-info">
          <div className="booking-left booking-inline">Квалификация (Сб):</div>
          <div className="booking-right booking-inline">
            ({bookingInfo.event.dayTwo.starts} - {bookingInfo.event.dayTwo.ends}
            ) {this.convertDay(bookingInfo.dayTwo)}
          </div>
        </div>

        <div className="print-general-info">
          <div className="booking-left booking-inline">Гонка (Вс):</div>
          <div className="booking-right booking-inline">
            ({bookingInfo.event.dayThree.starts}){' '}
            {this.convertDay(bookingInfo.dayThree)}
          </div>
        </div>
        <div className="print-general-info">
          <div className="booking-left print-total booking-inline">Итого:</div>
          <div className="booking-right print-total booking-inline">
            {this.priceCalculator(bookingInfo)} EUR
          </div>
        </div>
      </div>
    );
  }
}
