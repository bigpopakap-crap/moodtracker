import React, { Component, ReactNode } from 'react';

import Layout from '../Layout/Layout';

import styles from './DashboardPage.module.scss';

export default class DashboardPage extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.DashboardPage}>Dashboard page!</div>
      </Layout>
    );
  }
}
