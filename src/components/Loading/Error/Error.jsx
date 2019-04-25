import React from 'react';
import './Error.css';
import emptyPlaceholder from '../../../data/img/empty-placeholder.png';

export default class Error extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <div className="error">
        <img className="error-img" src={emptyPlaceholder} alt="Error" />
        <p>{error}</p>
      </div>
    );
  }
}
