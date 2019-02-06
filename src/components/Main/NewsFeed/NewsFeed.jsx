import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsFeed.css';

import newsJSON from '../../../data/news.json';

export default class NewsFeed extends React.Component {
  render() {
    let newsComponent = newsJSON
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .map(news => {
        return (
          <NewsCard
            key={news.url}
            title={news.title}
            description={news.description}
            date={news.date}
          />
        );
      });

    return (
      <div className="news">
        <div className="row">{newsComponent}</div>
      </div>
    );
  }
}