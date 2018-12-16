import React from 'react';
import LocationWidgetContainer from '../containers/LocationWidgetContainer';
import * as styles from "../styles/styles";

function Home() {
  return (
    <div className="row">
      <div className="col-xs-12 text-center">
        <h2 style={styles.currentIcon}>Wpisz miasto</h2>
        <LocationWidgetContainer />
      </div>
    </div>
  );
}

export default Home;
