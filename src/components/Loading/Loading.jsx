import React from 'react';
import { Spinner } from 'reactstrap';
import './Loading.css';

export default function Loading({ isLoading, pastDelay, err }) {
  if (isLoading && pastDelay) {
    return (
      <div className="aligner">
        <div className="spinner">
          <Spinner
            type="grow"
            color="danger"
            style={{ width: '4rem', height: '4rem' }}
          />
        </div>
      </div>
    );
  } else if (err && !isLoading) {
    return <div className="loading">Error!</div>;
  } else {
    return null;
  }
}
