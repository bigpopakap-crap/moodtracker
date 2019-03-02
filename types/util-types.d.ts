declare namespace Util {
  namespace Types {
    export interface DateTime {
      /**
       * A timestamp is stored using Unix Time (number of seconds since the epoch)
       * and is always stored in the UTC timezone.
       */
      unix_time_seconds_utc: number;
    }

    /**
     * An enum of all the colors that the UI knows how to render.
     */
    export enum Color {
      RED = 'red',
      BLUE = 'blue',
      GREEN = 'green'
    }
    /**
     * An enum of all the keys of icons that the UI knows how to render.
     */
    export enum IconKey {
      BRIEFCASE = 'briefcase',
      HEART = 'heart',
      EXERCISE = 'excercise',
      FAMILY = 'family',
      MALE_PERSON = 'male_person',
      STETHOSCOPE = 'stethoscope'
    }
  }
}
