import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useFetch = (url, requestOptions) => {
  const [loading, setLoading] = useState(false);
  const Fetch = data => {
    setLoading(true);
    const requestOptionsClone = { ...requestOptions };
    if (data) {
      requestOptionsClone.body = JSON.stringify(data);
    }
    return (fetch(url, requestOptionsClone)
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

  const Loading = ({ dark, children, className, button }) => (
    <div className={`uf-container ${className}`}>
      {loading && (<div className={`uf-loading-overlay ${dark ? 'dark' : 'light'} ${button && 'button'}`} />)}
      <div>
        {children}
      </div>
    </div>
  );

  Loading.propTypes = {
    children: PropTypes.node,
    dark: PropTypes.bool,
    className: PropTypes.string,
    button: PropTypes.bool,
  };

  Loading.defaultProps = {
    dark: false,
    button: false,
    children: null,
    className: '',
  };

  const Button = ({ children, className, type, ...rest }) => (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={`uf-button ${className}`} {...rest}>
      <div className={`loader ${loading && 'show'}`}>
        <svg width="16" height="16" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      </div>

      {children}
    </button>
  );

  Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
  };

  Button.defaultProps = {
    type: 'button',
    className: '',
  };

  return [Fetch, Loading, Button];
};

export default useFetch;
