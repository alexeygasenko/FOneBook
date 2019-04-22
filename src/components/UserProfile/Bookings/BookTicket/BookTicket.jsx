import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import CustomNavbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import './BookTicket.css';
import emptyPlaceholder from '../../../../data/img/empty-placeholder.png';

export class BookTicket extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.getEventList();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { events, isFetching, error } = this.props;

    let bookTicketComponent;

    if (!isAuthenticated) {
      bookTicketComponent = (
        <React.Fragment>
          <Helmet>
            <title>Бронирование билетов на Гран-при - FOneBook</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <CustomNavbar />
          <ScrollUpButton />
          <div className="empty-bookings">
            <img
              className="empty-bookings-img"
              src={emptyPlaceholder}
              alt="News desc"
            />
            <p>Авторизируйтесь, чтобы забронировать билет!</p>
          </div>
          <Footer />
        </React.Fragment>
      );
      return bookTicketComponent;
    } else if (isFetching) {
      bookTicketComponent = (
        <div className="empty-bookings">
          <img
            className="empty-bookings-img"
            src={emptyPlaceholder}
            alt="News desc"
          />
          <p>Идёт загрузка...</p>
        </div>
      );
    } else if (error || !events.length) {
      bookTicketComponent = (
        <div className="empty-bookings">
          <img
            className="empty-bookings-img"
            src={emptyPlaceholder}
            alt="News desc"
          />
          <p>{error}</p>
        </div>
      );
    } else {
      let eventsList = events
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(event => {
          return <option>{event.title}</option>;
        });

      bookTicketComponent = (
        <div className="book-ticket">
          <div className="book-ticket-title">Бронирование билета</div>
          <Form>
            <FormGroup>
              <Label className="book-ticket-track" for="selectTrack">
                Выберите трассу:
              </Label>
              <Input
                type="select"
                name="selectTrack"
                id="selectTrack"
                className="select-track"
              >
                {eventsList}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label className="book-ticket-track" for="selectTribune">
                Выберите трибуну:
              </Label>
              <Input
                type="select"
                name="selectTribune"
                id="selectTribune"
                className="select-track"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <Button className="make-a-book">Забронировать</Button>
          </Form>
        </div>
      );
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Бронирование билетов на Гран-при - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <CustomNavbar />
        <ScrollUpButton />
        {bookTicketComponent}
        <Footer />
      </React.Fragment>
    );
  }
}
