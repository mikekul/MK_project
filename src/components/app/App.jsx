import React from "react";
import styles from "./App.scss";
import imageSrc from "../../assets/facepalm.png"

export default class App extends React.Component {
    render () {
        return <div className={ styles.app }>
            Pierwsza aplikacja
            <img src={ imageSrc } />
        </div>;
    }

}