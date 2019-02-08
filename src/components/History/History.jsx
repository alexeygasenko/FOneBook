import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import './History.css';
import Footer from '../Footer/Footer';

import drivers from '../../data/img/history/drivers.jpg';
import grandPrix from '../../data/img/history/gp.jpg';
import tracks from '../../data/img/history/tracks.jpg';
import auto from '../../data/img/history/auto.jpg';

export default class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      historySections: ['Гонщики', 'Гран-при', 'Трассы', 'Автомобили'],
      historyImages: [drivers, grandPrix, tracks, auto],
    };
  }

  renderSections = () => {
    const { historySections, historyImages } = this.state;
    let sections = [];

    for (let i = 0; i < historySections.length; ++i) {
      let section = (
        <div key={historySections[i]} className="col-md-3">
          <Card className="news-card">
            <CardImg
              className="history-img"
              top
              src={historyImages[i]}
              alt="Card image cap"
            />
            <Button className="read-more">{historySections[i]}</Button>
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
        <div className="history">
          <div className="row">{this.renderSections()}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}