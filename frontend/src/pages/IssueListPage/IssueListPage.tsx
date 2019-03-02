import React, { Component, ReactNode } from 'react';

import Layout from '../Layout/Layout';

import styles from './IssueListPage.module.scss';

export default class IssueListPage extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.IssueListPage}>Issue list page!</div>
      </Layout>
    );
  }
}
