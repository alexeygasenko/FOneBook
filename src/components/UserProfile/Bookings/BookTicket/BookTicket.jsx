import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import CustomNavbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import './BookTicket.css';
import emptyPlaceholder from '../../../../data/img/empty-placeholder.png';

export class BookTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventTitle: 'FORMULA 1 GRAN PREMIO HEINEKEN D’ITALIA 2019',
      tribuneName: '',
      dayOne: false,
      dayTwo: false,
      dayThree: false,
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.getEventList();
    }
  }

  onTitleChangeHandler = e => {
    this.setState({
      eventTitle: e.currentTarget.value,
    });
  };

  onTribuneChangeHandler = e => {
    this.setState({
      tribuneName: e.currentTarget.value,
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const { events, isFetching, error } = this.props;
    const { eventTitle, tribuneName } = this.state;

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
          return <option key={event._id}>{event.title}</option>;
        });

      let currentEvent = events.find(event => event.title === eventTitle);

      let tribunesList = currentEvent.tribunes.map(tribune => {
        return <option key={tribune.name}>{tribune.name}</option>;
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
                onChange={this.onTitleChangeHandler}
                value={eventTitle}
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
                onChange={this.onTribuneChangeHandler}
                value={tribuneName}
              >
                {tribunesList}
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
