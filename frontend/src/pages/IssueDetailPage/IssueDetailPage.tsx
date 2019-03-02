import React, { Component, ReactNode } from 'react';

import Layout from '../Layout/Layout';

import styles from './IssueDetailPage.module.scss';

export default class IssueDetailPage extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.IssueDetailPage}>Issue detail page!</div>
      </Layout>
    );
  }
}
