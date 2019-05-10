import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { Helmet } from 'react-helmet';
import CustomNavbar from '../../Navbar/Navbar';
import HistoryCard from '../HistoryCard/HistoryCard';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import './HistoryFeed.css';

export default class HistoryFeed extends React.Component {
  /* componentDidMount() {
    this.props.getHistoryFeed(this.props.match.params.type);
  } */

  render() {
    /* const { historyFeed, isFetching, error } = this.props; */

    let historyComponent;

    /* if (isFetching) {
      historyComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !historyFeed.length) {
      historyComponent = <Error error="Новостей пока нет." />;
    } else {
      historyComponent = historyFeed
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(history => {
          return (
            <HistoryCard
              url={history.url}
              key={history.url}
              title={history.title}
              description={history.description}
              date={history.date}
              pic={history.pic}
            />
          );
        });
    } */

    return (
      <React.Fragment>
        <CustomNavbar active="История" />
        <Helmet>
          <title>История - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <ScrollUpButton />
        <div className="history">
          <div className="row">{historyComponent}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
