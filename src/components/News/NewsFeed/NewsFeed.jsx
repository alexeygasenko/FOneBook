import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { Helmet } from 'react-helmet';
import CustomNavbar from '../../Navbar/Navbar';
import NewsCard from '../NewsCard/NewsCard';
import Footer from '../../Footer/Footer';
import './NewsFeed.css';
import emptyPlaceholder from '../../../data/img/empty-placeholder.png';

export class NewsFeed extends React.Component {
  componentDidMount() {
    this.props.getNewsFeed();
  }

  render() {
    const { newsFeed, isFetching, error } = this.props;

    let newsComponent;

    if (isFetching) {
      newsComponent = <p className="empty-news">Идёт загрузка...</p>;
    } else if (error || !newsFeed.length) {
      newsComponent = (
        <React.Fragment>
          <div className="empty-news">
            <img
              className="empty-news-img"
              src={emptyPlaceholder}
              alt="News desc"
            />
            <p className="empty-news">Новостей пока нет.</p>
          </div>
        </React.Fragment>
      );
    } else {
      newsComponent = newsFeed
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(news => {
          return (
            <NewsCard
              url={news.url}
              key={news.url}
              title={news.title}
              description={news.description}
              date={news.date}
            />
          );
        });
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
        <Helmet>
          <title>Новости - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <ScrollUpButton />
        <div className="news">
          <div className="row">{newsComponent}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
