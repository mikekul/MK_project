import React from 'react';
import * as styles from "../styles/styles";

function Loading() {
  return (
    <div className="row" style={styles.detail}>
      <div className="col-sm-offset-4 col-sm-2 text-center">
        <i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
        <span className="sr-only">Zaczekaj chwilę, trwa ładownie...</span>
      </div>
    </div>
  );
}

export default Loading;
