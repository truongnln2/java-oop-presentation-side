import React from "react";
import styles from "./white-layout.css";
import { useDeck } from "mdx-deck";
import { ErrorBoundary } from "../components"
const redDash = require('./../assets/red-dash.png');
const logo = require('./../assets/logo-default.png');

export const WhiteLayout = ({ children, title }) => {
    const { index } = useDeck();
    return (
        <ErrorBoundary>
            <div className={styles.container}>
                <h1>{title}</h1>
                <img className={styles.redDash} src={redDash} alt="reddash" />
                <div className={styles.content}>
                    {children}
                </div>
                <img className={styles.logo} src={logo} alt="netcompany" />
                <span className={styles.slideNumber}>{index + 1}</span>
            </div>
        </ErrorBoundary>
    );
}