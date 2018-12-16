import React, { PropTypes } from 'react';

function LocationWidget({ location, onSubmitLocation, onUpdateLocation }) {
  return (
    <form className="navbar-form" onSubmit={onSubmitLocation} role="search" >
      <div className="form-group" >
        <input
          type="text"
          className="form-control"
          placeholder="Wpisz miasto"
          value={location}
          onChange={onUpdateLocation}
        />
      </div>
      <button type="submit" className="btn btn-default">Szukaj</button>
    </form>
  );
}

LocationWidget.propTypes = {
  location: PropTypes.string.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
};

export default LocationWidget;
