import React, { Component, ReactNode } from 'react';

import Layout from '../Layout/Layout';

import styles from './MoodDetailPage.module.scss';

export default class MoodDetailPage extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.MoodDetailPage}>Mood detail page!</div>
      </Layout>
    );
  }
}
