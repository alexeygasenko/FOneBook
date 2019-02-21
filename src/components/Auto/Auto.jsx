import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import { Helmet } from 'react-helmet';
import CustomNavbar from '../Navbar/Navbar';
import './Auto.css';
import Footer from '../Footer/Footer';

import img50s from '../../data/img/auto/auto-50s.jpg';
import img60s from '../../data/img/auto/auto-60s.jpg';
import img70s from '../../data/img/auto/auto-70s.jpg';
import img80s from '../../data/img/auto/auto-80s.jpg';
import img90s from '../../data/img/auto/auto-90s.jpg';
import img00s from '../../data/img/auto/auto-00s.jpg';
import img10s from '../../data/img/auto/auto-10s.jpg';

export default class Auto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      decadesSections: [
        '2010-2019',
        '2000-2009',
        '1990-1999',
        '1980-1989',
        '1970-1979',
        '1960-1969',
        '1950-1959',
      ],
      decadesImages: [img10s, img00s, img90s, img80s, img70s, img60s, img50s],
    };
  }

  renderSections = () => {
    const { decadesSections, decadesImages } = this.state;
    let sections = [];

    for (let i = 0; i < decadesSections.length; ++i) {
      let section = (
        <div key={decadesSections[i]} className="col-md-3">
          <Card className="news-card">
            <CardImg
              className="auto-img"
              top
              src={decadesImages[i]}
              alt="Card image cap"
            />
            <Button className="read-more">{decadesSections[i]}</Button>
          </Card>
        </div>
      );
      sections.push(section);
    }
    return sections;
  };

  render() {
    return (
      <React.Fragment>
        <CustomNavbar active="Техника" />
        <Helmet>
          <title>Техника - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="auto">
          <div className="row">{this.renderSections()}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
