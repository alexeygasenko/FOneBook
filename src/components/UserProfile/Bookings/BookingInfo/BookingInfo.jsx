import React from 'react';
import { Helmet } from 'react-helmet';
import ModalImage from 'react-modal-image';
import ScrollUpButton from 'react-scroll-up-button';
import CustomNavbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import './BookingInfo.css';

import trackLarge from '../../../../data/img/trackLarge.jpg';
import trackSmall from '../../../../data/img/trackSmall.jpg';

export default class BookingInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Информация о бронировании - FOnebook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <CustomNavbar />
        <ScrollUpButton />
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
              <div className="booking-left booking-inline">Мероприятие:</div>
              <div className="booking-right booking-inline">1а</div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">Дата:</div>
              <div className="booking-right booking-inline">1а</div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">Страна:</div>
              <div className="booking-right booking-inline">1а</div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">Трибуна:</div>
              <div className="booking-right booking-inline">1а</div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">
                Билет на пятницу:
              </div>
              <div className="booking-right booking-inline">1а</div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">
                Билет на субботу:
              </div>
              <div className="booking-right booking-inline">1а</div>
            </div>

            <div className="booking-general-info">
              <div className="booking-left booking-inline">
                Билет на воскресенье:
              </div>
              <div className="booking-right booking-inline">1а</div>
            </div>
            <div className="booking-general-info">
              <div className="booking-left booking-total booking-inline">
                Итого:
              </div>
              <div className="booking-right booking-total booking-inline">
                520 EUR
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
