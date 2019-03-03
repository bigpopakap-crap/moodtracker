import { Color, DateTime, IconKey } from '../util/types';
import { StoredObject } from '../util/api';
import { TranslationKey } from '../i18n/keys';

/**
 * An individual user-entered mood entry. This is the more prominent "unit" of data that
 * the user enters. The whole app is driven by these, entered by the user.
 *
 * TODO is it possible to group these into related "events" so that it's possible to see
 *      how long a particular sentiment lasted? I.e. some might be strong sentiments, but don't
 *      last long, and some might be mild but last a long time.
 *      If so, should the tags be applied to the event or the entries?
 */
export interface MoodEntry {
  /**
   * The timestamp this event corresponds to. This is not necessarily when it was posted, but
   * rather when the user felt the mood described in this entry.
   *
   * @user-updatable true
   */
  moodOccurredAt: DateTime;

  /**
   * The freeform text entered by the user.
   *
   * @user-updatable false
   */
  readonly content: string;

  /**
   * The schema under which this entry falls.
   *
   * @user-updatable false
   */
  readonly schema: MoodSchema;

  /**
   * The sentiment the user was feeling at the time of the entry.
   *
   * @user-updatable true
   */
  sentiment: MoodSentiment;

  /**
   * The tags associated with this entry.
   *
   * @user-updatable true
   */
  tags: MoodTag[];
}

/**
 * The stored version of a {@link MoodEntry}, that has the database fields defined in {@link StoredObject}
 */
export interface StoredMoodEntry extends StoredObject, MoodEntry {}

/**
 * The word "schema" comes from the domain of social psychology. It's meant to denote the
 * different aspects of life in which we operate (ex. "love", "work", "family", etc.)
 *
 * These are different facets of a person's life. Each {@link MoodEntry} will be tagged with
 * a {@link MoodSchema} so users can keep a pulse on how different aspects of their life are going.
 *
 * In effect, this defines the widest (least granular) categorization of {@link MoodEntry}s
 *
 * TODO should these just be combined with tags and treated the same?
 */
export interface MoodSchema {
  /**
   * The translation key to use to label this schema in the UI.
   * This will not be defined if it is a user-defined schema.
   * This *must* be defined for a built-in schema.
   *
   * @user-updatable false
   */
  readonly translationKey?: TranslationKey;

  /**
   * A user-defined UI label for this schema that overrides {@link translationKey}.
   * This will not be defined if it is a built-in schema.
   * This *must* be defined for a  user-defined schema.
   *
   * @user-updatable true
   */
  customLabel?: string;

  /**
   * The icon used to represent this schema.
   *
   * @user-updatable true - if it is a user-defined schema.
   */
  iconKey: IconKey;

  /**
   * The color used to render this schema in the UI.
   *
   * @user-updatable true - if it is a user-defined schema.
   */
  primaryColor: Color;
}

/**
 * The stored version of a {@link MoodSchema}, that has the database fields defined in {@link StoredObject}
 */
export interface StoredMoodSchema extends StoredObject, MoodSchema {}

/**
 * A number indicating how strongly an emotion is felt. An emotion can range from very negative,
 * to neutral, to very positive.
 */
export enum MoodSentiment {
  STRONG_NEGATIVE = -3,
  MILD_NEGATIVE = -2,
  FLEETING_NEGATIVE = -1,
  NEUTRAL = 0,
  FLEETING_POSITIVE = 1,
  MILD_POSITIVE = 2,
  STRONG_POSITIVE = 3
}

/**
 * A custom tag that can be applied to {@link MoodEntry}s to help filter and analyze
 * {@link MoodEntry}s and their associated {@link MoodEntry}s
 *
 * TODO should custom tags be allowed to have sentiments associated with them?
 */
export interface MoodTag {
  /**
   * The user-entered display name.
   *
   * @user-updatable true
   */
  label: string;

  /**
   * The color used to display this tag in the UI.
   *
   * @user-updatable true
   */
  color: Color;
}

/**
 * The stored version of a {@link MoodTag}, that has the database fields defined in {@link StoredObject}
 */
export interface StoredMoodTag extends StoredObject, MoodTag {}
