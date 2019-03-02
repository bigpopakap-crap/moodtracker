import React, { Component, ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classnames from 'classnames';

import Navbutton from './Navbutton/Navbutton';
import styles from './Navbar.module.scss';

/**
 * Defines the possible locations on the page for the MoodInputForm to render itself
 */
export enum NavbarPosition {
  TOP = 'top',
  BOTTOM = 'bottom'
}

interface Props {
  /**
   * Where the MoodInputForm should render itself
   */
  position: NavbarPosition;
}

export default class Navbar extends Component<Props> {
  public render(): ReactNode {
    const isNavbarBottom = this.props.position === NavbarPosition.BOTTOM;
    const navbarPositionClassNames = { [styles['navbar--bottom']]: isNavbarBottom };

    return (
      <AppBar className={classnames(styles.Navbar, navbarPositionClassNames)}>
        <Toolbar>
          {/* Not all routes need to be here, but the URLs do need to match what's in the Router */}
          <Navbutton exact path="/" label="Home" />
          <Navbutton exact path="/login" label="Login" />
          <Navbutton exact path="/journal" label="Journal" />
          <Navbutton exact path="/issues" label="Issues" />
          <Navbutton exact path="/moods" label="Moods" />
          <Navbutton exact path="/dashboard" label="Graphs" />
        </Toolbar>
      </AppBar>
    );
  }
}
