import React, { Component, ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import { NavLink, Route, Switch as RouteSwitch } from 'react-router-dom';

import styles from './Navbutton.module.scss';

interface Props {
  /**
   * Whether the path needs to match *exactly* in order to be considered active
   * https://reacttraining.com/react-router/web/api/NavLink/exact-bool
   */
  exact: boolean;

  /**
   * The URL to match. If we are on this URL, the nav link will get special styling
   * to indicate that it is active.
   */
  path: string;

  /**
   * The text label for the link.
   */
  label: string;
}

export default class Navbutton extends Component<Props> {
  public render(): ReactNode {
    return (
      <NavLink exact={this.props.exact} to={this.props.path} className={styles.Navbutton}>
        {/* Switch the button component used based on whether this nav button is active or not */}
        <RouteSwitch>
          <Route {...this.props}>
            <Button variant="contained" color="primary">
              {this.props.label}
            </Button>
          </Route>

          <Route path="*">
            <Button variant="contained" color="secondary">
              {this.props.label}
            </Button>
          </Route>
        </RouteSwitch>
      </NavLink>
    );
  }
}
