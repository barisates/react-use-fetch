import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useFetch = (url, requestOptions) => {
  const [loading, setLoading] = useState(false);
  const Fetch = () => {
    setLoading(true);
    return (fetch(url, requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(json => {
        setLoading(false);
        return json;
      })
      .catch(ex => {
        setLoading(false);
        // eslint-disable-next-line no-console
        console.error(ex);
        return false;
      })
    );
  };

  const Loading = ({ dark, children, className }) => (
    <div className={`uf-container ${className}`}>
      <div className={`uf-loading-overlay ${dark ? 'dark' : 'light'} ${loading && 'show'}`} />
      {children}
    </div>
  );

  Loading.propTypes = {
    children: PropTypes.node,
    dark: PropTypes.bool,
    className: PropTypes.string,
  };

  Loading.defaultProps = {
    dark: false,
    children: null,
    className: '',
  };

  return [Fetch, Loading];
};

export default useFetch;
