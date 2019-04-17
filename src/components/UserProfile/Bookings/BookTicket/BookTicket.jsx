import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import CustomNavbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import './BookTicket.css';

export default class BookTicket extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Бронирование билетов на Гран-при - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <CustomNavbar />
        <ScrollUpButton />
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
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
        <Footer />
      </React.Fragment>
    );
  }
}
