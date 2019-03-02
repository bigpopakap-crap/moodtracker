import React, { Component, ReactNode } from 'react';

import Layout from '../Layout/Layout';

import styles from './MoodListPage.module.scss';

export default class MoodListPage extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.MoodListPage}>Mood list page!</div>
      </Layout>
    );
  }
}
