import React from 'react';
import { Helmet } from 'react-helmet';
import ModalImage from 'react-modal-image';
import ScrollUpButton from 'react-scroll-up-button';
import moment from 'moment';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import CustomNavbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import './BookingInfo.css';
import emptyPlaceholder from '../../../../data/img/empty-placeholder.png';

import trackLarge from '../../../../data/img/trackLarge.jpg';
import trackSmall from '../../../../data/img/trackSmall.jpg';

export class BookingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

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

  deleteBooking = () => {
    this.props.deleteBooking(
      this.props.bookingInfo.event,
      this.props.bookingInfo._id,
      this.props.bookingInfo.tribune,
      this.props.bookingInfo.dayOne,
      this.props.bookingInfo.dayTwo,
      this.props.bookingInfo.dayThree
    );
    this.props.history.push('/bookings');
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
                Практика 1 & 2 (Пт):
              </div>
              <div className="booking-right booking-inline">
                ({bookingInfo.event.dayOne.starts} -{' '}
                {bookingInfo.event.dayOne.ends}){' '}
                {this.convertDay(bookingInfo.dayOne)}
              </div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">
                Квалификация (Сб):
              </div>
              <div className="booking-right booking-inline">
                ({bookingInfo.event.dayTwo.starts} -{' '}
                {bookingInfo.event.dayTwo.ends}){' '}
                {this.convertDay(bookingInfo.dayTwo)}
              </div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">Гонка (Вс):</div>
              <div className="booking-right booking-inline">
                ({bookingInfo.event.dayThree.starts}){' '}
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
            <Button className="delete-booking" onClick={this.toggle}>
              Удалить бронь
            </Button>
            <Modal
              className="delete-booking-modal"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader className="modal-header" toggle={this.toggle}>
                Удалить заявку на бронирование
              </ModalHeader>
              <ModalBody className="modal-body">
                Вы действительно хотите удалить заявку?
              </ModalBody>
              <ModalFooter>
                <Button
                  className="modal-delete-btn"
                  onClick={this.deleteBooking}
                >
                  Удалить
                </Button>
                <Button className="modal-cancel-btn" onClick={this.toggle}>
                  Отмена
                </Button>
              </ModalFooter>
            </Modal>
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
