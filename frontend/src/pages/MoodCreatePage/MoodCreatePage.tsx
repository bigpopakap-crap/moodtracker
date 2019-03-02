import React, { Component, ReactNode } from 'react';

import Layout from '../Layout/Layout';
import MoodInputForm from '../../components/MoodInputForm/MoodInputForm';

import styles from './MoodCreatePage.module.scss';

export default class MoodCreatePage extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.MoodCreatePage}>
          <MoodInputForm className={styles.MoodInputForm} />
        </div>
      </Layout>
    );
  }
}
