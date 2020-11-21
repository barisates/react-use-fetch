import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useFetch = (url, requestOptions) => {
  const [loading, setLoading] = useState(false);
  const Fetch = data => {
    setLoading(true);
    if (data) {
      // eslint-disable-next-line no-param-reassign
      requestOptions.body = JSON.stringify(data);
    }
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

  Fetch.propTypes = {
    data: PropTypes.object,
  };

  Fetch.defaultProps = {
    data: null,
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

  const Button = ({ text, className, type, ...rest }) => (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={['uf-button', className]} {...rest}>{text}</button>
  );

  Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
  };

  Button.defaultProps = {
    type: 'button',
    className: '',
  };

  return [Fetch, Loading];
};

export default useFetch;
