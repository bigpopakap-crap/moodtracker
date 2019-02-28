import { SchemaTypeOpts } from 'mongoose';

type SchemaPropType<T> = T extends string
  ? StringConstructor
  : T extends number
  ? NumberConstructor
  : T extends boolean
  ? BooleanConstructor
  : any; // eslint-disable-line @typescript-eslint/no-explicit-any

export type SchemaDef<T> = { [K in keyof T]: SchemaTypeOpts<SchemaPropType<T[K]>> };
