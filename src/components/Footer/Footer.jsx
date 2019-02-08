import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="text-footer">
          © 2018-2019 Copyright&nbsp;
          <a href="/">FOneBook</a>
        </div>
      </footer>
    );
  }
}
