import { DateTime } from './types';

/**
 * Unique identifiers for objects. These uniques are unique across all objects of all types.
 * However, they are not unique across users.
 *
 * An example Id:
 * ENTRY-123,
 * TAG-123,
 * TAG-422
 */
export type Id = string;

export interface StoredObject {
  id: Id;

  /**
   * When this database object was created and stored in the database.
   */
  createdAt: DateTime;

  /**
   * When this database object was most recently updated in the database.
   */
  updatedAt: DateTime;
}
