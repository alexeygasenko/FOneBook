import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { Helmet } from 'react-helmet';
import CustomNavbar from '../../Navbar/Navbar';
import CommunityCard from '../CommunityCard/CommunityCard';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import './CommunityFeed.css';

export class CommunityFeed extends React.Component {
  componentDidMount() {
    this.props.getCommunityFeed();
  }

  render() {
    const { communityFeed, isFetching, error } = this.props;

    let communityComponent;

    if (isFetching) {
      communityComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !communityFeed || !communityFeed.length) {
      communityComponent = <Error error="Постов в сообществе пока нет." />;
    } else {
      communityComponent = communityFeed
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(post => {
          return (
            <CommunityCard
              url={post.url}
              key={post.url}
              title={post.title}
              description={post.description}
              date={post.date}
              pic={post.pic}
              rating={post.rating}
            />
          );
        });
    }

    return (
      <React.Fragment>
        <CustomNavbar active="Сообщество" />
        <Helmet>
          <title>Сообщество - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <ScrollUpButton />
        <div className="community">
          <div className="row">{communityComponent}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
