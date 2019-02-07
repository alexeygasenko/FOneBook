import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import './History.css';

export default class History extends React.Component {
  render() {
    return (
      <div className="history">
        <div className="row">
          <div className="col-md-3">
            <Card className="news-card">
              <CardImg
                className="history-img"
                top
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97320&w=320&h=320"
                alt="Card image cap"
              />
              <Button className="read-more">Гонщики</Button>
            </Card>
          </div>

          <div className="col-md-3">
            <Card className="news-card">
              <CardImg
                className="history-img"
                top
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97320&w=320&h=320"
                alt="Card image cap"
              />
              <Button className="read-more">Гран-При</Button>
            </Card>
          </div>

          <div className="col-md-3">
            <Card className="news-card">
              <CardImg
                className="history-img"
                top
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97320&w=320&h=320"
                alt="Card image cap"
              />
              <Button className="read-more">Трассы</Button>
            </Card>
          </div>

          <div className="col-md-3">
            <Card className="news-card">
              <CardImg
                className="history-img"
                top
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97320&w=320&h=320"
                alt="Card image cap"
              />
              <Button className="read-more">Автомобили</Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
