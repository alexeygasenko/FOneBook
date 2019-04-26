import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import ModalImage from 'react-modal-image';
import moment from 'moment';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import CustomNavbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Error from '../../../Loading/Error/Error';
import './BookTicket.css';

export class BookTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: null,
      tribune: null,
      dayOne: false,
      dayTwo: false,
      dayThree: false,
      modal: false,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

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

  convertDate = date => {
    moment.locale('ru');
    const newDate = moment(date).format('LL');
    return newDate;
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
          <Error error="Авторизируйтесь, чтобы забронировать билет!" />
          <Footer />
        </React.Fragment>
      );
      return bookTicketComponent;
    } else if (isFetching) {
      bookTicketComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !events.length) {
      bookTicketComponent = <Error error={error} />;
    } else {
      let eventsList = events.map(event => {
        return <option key={event._id}>{event.title}</option>;
      });

      let tribunesList = event.tribunes.map(tribune => {
        return <option key={tribune.name}>{tribune.name}</option>;
      });

      const trackSmall = event.imageSmall;
      const trackLarge = event.imageLarge;

      bookTicketComponent = (
        <div className="book-ticket">
          <div className="book-ticket-title">Бронирование билета</div>
          <Form>
            <FormGroup className="book-ticket-seats">
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
            <FormGroup className="book-ticket-seats">
              <Label className="book-ticket-track" for="selectTrack">
                Дата мероприятия:
              </Label>
              <FormGroup>
                <Label className="book-ticket-track" for="selectTrack">
                  {this.convertDate(event.date)}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label className="book-ticket-track" for="selectTrack">
                  Практика 1 & 2 (Пт): {event.dayOne.starts} -{' '}
                  {event.dayOne.ends}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label className="book-ticket-track" for="selectTrack">
                  Квалификация (Сб): {event.dayTwo.starts} - {event.dayTwo.ends}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label className="book-ticket-track" for="selectTrack">
                  Гонка (Вс): {event.dayThree.starts}
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup className="book-ticket-seats">
              <Label className="book-ticket-track" for="selectTrack">
                Карта трассы:
              </Label>
              <ModalImage
                small={trackSmall}
                large={trackLarge}
                hideZoom
                hideDownload
              />
            </FormGroup>
            <FormGroup className="book-ticket-seats">
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
              <Label className="book-ticket-track">Практика 1 & 2 (Пт):</Label>
              <Input
                className="book-checkbox"
                type="checkbox"
                name="dayOne"
                onChange={this.onCheckboxOneChangeHandler}
              />
              <FormGroup>
                <Label className="book-tribune-seats">
                  Свободных мест: {tribune.dayOne.seats}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label className="book-tribune-seats">
                  Стоимость: {tribune.dayOne.price} EUR
                </Label>
              </FormGroup>
            </FormGroup>
            <hr />
            <FormGroup className="book-ticket-seats">
              <Label className="book-ticket-track">Квалификация (Сб):</Label>
              <Input
                className="book-checkbox"
                type="checkbox"
                name="dayTwo"
                onChange={this.onCheckboxTwoChangeHandler}
              />
              <FormGroup>
                <Label className="book-tribune-seats">
                  Свободных мест: {tribune.dayTwo.seats}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label className="book-tribune-seats">
                  Стоимость: {tribune.dayTwo.price} EUR
                </Label>
              </FormGroup>
            </FormGroup>
            <hr />
            <FormGroup className="book-ticket-seats">
              <Label className="book-ticket-track">Гонка (Вс):</Label>
              <Input
                className="book-checkbox"
                type="checkbox"
                name="dayThree"
                onChange={this.onCheckboxThreeChangeHandler}
              />
              <FormGroup>
                <Label className="book-tribune-seats">
                  Свободных мест: {tribune.dayThree.seats}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label className="book-tribune-seats">
                  Стоимость: {tribune.dayThree.price} EUR
                </Label>
              </FormGroup>
            </FormGroup>
            <Button
              className="make-a-book"
              disabled={!this.validate()}
              onClick={this.toggle}
            >
              Забронировать
            </Button>
            <Modal
              className="delete-booking-modal"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader className="modal-header" toggle={this.toggle}>
                Забронировать билет
              </ModalHeader>
              <ModalBody className="modal-body">Создать заявку?</ModalBody>
              <ModalFooter>
                <Button
                  className="modal-delete-btn"
                  onClick={this.submitBooking}
                >
                  Забронировать
                </Button>
                <Button className="modal-cancel-btn" onClick={this.toggle}>
                  Отмена
                </Button>
              </ModalFooter>
            </Modal>
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
