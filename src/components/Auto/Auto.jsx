import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import './Auto.css';
import Footer from '../Footer/Footer';
import img50s from '../../data/img/auto-50s.jpg';
import img60s from '../../data/img/auto-60s.jpg';
import img70s from '../../data/img/auto-70s.jpg';
import img80s from '../../data/img/auto-80s.jpg';
import img90s from '../../data/img/auto-90s.jpg';
import img00s from '../../data/img/auto-00s.jpg';
import img10s from '../../data/img/auto-10s.jpg';

export default class Auto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      decadesSections: [
        '2010-е',
        '2000-е',
        '1990-е',
        '1980-е',
        '1970-е',
        '1960-е',
        '1950-е',
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
        <div className="auto">
          <div className="row">{this.renderSections()}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
