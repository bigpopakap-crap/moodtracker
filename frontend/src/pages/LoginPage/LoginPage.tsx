import React, { Component, ReactNode } from 'react';

import Layout from '../Layout/Layout';

import styles from './LoginPage.module.scss';

export default class LoginPage extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.LoginPage}>Login page!</div>
      </Layout>
    );
  }
}
