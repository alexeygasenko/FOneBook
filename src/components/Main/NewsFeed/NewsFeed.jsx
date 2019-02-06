import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import './NewsFeed.css';

export default class NewsFeed extends React.Component {
  render() {
    return (
      <div className="news">
        <div className="row">
          <div className="col-md-3">
            <Card className="news-card">
              <CardImg
                className="news-img"
                top
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97250&w=320&h=250"
                alt="Card image cap"
              />
              <CardBody className="news-card-body">
                <CardTitle className="news-title">Card title</CardTitle>
                <CardText className="news-description">
                  Some quick example text to build on the card title
                </CardText>
              </CardBody>
              <Button className="read-more">Button</Button>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="news-card">
              <CardImg
                className="news-img"
                top
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97250&w=320&h=250"
                alt="Card image cap"
              />
              <CardBody className="news-card-body">
                <CardTitle className="news-title">Card title</CardTitle>
                <CardText className="news-description">
                  Some quick example text to build on the card title
                </CardText>
              </CardBody>
              <Button className="read-more">Button</Button>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="news-card">
              <CardImg
                className="news-img"
                top
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97250&w=320&h=250"
                alt="Card image cap"
              />
              <CardBody className="news-card-body">
                <CardTitle className="news-title">Card title</CardTitle>
                <CardText className="news-description">
                  Some quick example text to build on the card title
                </CardText>
              </CardBody>
              <Button className="read-more">Button</Button>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="news-card">
              <CardImg
                className="news-img"
                top
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97250&w=320&h=250"
                alt="Card image cap"
              />
              <CardBody className="news-card-body">
                <CardTitle className="news-title">Card title</CardTitle>
                <CardText className="news-description">
                  Some quick example text to build on the card title
                </CardText>
              </CardBody>
              <Button className="read-more">Button</Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
