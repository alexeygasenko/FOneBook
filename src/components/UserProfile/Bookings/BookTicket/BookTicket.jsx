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
    this.setState({
      tribune: this.state.event.tribunes.find(
        tribune => tribune.name === e.currentTarget.value
      ),
    });
  };

  onCheckboxOneChangeHandler = e => {
    this.setState({
      dayOne: !this.state.dayOne,
    });
  };

  onCheckboxTwoChangeHandler = e => {
    this.setState({
      dayTwo: !this.state.dayTwo,
    });
  };

  onCheckboxThreeChangeHandler = e => {
    this.setState({
      dayThree: !this.state.dayThree,
    });
  };

  submitBooking = () => {
    const eventId = this.state.event._id;
    const userId = this.props.auth.user.id;
    this.props.bookTicket(
      eventId,
      userId,
      this.state.tribune.name,
      this.state.dayOne,
      this.state.dayTwo,
      this.state.dayThree
    );
    this.props.history.push('/bookings');
  };

  validate = () => {
    if (!this.state.dayOne && !this.state.dayTwo && !this.state.dayThree) {
      return false;
    } else if (this.state.tribune.dayOne.seats === 0 && this.state.dayOne) {
      return false;
    } else if (this.state.tribune.dayTwo.seats === 0 && this.state.dayTwo) {
      return false;
    } else if (this.state.tribune.dayThree.seats === 0 && this.state.dayThree) {
      return false;
    } else {
      return true;
    }
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
            <hr />
            <FormGroup className="book-ticket-seats">
              <Label className="book-ticket-track">Пятница:</Label>
              <Input
                className="book-checkbox"
                type="checkbox"
                name="dayOne"
                onChange={this.onCheckboxOneChangeHandler}
              />
              <FormGroup>
                <Label className="book-tribune-seats">
                  Мест: {tribune.dayOne.seats}
                </Label>
                <Label className="book-tribune-seats">
                  Стоимость: {tribune.dayOne.price} EUR
                </Label>
              </FormGroup>
            </FormGroup>
            <hr />
            <FormGroup className="book-ticket-seats">
              <Label className="book-ticket-track">Суббота:</Label>
              <Input
                className="book-checkbox"
                type="checkbox"
                name="dayTwo"
                onChange={this.onCheckboxTwoChangeHandler}
              />
              <FormGroup>
                <Label className="book-tribune-seats">
                  Мест: {tribune.dayTwo.seats}
                </Label>
                <Label className="book-tribune-seats">
                  Стоимость: {tribune.dayTwo.price} EUR
                </Label>
              </FormGroup>
            </FormGroup>
            <hr />
            <FormGroup className="book-ticket-seats">
              <Label className="book-ticket-track">Воскресенье:</Label>
              <Input
                className="book-checkbox"
                type="checkbox"
                name="dayThree"
                onChange={this.onCheckboxThreeChangeHandler}
              />
              <FormGroup>
                <Label className="book-tribune-seats">
                  Мест: {tribune.dayThree.seats}
                </Label>
                <Label className="book-tribune-seats">
                  Стоимость: {tribune.dayThree.price} EUR
                </Label>
              </FormGroup>
            </FormGroup>
            <Button
              className="make-a-book"
              disabled={!this.validate()}
              onClick={this.submitBooking}
            >
              Забронировать
            </Button>
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
