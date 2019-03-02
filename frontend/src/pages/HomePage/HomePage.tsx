import React, { Component, ReactNode } from 'react';

import Layout from '../Layout/Layout';

import styles from './HomePage.module.scss';

export default class HomePage extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.HomePage}>Home page!</div>
      </Layout>
    );
  }
}
