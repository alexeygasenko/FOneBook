import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Checkbox from 'react-simple-checkbox';

import CustomNavbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import './BookTicket.css';
import emptyPlaceholder from '../../../../data/img/empty-placeholder.png';

export class BookTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: null,
      tribune: null,
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

  static getDerivedStateFromProps(props, state) {
    if (props.events.length && state.event === null && state.tribune === null) {
      return {
        ...state,
        event: props.events[0],
        tribune: props.events[0].tribunes[0],
      };
    }
    return null;
  }

  onTitleChangeHandler = e => {
    const event = this.props.events.find(
      event => event.title === e.currentTarget.value
    );
    this.setState({
      event: event,
      tribune: event.tribunes[0],
    });
  };

  onTribuneChangeHandler = e => {
    this.setState(state => ({
      ...state,
      tribune: state.event.tribunes.find(
        tribune => tribune.name === e.currentTarget.value
      ),
    }));
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const { events, isFetching, error } = this.props;
    const { event, tribune } = this.state;

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
      let eventsList = events.map(event => {
        return <option key={event._id}>{event.title}</option>;
      });

      let tribunesList = event.tribunes.map(tribune => {
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
                value={event.title}
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
                value={tribune.name}
              >
                {tribunesList}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label className="book-ticket-track" for="selectTribune">
                Пятница:
              </Label>
              <Checkbox
                className="book-checkbox"
                color="#F6231D"
                size="3"
                borderThickness="1"
              />
              <Label className="book-ticket-track" for="selectTribune">
                Суббота:
              </Label>
              <Checkbox
                className="book-checkbox"
                color="#F6231D"
                size="3"
                borderThickness="1"
              />
              <Label className="book-ticket-track" for="selectTribune">
                Воскресенье:
              </Label>
              <Checkbox
                className="book-checkbox"
                color="#F6231D"
                size="3"
                borderThickness="1"
              />
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
