import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { Helmet } from 'react-helmet';
import CustomNavbar from '../../Navbar/Navbar';
import AutoCard from '../AutoCard/AutoCard';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import './AutoFeed.css';

export class AutoFeed extends React.Component {
  componentDidMount() {
    this.props.getAutoFeed(this.props.match.params.type);
  }

  render() {
    const { autoFeed, isFetching, error } = this.props;
    console.log(autoFeed);

    let autoComponent;

    if (isFetching) {
      autoComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !autoFeed || !autoFeed.length) {
      autoComponent = <Error error="Статей из этого раздела пока нет." />;
    } else {
      autoComponent = autoFeed
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(auto => {
          return (
            <AutoCard
              url={auto.url}
              key={auto.url}
              title={auto.title}
              description={auto.description}
              date={auto.date}
              pic={auto.pic}
            />
          );
        });
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Техника" />
        <Helmet>
          <title>Техника - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <ScrollUpButton />
        <div className="auto">
          <div className="row">{autoComponent}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
