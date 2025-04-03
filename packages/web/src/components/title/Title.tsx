import React from "react";
import styles from "./Title.module.scss";

const Title = (): JSX.Element => {
    return (
        <div className={styles.title}>
            <h1>Giphynator</h1>
            <p>Search for GIFs and stickers</p>
        </div>
    );
};

export default Title;