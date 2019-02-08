import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import './Auto.css';
import Footer from '../Footer/Footer';

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
    };
  }

  renderSections = () => {
    const { decadesSections } = this.state;
    let sections = [];

    for (let i = 0; i < decadesSections.length; ++i) {
      let section = (
        <div key={decadesSections[i]} className="col-md-3">
          <Card className="news-card">
            <CardImg
              className="auto-img"
              top
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97320&w=320&h=320"
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
