import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import './History.css';
import Footer from '../Footer/Footer';

export default class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      historySections: ['Гонщики', 'Гран-при', 'Трассы', 'Автомобили'],
    };
  }

  renderSections = () => {
    const { historySections } = this.state;
    let sections = [];

    for (let i = 0; i < historySections.length; ++i) {
      let section = (
        <div key={historySections[i]} className="col-md-3">
          <Card className="news-card">
            <CardImg
              className="history-img"
              top
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97320&w=320&h=320"
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
