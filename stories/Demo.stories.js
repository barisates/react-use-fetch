import React, { useState } from 'react';
import './css/demo.css';
import '../src/index.css';
import useFetch from '../src';

export default {
  title: 'Demo',
};

export const Demo = () => {
  const [elapsed, setElapsed] = useState(3000);
  const [dark, setDark] = useState(false);
  const [button, setButton] = useState(true);
  const [Fetch, Loading, Button] = useFetch(
    `https://httpstat.us/200?sleep=${elapsed}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );

  const FetchStart = but => {
    setButton(but);
    Fetch().then(response => console.log(response));
  };

  return (
    <div className="container">
      <Loading dark={dark} button={button}>
        <div className="row">
          <div className="col-md-12 p-5">
            <div className="form-group">
              <label htmlFor="elapsed">Fetch Elapsed</label>
              <input type="number" placeholder="Elapsed" id="elapsed" name="elapsed" className="form-control" value={elapsed} onChange={e => setElapsed(e.target.value)} />
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Theme</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked={!dark} onClick={() => setDark(false)} />
                    <label className="form-check-label" htmlFor="gridRadios1">Light</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" defaultChecked={dark} onClick={() => setDark(true)} />
                    <label className="form-check-label" htmlFor="gridRadios2">Dark</label>
                  </div>
                </div>
              </div>
            </fieldset>
            <button type="button" onClick={() => FetchStart(false)} className="btn btn-primary mr-2">Fetch Start</button>
            <Button type="button" onClick={() => FetchStart(true)} className="btn btn-primary">Fetch Start Only Button</Button>
          </div>
        </div>
      </Loading>
    </div>
  );
};
