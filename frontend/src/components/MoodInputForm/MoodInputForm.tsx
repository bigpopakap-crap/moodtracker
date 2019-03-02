import React, { Component, ReactNode } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField
} from '@material-ui/core';
import classnames from 'classnames';

import styles from './MoodInputForm.module.scss';

const MIN_MULTILINE_ROWS = 12;
const MAX_MULTILINE_ROWS = 24;

interface Props {
  /**
   * Additional CSS classes for the root element of  this component
   */
  className?: string;
}

export default class MoodInputForm extends Component<Props> {
  public render(): ReactNode {
    return (
      <form className={classnames(this.props.className, styles.MoodInputForm)}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="descriptionInput">Description</InputLabel>
          <TextField
            id="descriptionInput"
            aria-describedby="descriptionHelperText"
            multiline
            rows={MIN_MULTILINE_ROWS}
            rowsMax={MAX_MULTILINE_ROWS}
          />
          <FormHelperText id="descriptionHelperText">This is the description.</FormHelperText>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="affectInput">Affect</InputLabel>
          <TextField id="affectInput" aria-describedby="affectHelperText" />
          <FormHelperText id="affectHelperText">This is the description.</FormHelperText>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="dateTimeInput">Date and time</InputLabel>
          <Input id="dateTimeInput" type="datetime-local" aria-describedby="dateTimeHelperText" />
          <FormHelperText id="dateTimeHelperText">This is the description.</FormHelperText>
        </FormControl>

        <Button fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </form>
    );
  }
}
