import React, { Component, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import MoodCreatePage from '../MoodCreatePage/MoodCreatePage';

import styles from './App.module.scss';

export default class App extends Component {
  public render(): ReactNode {
    return (
      <div className={styles.App}>
        <CssBaseline />

        <Router>
          <RouteSwitch>
            {/* Homepage, signup, login */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />

            {/* Launchpad for logging new moods */}
            <Route exact path="/journal" component={MoodCreatePage} />
          </RouteSwitch>
        </Router>
      </div>
    );
  }
}
