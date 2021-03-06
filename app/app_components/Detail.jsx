import React, { PropTypes } from 'react';
import Loading from './Loading';
import * as styles from '../styles/styles';

function Temperature({ temperature }) {
  return (
    <div style={styles.detail}>
      <dt><i className="wi wi-thermometer"></i> </dt>
      <dd>
        {temperature.length === 1 ?
         `${temperature} \u{2103}` :
         `Low: ${temperature[0]}  \u{2103} / High: ${temperature[1]}  \u{2103}`}
      </dd>
    </div>
  );
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
};

function Pressure({ pressure }) {
  return (
    <div style={styles.detail}>
      <dt> <i className="wi wi-barometer" style={styles.icons}></i> </dt>
      <dd>{pressure} hPa </dd>
    </div>
  );
}

Pressure.propTypes = {
  pressure: PropTypes.number.isRequired,
};

function Humidity({ humidity }) {
  return (
    <div style={styles.detail}>
      <dt><i className="wi wi-humidity" style={styles.icons}></i> </dt>
      <dd>{humidity}%</dd>
    </div>
  );
}

Humidity.propTypes = {
  humidity: PropTypes.number.isRequired,
};

function Sunrise({ time }) {
  if (time) {
    return (
      <div style={styles.detail}>
        <dt><i className="wi wi-sunrise" style={styles.icons}></i> </dt>
        <dd>{time}</dd>
      </div>
    );
  }
  return null;
}

Sunrise.propTypes = {
  time: PropTypes.string,
};

function Sunset({ time }) {
  if (time) {
    return (
      <div style={styles.detail}>
        <dt><i className="wi wi-sunset" style={styles.icons}></i> </dt>
        <dd>{time}</dd>
      </div>
    );
  }
  return null;
}

Sunset.propTypes = {
  time: PropTypes.string,
};

function Detail({ isLoading, title, handleClose, iconClass, day }) {
  if (isLoading === true) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <div className="row" style={styles.detail}>
        <div className="col-xs-4 col-xs-offset-4 text-center">
          <h2>{title} </h2>
        </div>
        <div className="col-xs-1">
          <button type="button" className="close" onClick={handleClose} aria-label="Close">
            <span style={styles.currentIcon} aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center" style={styles.currentIcon}>
          <i className={iconClass} ></i>
        </div>
      </div>
      <br />

      <div style={styles.hcenter}>
        <dl className="dl-horizontal">
          <Temperature temperature={day.temperature} />
          <Pressure pressure={day.pressure} />
          <Humidity humidity={day.humidity} />
          <Sunrise time={day.sunrise || 0} />
          <Sunset time={day.sunset || 0} />
        </dl>
      </div>
    </div>
  );
}

Detail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  day: PropTypes.object.isRequired,
};

export default Detail;
