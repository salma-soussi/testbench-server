
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Attribute
 * 
 */
export type Attribute = {
  id: number
  name: string
  type: string
  description: string | null
  pKey: string | null
  fTable: string | null
  pColumn: string | null
  indexName: string | null
  tableName: string | null
  tableId: number | null
  createAt: Date
  updatedAt: Date
}

/**
 * Model tables
 * 
 */
export type tables = {
  PK: number
  simpleName: string
  rowCount: number | null
  numForeignKey: number | null
  description: string | null
  createAt: Date
  updatedAt: Date
}

/**
 * Model users
 * 
 */
export type users = {
  id: number
  firstname: string | null
  lastname: string | null
  email: string
  hash: string
  createAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attributes
 * const attributes = await prisma.attribute.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Attributes
   * const attributes = await prisma.attribute.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.attribute`: Exposes CRUD operations for the **Attribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attributes
    * const attributes = await prisma.attribute.findMany()
    * ```
    */
  get attribute(): Prisma.AttributeDelegate<GlobalReject>;

  /**
   * `prisma.tables`: Exposes CRUD operations for the **tables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.tables.findMany()
    * ```
    */
  get tables(): Prisma.tablesDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Attribute: 'Attribute',
    tables: 'tables',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TablesCountOutputType
   */


  export type TablesCountOutputType = {
    Attribute: number
  }

  export type TablesCountOutputTypeSelect = {
    Attribute?: boolean
  }

  export type TablesCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TablesCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TablesCountOutputType
    : S extends undefined
    ? never
    : S extends TablesCountOutputTypeArgs
    ?'include' extends U
    ? TablesCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TablesCountOutputType ? TablesCountOutputType[P] : never
  } 
    : TablesCountOutputType
  : TablesCountOutputType




  // Custom InputTypes

  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TablesCountOutputType
     * 
    **/
    select?: TablesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Attribute
   */


  export type AggregateAttribute = {
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  export type AttributeAvgAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type AttributeSumAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type AttributeMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    description: string | null
    pKey: string | null
    fTable: string | null
    pColumn: string | null
    indexName: string | null
    tableName: string | null
    tableId: number | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    description: string | null
    pKey: string | null
    fTable: string | null
    pColumn: string | null
    indexName: string | null
    tableName: string | null
    tableId: number | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    pKey: number
    fTable: number
    pColumn: number
    indexName: number
    tableName: number
    tableId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type AttributeAvgAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type AttributeSumAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type AttributeMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    pKey?: true
    fTable?: true
    pColumn?: true
    indexName?: true
    tableName?: true
    tableId?: true
    createAt?: true
    updatedAt?: true
  }

  export type AttributeMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    pKey?: true
    fTable?: true
    pColumn?: true
    indexName?: true
    tableName?: true
    tableId?: true
    createAt?: true
    updatedAt?: true
  }

  export type AttributeCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    pKey?: true
    fTable?: true
    pColumn?: true
    indexName?: true
    tableName?: true
    tableId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttributeAggregateArgs = {
    /**
     * Filter which Attribute to aggregate.
     * 
    **/
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     * 
    **/
    orderBy?: Enumerable<AttributeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attributes
    **/
    _count?: true | AttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeMaxAggregateInputType
  }

  export type GetAttributeAggregateType<T extends AttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttribute[P]>
      : GetScalarType<T[P], AggregateAttribute[P]>
  }




  export type AttributeGroupByArgs = {
    where?: AttributeWhereInput
    orderBy?: Enumerable<AttributeOrderByWithAggregationInput>
    by: Array<AttributeScalarFieldEnum>
    having?: AttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeCountAggregateInputType | true
    _avg?: AttributeAvgAggregateInputType
    _sum?: AttributeSumAggregateInputType
    _min?: AttributeMinAggregateInputType
    _max?: AttributeMaxAggregateInputType
  }


  export type AttributeGroupByOutputType = {
    id: number
    name: string
    type: string
    description: string | null
    pKey: string | null
    fTable: string | null
    pColumn: string | null
    indexName: string | null
    tableName: string | null
    tableId: number | null
    createAt: Date
    updatedAt: Date
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  type GetAttributeGroupByPayload<T extends AttributeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeGroupByOutputType[P]>
        }
      >
    >


  export type AttributeSelect = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    pKey?: boolean
    fTable?: boolean
    pColumn?: boolean
    indexName?: boolean
    tableName?: boolean
    tableId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    tables?: boolean | tablesArgs
  }

  export type AttributeInclude = {
    tables?: boolean | tablesArgs
  }

  export type AttributeGetPayload<
    S extends boolean | null | undefined | AttributeArgs,
    U = keyof S
      > = S extends true
        ? Attribute
    : S extends undefined
    ? never
    : S extends AttributeArgs | AttributeFindManyArgs
    ?'include' extends U
    ? Attribute  & {
    [P in TrueKeys<S['include']>]:
        P extends 'tables' ? tablesGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'tables' ? tablesGetPayload<S['select'][P]> | null :  P extends keyof Attribute ? Attribute[P] : never
  } 
    : Attribute
  : Attribute


  type AttributeCountArgs = Merge<
    Omit<AttributeFindManyArgs, 'select' | 'include'> & {
      select?: AttributeCountAggregateInputType | true
    }
  >

  export interface AttributeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Attribute that matches the filter.
     * @param {AttributeFindUniqueArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttributeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AttributeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Attribute'> extends True ? CheckSelect<T, Prisma__AttributeClient<Attribute>, Prisma__AttributeClient<AttributeGetPayload<T>>> : CheckSelect<T, Prisma__AttributeClient<Attribute | null >, Prisma__AttributeClient<AttributeGetPayload<T> | null >>

    /**
     * Find the first Attribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttributeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AttributeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Attribute'> extends True ? CheckSelect<T, Prisma__AttributeClient<Attribute>, Prisma__AttributeClient<AttributeGetPayload<T>>> : CheckSelect<T, Prisma__AttributeClient<Attribute | null >, Prisma__AttributeClient<AttributeGetPayload<T> | null >>

    /**
     * Find zero or more Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attributes
     * const attributes = await prisma.attribute.findMany()
     * 
     * // Get first 10 Attributes
     * const attributes = await prisma.attribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeWithIdOnly = await prisma.attribute.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttributeFindManyArgs>(
      args?: SelectSubset<T, AttributeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Attribute>>, PrismaPromise<Array<AttributeGetPayload<T>>>>

    /**
     * Create a Attribute.
     * @param {AttributeCreateArgs} args - Arguments to create a Attribute.
     * @example
     * // Create one Attribute
     * const Attribute = await prisma.attribute.create({
     *   data: {
     *     // ... data to create a Attribute
     *   }
     * })
     * 
    **/
    create<T extends AttributeCreateArgs>(
      args: SelectSubset<T, AttributeCreateArgs>
    ): CheckSelect<T, Prisma__AttributeClient<Attribute>, Prisma__AttributeClient<AttributeGetPayload<T>>>

    /**
     * Create many Attributes.
     *     @param {AttributeCreateManyArgs} args - Arguments to create many Attributes.
     *     @example
     *     // Create many Attributes
     *     const attribute = await prisma.attribute.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttributeCreateManyArgs>(
      args?: SelectSubset<T, AttributeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Attribute.
     * @param {AttributeDeleteArgs} args - Arguments to delete one Attribute.
     * @example
     * // Delete one Attribute
     * const Attribute = await prisma.attribute.delete({
     *   where: {
     *     // ... filter to delete one Attribute
     *   }
     * })
     * 
    **/
    delete<T extends AttributeDeleteArgs>(
      args: SelectSubset<T, AttributeDeleteArgs>
    ): CheckSelect<T, Prisma__AttributeClient<Attribute>, Prisma__AttributeClient<AttributeGetPayload<T>>>

    /**
     * Update one Attribute.
     * @param {AttributeUpdateArgs} args - Arguments to update one Attribute.
     * @example
     * // Update one Attribute
     * const attribute = await prisma.attribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttributeUpdateArgs>(
      args: SelectSubset<T, AttributeUpdateArgs>
    ): CheckSelect<T, Prisma__AttributeClient<Attribute>, Prisma__AttributeClient<AttributeGetPayload<T>>>

    /**
     * Delete zero or more Attributes.
     * @param {AttributeDeleteManyArgs} args - Arguments to filter Attributes to delete.
     * @example
     * // Delete a few Attributes
     * const { count } = await prisma.attribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttributeDeleteManyArgs>(
      args?: SelectSubset<T, AttributeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttributeUpdateManyArgs>(
      args: SelectSubset<T, AttributeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Attribute.
     * @param {AttributeUpsertArgs} args - Arguments to update or create a Attribute.
     * @example
     * // Update or create a Attribute
     * const attribute = await prisma.attribute.upsert({
     *   create: {
     *     // ... data to create a Attribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attribute we want to update
     *   }
     * })
    **/
    upsert<T extends AttributeUpsertArgs>(
      args: SelectSubset<T, AttributeUpsertArgs>
    ): CheckSelect<T, Prisma__AttributeClient<Attribute>, Prisma__AttributeClient<AttributeGetPayload<T>>>

    /**
     * Find one Attribute that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AttributeFindUniqueOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttributeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AttributeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AttributeClient<Attribute>, Prisma__AttributeClient<AttributeGetPayload<T>>>

    /**
     * Find the first Attribute that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttributeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AttributeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AttributeClient<Attribute>, Prisma__AttributeClient<AttributeGetPayload<T>>>

    /**
     * Count the number of Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeCountArgs} args - Arguments to filter Attributes to count.
     * @example
     * // Count the number of Attributes
     * const count = await prisma.attribute.count({
     *   where: {
     *     // ... the filter for the Attributes we want to count
     *   }
     * })
    **/
    count<T extends AttributeCountArgs>(
      args?: Subset<T, AttributeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttributeAggregateArgs>(args: Subset<T, AttributeAggregateArgs>): PrismaPromise<GetAttributeAggregateType<T>>

    /**
     * Group by Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeGroupByArgs['orderBy'] }
        : { orderBy?: AttributeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AttributeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tables<T extends tablesArgs = {}>(args?: Subset<T, tablesArgs>): CheckSelect<T, Prisma__tablesClient<tables | null >, Prisma__tablesClient<tablesGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Attribute base type for findUnique actions
   */
  export type AttributeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Attribute
     * 
    **/
    select?: AttributeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AttributeInclude | null
    /**
     * Filter, which Attribute to fetch.
     * 
    **/
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute: findUnique
   */
  export interface AttributeFindUniqueArgs extends AttributeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Attribute base type for findFirst actions
   */
  export type AttributeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Attribute
     * 
    **/
    select?: AttributeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AttributeInclude | null
    /**
     * Filter, which Attribute to fetch.
     * 
    **/
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     * 
    **/
    orderBy?: Enumerable<AttributeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     * 
    **/
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     * 
    **/
    distinct?: Enumerable<AttributeScalarFieldEnum>
  }

  /**
   * Attribute: findFirst
   */
  export interface AttributeFindFirstArgs extends AttributeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Attribute findMany
   */
  export type AttributeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Attribute
     * 
    **/
    select?: AttributeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AttributeInclude | null
    /**
     * Filter, which Attributes to fetch.
     * 
    **/
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     * 
    **/
    orderBy?: Enumerable<AttributeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attributes.
     * 
    **/
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AttributeScalarFieldEnum>
  }


  /**
   * Attribute create
   */
  export type AttributeCreateArgs = {
    /**
     * Select specific fields to fetch from the Attribute
     * 
    **/
    select?: AttributeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AttributeInclude | null
    /**
     * The data needed to create a Attribute.
     * 
    **/
    data: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
  }


  /**
   * Attribute createMany
   */
  export type AttributeCreateManyArgs = {
    /**
     * The data used to create many Attributes.
     * 
    **/
    data: Enumerable<AttributeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Attribute update
   */
  export type AttributeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Attribute
     * 
    **/
    select?: AttributeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AttributeInclude | null
    /**
     * The data needed to update a Attribute.
     * 
    **/
    data: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
    /**
     * Choose, which Attribute to update.
     * 
    **/
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute updateMany
   */
  export type AttributeUpdateManyArgs = {
    /**
     * The data used to update Attributes.
     * 
    **/
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     * 
    **/
    where?: AttributeWhereInput
  }


  /**
   * Attribute upsert
   */
  export type AttributeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Attribute
     * 
    **/
    select?: AttributeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AttributeInclude | null
    /**
     * The filter to search for the Attribute to update in case it exists.
     * 
    **/
    where: AttributeWhereUniqueInput
    /**
     * In case the Attribute found by the `where` argument doesn't exist, create a new Attribute with this data.
     * 
    **/
    create: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
    /**
     * In case the Attribute was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
  }


  /**
   * Attribute delete
   */
  export type AttributeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Attribute
     * 
    **/
    select?: AttributeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AttributeInclude | null
    /**
     * Filter which Attribute to delete.
     * 
    **/
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute deleteMany
   */
  export type AttributeDeleteManyArgs = {
    /**
     * Filter which Attributes to delete
     * 
    **/
    where?: AttributeWhereInput
  }


  /**
   * Attribute: findUniqueOrThrow
   */
  export type AttributeFindUniqueOrThrowArgs = AttributeFindUniqueArgsBase
      

  /**
   * Attribute: findFirstOrThrow
   */
  export type AttributeFindFirstOrThrowArgs = AttributeFindFirstArgsBase
      

  /**
   * Attribute without action
   */
  export type AttributeArgs = {
    /**
     * Select specific fields to fetch from the Attribute
     * 
    **/
    select?: AttributeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AttributeInclude | null
  }



  /**
   * Model tables
   */


  export type AggregateTables = {
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  export type TablesAvgAggregateOutputType = {
    PK: number | null
    rowCount: number | null
    numForeignKey: number | null
  }

  export type TablesSumAggregateOutputType = {
    PK: number | null
    rowCount: number | null
    numForeignKey: number | null
  }

  export type TablesMinAggregateOutputType = {
    PK: number | null
    simpleName: string | null
    rowCount: number | null
    numForeignKey: number | null
    description: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type TablesMaxAggregateOutputType = {
    PK: number | null
    simpleName: string | null
    rowCount: number | null
    numForeignKey: number | null
    description: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type TablesCountAggregateOutputType = {
    PK: number
    simpleName: number
    rowCount: number
    numForeignKey: number
    description: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type TablesAvgAggregateInputType = {
    PK?: true
    rowCount?: true
    numForeignKey?: true
  }

  export type TablesSumAggregateInputType = {
    PK?: true
    rowCount?: true
    numForeignKey?: true
  }

  export type TablesMinAggregateInputType = {
    PK?: true
    simpleName?: true
    rowCount?: true
    numForeignKey?: true
    description?: true
    createAt?: true
    updatedAt?: true
  }

  export type TablesMaxAggregateInputType = {
    PK?: true
    simpleName?: true
    rowCount?: true
    numForeignKey?: true
    description?: true
    createAt?: true
    updatedAt?: true
  }

  export type TablesCountAggregateInputType = {
    PK?: true
    simpleName?: true
    rowCount?: true
    numForeignKey?: true
    description?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TablesAggregateArgs = {
    /**
     * Filter which tables to aggregate.
     * 
    **/
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     * 
    **/
    orderBy?: Enumerable<tablesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tables
    **/
    _count?: true | TablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TablesMaxAggregateInputType
  }

  export type GetTablesAggregateType<T extends TablesAggregateArgs> = {
        [P in keyof T & keyof AggregateTables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTables[P]>
      : GetScalarType<T[P], AggregateTables[P]>
  }




  export type TablesGroupByArgs = {
    where?: tablesWhereInput
    orderBy?: Enumerable<tablesOrderByWithAggregationInput>
    by: Array<TablesScalarFieldEnum>
    having?: tablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TablesCountAggregateInputType | true
    _avg?: TablesAvgAggregateInputType
    _sum?: TablesSumAggregateInputType
    _min?: TablesMinAggregateInputType
    _max?: TablesMaxAggregateInputType
  }


  export type TablesGroupByOutputType = {
    PK: number
    simpleName: string
    rowCount: number | null
    numForeignKey: number | null
    description: string | null
    createAt: Date
    updatedAt: Date
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  type GetTablesGroupByPayload<T extends TablesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TablesGroupByOutputType[P]>
            : GetScalarType<T[P], TablesGroupByOutputType[P]>
        }
      >
    >


  export type tablesSelect = {
    PK?: boolean
    simpleName?: boolean
    rowCount?: boolean
    numForeignKey?: boolean
    description?: boolean
    createAt?: boolean
    updatedAt?: boolean
    Attribute?: boolean | AttributeFindManyArgs
    _count?: boolean | TablesCountOutputTypeArgs
  }

  export type tablesInclude = {
    Attribute?: boolean | AttributeFindManyArgs
    _count?: boolean | TablesCountOutputTypeArgs
  }

  export type tablesGetPayload<
    S extends boolean | null | undefined | tablesArgs,
    U = keyof S
      > = S extends true
        ? tables
    : S extends undefined
    ? never
    : S extends tablesArgs | tablesFindManyArgs
    ?'include' extends U
    ? tables  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Attribute' ? Array < AttributeGetPayload<S['include'][P]>>  :
        P extends '_count' ? TablesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Attribute' ? Array < AttributeGetPayload<S['select'][P]>>  :
        P extends '_count' ? TablesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof tables ? tables[P] : never
  } 
    : tables
  : tables


  type tablesCountArgs = Merge<
    Omit<tablesFindManyArgs, 'select' | 'include'> & {
      select?: TablesCountAggregateInputType | true
    }
  >

  export interface tablesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tables that matches the filter.
     * @param {tablesFindUniqueArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tablesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tablesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tables'> extends True ? CheckSelect<T, Prisma__tablesClient<tables>, Prisma__tablesClient<tablesGetPayload<T>>> : CheckSelect<T, Prisma__tablesClient<tables | null >, Prisma__tablesClient<tablesGetPayload<T> | null >>

    /**
     * Find the first Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindFirstArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tablesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tablesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tables'> extends True ? CheckSelect<T, Prisma__tablesClient<tables>, Prisma__tablesClient<tablesGetPayload<T>>> : CheckSelect<T, Prisma__tablesClient<tables | null >, Prisma__tablesClient<tablesGetPayload<T> | null >>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.tables.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.tables.findMany({ take: 10 })
     * 
     * // Only select the `PK`
     * const tablesWithPKOnly = await prisma.tables.findMany({ select: { PK: true } })
     * 
    **/
    findMany<T extends tablesFindManyArgs>(
      args?: SelectSubset<T, tablesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<tables>>, PrismaPromise<Array<tablesGetPayload<T>>>>

    /**
     * Create a Tables.
     * @param {tablesCreateArgs} args - Arguments to create a Tables.
     * @example
     * // Create one Tables
     * const Tables = await prisma.tables.create({
     *   data: {
     *     // ... data to create a Tables
     *   }
     * })
     * 
    **/
    create<T extends tablesCreateArgs>(
      args: SelectSubset<T, tablesCreateArgs>
    ): CheckSelect<T, Prisma__tablesClient<tables>, Prisma__tablesClient<tablesGetPayload<T>>>

    /**
     * Create many Tables.
     *     @param {tablesCreateManyArgs} args - Arguments to create many Tables.
     *     @example
     *     // Create many Tables
     *     const tables = await prisma.tables.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tablesCreateManyArgs>(
      args?: SelectSubset<T, tablesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tables.
     * @param {tablesDeleteArgs} args - Arguments to delete one Tables.
     * @example
     * // Delete one Tables
     * const Tables = await prisma.tables.delete({
     *   where: {
     *     // ... filter to delete one Tables
     *   }
     * })
     * 
    **/
    delete<T extends tablesDeleteArgs>(
      args: SelectSubset<T, tablesDeleteArgs>
    ): CheckSelect<T, Prisma__tablesClient<tables>, Prisma__tablesClient<tablesGetPayload<T>>>

    /**
     * Update one Tables.
     * @param {tablesUpdateArgs} args - Arguments to update one Tables.
     * @example
     * // Update one Tables
     * const tables = await prisma.tables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tablesUpdateArgs>(
      args: SelectSubset<T, tablesUpdateArgs>
    ): CheckSelect<T, Prisma__tablesClient<tables>, Prisma__tablesClient<tablesGetPayload<T>>>

    /**
     * Delete zero or more Tables.
     * @param {tablesDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.tables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tablesDeleteManyArgs>(
      args?: SelectSubset<T, tablesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const tables = await prisma.tables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tablesUpdateManyArgs>(
      args: SelectSubset<T, tablesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tables.
     * @param {tablesUpsertArgs} args - Arguments to update or create a Tables.
     * @example
     * // Update or create a Tables
     * const tables = await prisma.tables.upsert({
     *   create: {
     *     // ... data to create a Tables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tables we want to update
     *   }
     * })
    **/
    upsert<T extends tablesUpsertArgs>(
      args: SelectSubset<T, tablesUpsertArgs>
    ): CheckSelect<T, Prisma__tablesClient<tables>, Prisma__tablesClient<tablesGetPayload<T>>>

    /**
     * Find one Tables that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {tablesFindUniqueOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tablesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tablesFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__tablesClient<tables>, Prisma__tablesClient<tablesGetPayload<T>>>

    /**
     * Find the first Tables that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindFirstOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tablesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tablesFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__tablesClient<tables>, Prisma__tablesClient<tablesGetPayload<T>>>

    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.tables.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends tablesCountArgs>(
      args?: Subset<T, tablesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TablesAggregateArgs>(args: Subset<T, TablesAggregateArgs>): PrismaPromise<GetTablesAggregateType<T>>

    /**
     * Group by Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TablesGroupByArgs['orderBy'] }
        : { orderBy?: TablesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTablesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for tables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tablesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Attribute<T extends AttributeFindManyArgs = {}>(args?: Subset<T, AttributeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Attribute>>, PrismaPromise<Array<AttributeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * tables base type for findUnique actions
   */
  export type tablesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tables
     * 
    **/
    select?: tablesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tablesInclude | null
    /**
     * Filter, which tables to fetch.
     * 
    **/
    where: tablesWhereUniqueInput
  }

  /**
   * tables: findUnique
   */
  export interface tablesFindUniqueArgs extends tablesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tables base type for findFirst actions
   */
  export type tablesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tables
     * 
    **/
    select?: tablesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tablesInclude | null
    /**
     * Filter, which tables to fetch.
     * 
    **/
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     * 
    **/
    orderBy?: Enumerable<tablesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     * 
    **/
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     * 
    **/
    distinct?: Enumerable<TablesScalarFieldEnum>
  }

  /**
   * tables: findFirst
   */
  export interface tablesFindFirstArgs extends tablesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tables findMany
   */
  export type tablesFindManyArgs = {
    /**
     * Select specific fields to fetch from the tables
     * 
    **/
    select?: tablesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tablesInclude | null
    /**
     * Filter, which tables to fetch.
     * 
    **/
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     * 
    **/
    orderBy?: Enumerable<tablesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tables.
     * 
    **/
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TablesScalarFieldEnum>
  }


  /**
   * tables create
   */
  export type tablesCreateArgs = {
    /**
     * Select specific fields to fetch from the tables
     * 
    **/
    select?: tablesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tablesInclude | null
    /**
     * The data needed to create a tables.
     * 
    **/
    data: XOR<tablesCreateInput, tablesUncheckedCreateInput>
  }


  /**
   * tables createMany
   */
  export type tablesCreateManyArgs = {
    /**
     * The data used to create many tables.
     * 
    **/
    data: Enumerable<tablesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tables update
   */
  export type tablesUpdateArgs = {
    /**
     * Select specific fields to fetch from the tables
     * 
    **/
    select?: tablesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tablesInclude | null
    /**
     * The data needed to update a tables.
     * 
    **/
    data: XOR<tablesUpdateInput, tablesUncheckedUpdateInput>
    /**
     * Choose, which tables to update.
     * 
    **/
    where: tablesWhereUniqueInput
  }


  /**
   * tables updateMany
   */
  export type tablesUpdateManyArgs = {
    /**
     * The data used to update tables.
     * 
    **/
    data: XOR<tablesUpdateManyMutationInput, tablesUncheckedUpdateManyInput>
    /**
     * Filter which tables to update
     * 
    **/
    where?: tablesWhereInput
  }


  /**
   * tables upsert
   */
  export type tablesUpsertArgs = {
    /**
     * Select specific fields to fetch from the tables
     * 
    **/
    select?: tablesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tablesInclude | null
    /**
     * The filter to search for the tables to update in case it exists.
     * 
    **/
    where: tablesWhereUniqueInput
    /**
     * In case the tables found by the `where` argument doesn't exist, create a new tables with this data.
     * 
    **/
    create: XOR<tablesCreateInput, tablesUncheckedCreateInput>
    /**
     * In case the tables was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<tablesUpdateInput, tablesUncheckedUpdateInput>
  }


  /**
   * tables delete
   */
  export type tablesDeleteArgs = {
    /**
     * Select specific fields to fetch from the tables
     * 
    **/
    select?: tablesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tablesInclude | null
    /**
     * Filter which tables to delete.
     * 
    **/
    where: tablesWhereUniqueInput
  }


  /**
   * tables deleteMany
   */
  export type tablesDeleteManyArgs = {
    /**
     * Filter which tables to delete
     * 
    **/
    where?: tablesWhereInput
  }


  /**
   * tables: findUniqueOrThrow
   */
  export type tablesFindUniqueOrThrowArgs = tablesFindUniqueArgsBase
      

  /**
   * tables: findFirstOrThrow
   */
  export type tablesFindFirstOrThrowArgs = tablesFindFirstArgsBase
      

  /**
   * tables without action
   */
  export type tablesArgs = {
    /**
     * Select specific fields to fetch from the tables
     * 
    **/
    select?: tablesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tablesInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    hash: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    hash: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    hash: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    hash?: true
    createAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    hash?: true
    createAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    hash?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    firstname: string | null
    lastname: string | null
    email: string
    hash: string
    createAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    hash?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type usersGetPayload<
    S extends boolean | null | undefined | usersArgs,
    U = keyof S
      > = S extends true
        ? users
    : S extends undefined
    ? never
    : S extends usersArgs | usersFindManyArgs
    ?'include' extends U
    ? users 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof users ? users[P] : never
  } 
    : users
  : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Find one Users that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }

  /**
   * users: findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users: findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users: findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = usersFindUniqueArgsBase
      

  /**
   * users: findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = usersFindFirstArgsBase
      

  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AttributeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    pKey: 'pKey',
    fTable: 'fTable',
    pColumn: 'pColumn',
    indexName: 'indexName',
    tableName: 'tableName',
    tableId: 'tableId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type AttributeScalarFieldEnum = (typeof AttributeScalarFieldEnum)[keyof typeof AttributeScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TablesScalarFieldEnum: {
    PK: 'PK',
    simpleName: 'simpleName',
    rowCount: 'rowCount',
    numForeignKey: 'numForeignKey',
    description: 'description',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type TablesScalarFieldEnum = (typeof TablesScalarFieldEnum)[keyof typeof TablesScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    hash: 'hash',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type AttributeWhereInput = {
    AND?: Enumerable<AttributeWhereInput>
    OR?: Enumerable<AttributeWhereInput>
    NOT?: Enumerable<AttributeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    type?: StringFilter | string
    description?: StringNullableFilter | string | null
    pKey?: StringNullableFilter | string | null
    fTable?: StringNullableFilter | string | null
    pColumn?: StringNullableFilter | string | null
    indexName?: StringNullableFilter | string | null
    tableName?: StringNullableFilter | string | null
    tableId?: IntNullableFilter | number | null
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    tables?: XOR<TablesRelationFilter, tablesWhereInput> | null
  }

  export type AttributeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    pKey?: SortOrder
    fTable?: SortOrder
    pColumn?: SortOrder
    indexName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    tables?: tablesOrderByWithRelationInput
  }

  export type AttributeWhereUniqueInput = {
    id?: number
  }

  export type AttributeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    pKey?: SortOrder
    fTable?: SortOrder
    pColumn?: SortOrder
    indexName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttributeCountOrderByAggregateInput
    _avg?: AttributeAvgOrderByAggregateInput
    _max?: AttributeMaxOrderByAggregateInput
    _min?: AttributeMinOrderByAggregateInput
    _sum?: AttributeSumOrderByAggregateInput
  }

  export type AttributeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AttributeScalarWhereWithAggregatesInput>
    OR?: Enumerable<AttributeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AttributeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    pKey?: StringNullableWithAggregatesFilter | string | null
    fTable?: StringNullableWithAggregatesFilter | string | null
    pColumn?: StringNullableWithAggregatesFilter | string | null
    indexName?: StringNullableWithAggregatesFilter | string | null
    tableName?: StringNullableWithAggregatesFilter | string | null
    tableId?: IntNullableWithAggregatesFilter | number | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type tablesWhereInput = {
    AND?: Enumerable<tablesWhereInput>
    OR?: Enumerable<tablesWhereInput>
    NOT?: Enumerable<tablesWhereInput>
    PK?: IntFilter | number
    simpleName?: StringFilter | string
    rowCount?: IntNullableFilter | number | null
    numForeignKey?: IntNullableFilter | number | null
    description?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Attribute?: AttributeListRelationFilter
  }

  export type tablesOrderByWithRelationInput = {
    PK?: SortOrder
    simpleName?: SortOrder
    rowCount?: SortOrder
    numForeignKey?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    Attribute?: AttributeOrderByRelationAggregateInput
  }

  export type tablesWhereUniqueInput = {
    PK?: number
    simpleName?: string
  }

  export type tablesOrderByWithAggregationInput = {
    PK?: SortOrder
    simpleName?: SortOrder
    rowCount?: SortOrder
    numForeignKey?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: tablesCountOrderByAggregateInput
    _avg?: tablesAvgOrderByAggregateInput
    _max?: tablesMaxOrderByAggregateInput
    _min?: tablesMinOrderByAggregateInput
    _sum?: tablesSumOrderByAggregateInput
  }

  export type tablesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tablesScalarWhereWithAggregatesInput>
    OR?: Enumerable<tablesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tablesScalarWhereWithAggregatesInput>
    PK?: IntWithAggregatesFilter | number
    simpleName?: StringWithAggregatesFilter | string
    rowCount?: IntNullableWithAggregatesFilter | number | null
    numForeignKey?: IntNullableWithAggregatesFilter | number | null
    description?: StringNullableWithAggregatesFilter | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: IntFilter | number
    firstname?: StringNullableFilter | string | null
    lastname?: StringNullableFilter | string | null
    email?: StringFilter | string
    hash?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    firstname?: StringNullableWithAggregatesFilter | string | null
    lastname?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    hash?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AttributeCreateInput = {
    name: string
    type: string
    description?: string | null
    pKey?: string | null
    fTable?: string | null
    pColumn?: string | null
    indexName?: string | null
    tableName?: string | null
    createAt?: Date | string
    updatedAt: Date | string
    tables?: tablesCreateNestedOneWithoutAttributeInput
  }

  export type AttributeUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    pKey?: string | null
    fTable?: string | null
    pColumn?: string | null
    indexName?: string | null
    tableName?: string | null
    tableId?: number | null
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type AttributeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pKey?: NullableStringFieldUpdateOperationsInput | string | null
    fTable?: NullableStringFieldUpdateOperationsInput | string | null
    pColumn?: NullableStringFieldUpdateOperationsInput | string | null
    indexName?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: tablesUpdateOneWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pKey?: NullableStringFieldUpdateOperationsInput | string | null
    fTable?: NullableStringFieldUpdateOperationsInput | string | null
    pColumn?: NullableStringFieldUpdateOperationsInput | string | null
    indexName?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeCreateManyInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    pKey?: string | null
    fTable?: string | null
    pColumn?: string | null
    indexName?: string | null
    tableName?: string | null
    tableId?: number | null
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type AttributeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pKey?: NullableStringFieldUpdateOperationsInput | string | null
    fTable?: NullableStringFieldUpdateOperationsInput | string | null
    pColumn?: NullableStringFieldUpdateOperationsInput | string | null
    indexName?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pKey?: NullableStringFieldUpdateOperationsInput | string | null
    fTable?: NullableStringFieldUpdateOperationsInput | string | null
    pColumn?: NullableStringFieldUpdateOperationsInput | string | null
    indexName?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tablesCreateInput = {
    simpleName: string
    rowCount?: number | null
    numForeignKey?: number | null
    description?: string | null
    createAt?: Date | string
    updatedAt: Date | string
    Attribute?: AttributeCreateNestedManyWithoutTablesInput
  }

  export type tablesUncheckedCreateInput = {
    PK?: number
    simpleName: string
    rowCount?: number | null
    numForeignKey?: number | null
    description?: string | null
    createAt?: Date | string
    updatedAt: Date | string
    Attribute?: AttributeUncheckedCreateNestedManyWithoutTablesInput
  }

  export type tablesUpdateInput = {
    simpleName?: StringFieldUpdateOperationsInput | string
    rowCount?: NullableIntFieldUpdateOperationsInput | number | null
    numForeignKey?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attribute?: AttributeUpdateManyWithoutTablesNestedInput
  }

  export type tablesUncheckedUpdateInput = {
    PK?: IntFieldUpdateOperationsInput | number
    simpleName?: StringFieldUpdateOperationsInput | string
    rowCount?: NullableIntFieldUpdateOperationsInput | number | null
    numForeignKey?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attribute?: AttributeUncheckedUpdateManyWithoutTablesNestedInput
  }

  export type tablesCreateManyInput = {
    PK?: number
    simpleName: string
    rowCount?: number | null
    numForeignKey?: number | null
    description?: string | null
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type tablesUpdateManyMutationInput = {
    simpleName?: StringFieldUpdateOperationsInput | string
    rowCount?: NullableIntFieldUpdateOperationsInput | number | null
    numForeignKey?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tablesUncheckedUpdateManyInput = {
    PK?: IntFieldUpdateOperationsInput | number
    simpleName?: StringFieldUpdateOperationsInput | string
    rowCount?: NullableIntFieldUpdateOperationsInput | number | null
    numForeignKey?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    firstname?: string | null
    lastname?: string | null
    email: string
    hash: string
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    email: string
    hash: string
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type usersUpdateInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    email: string
    hash: string
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type usersUpdateManyMutationInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TablesRelationFilter = {
    is?: tablesWhereInput | null
    isNot?: tablesWhereInput | null
  }

  export type AttributeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    pKey?: SortOrder
    fTable?: SortOrder
    pColumn?: SortOrder
    indexName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeAvgOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type AttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    pKey?: SortOrder
    fTable?: SortOrder
    pColumn?: SortOrder
    indexName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    pKey?: SortOrder
    fTable?: SortOrder
    pColumn?: SortOrder
    indexName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeSumOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type AttributeListRelationFilter = {
    every?: AttributeWhereInput
    some?: AttributeWhereInput
    none?: AttributeWhereInput
  }

  export type AttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tablesCountOrderByAggregateInput = {
    PK?: SortOrder
    simpleName?: SortOrder
    rowCount?: SortOrder
    numForeignKey?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tablesAvgOrderByAggregateInput = {
    PK?: SortOrder
    rowCount?: SortOrder
    numForeignKey?: SortOrder
  }

  export type tablesMaxOrderByAggregateInput = {
    PK?: SortOrder
    simpleName?: SortOrder
    rowCount?: SortOrder
    numForeignKey?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tablesMinOrderByAggregateInput = {
    PK?: SortOrder
    simpleName?: SortOrder
    rowCount?: SortOrder
    numForeignKey?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tablesSumOrderByAggregateInput = {
    PK?: SortOrder
    rowCount?: SortOrder
    numForeignKey?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tablesCreateNestedOneWithoutAttributeInput = {
    create?: XOR<tablesCreateWithoutAttributeInput, tablesUncheckedCreateWithoutAttributeInput>
    connectOrCreate?: tablesCreateOrConnectWithoutAttributeInput
    connect?: tablesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tablesUpdateOneWithoutAttributeNestedInput = {
    create?: XOR<tablesCreateWithoutAttributeInput, tablesUncheckedCreateWithoutAttributeInput>
    connectOrCreate?: tablesCreateOrConnectWithoutAttributeInput
    upsert?: tablesUpsertWithoutAttributeInput
    disconnect?: boolean
    delete?: boolean
    connect?: tablesWhereUniqueInput
    update?: XOR<tablesUpdateWithoutAttributeInput, tablesUncheckedUpdateWithoutAttributeInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AttributeCreateNestedManyWithoutTablesInput = {
    create?: XOR<Enumerable<AttributeCreateWithoutTablesInput>, Enumerable<AttributeUncheckedCreateWithoutTablesInput>>
    connectOrCreate?: Enumerable<AttributeCreateOrConnectWithoutTablesInput>
    createMany?: AttributeCreateManyTablesInputEnvelope
    connect?: Enumerable<AttributeWhereUniqueInput>
  }

  export type AttributeUncheckedCreateNestedManyWithoutTablesInput = {
    create?: XOR<Enumerable<AttributeCreateWithoutTablesInput>, Enumerable<AttributeUncheckedCreateWithoutTablesInput>>
    connectOrCreate?: Enumerable<AttributeCreateOrConnectWithoutTablesInput>
    createMany?: AttributeCreateManyTablesInputEnvelope
    connect?: Enumerable<AttributeWhereUniqueInput>
  }

  export type AttributeUpdateManyWithoutTablesNestedInput = {
    create?: XOR<Enumerable<AttributeCreateWithoutTablesInput>, Enumerable<AttributeUncheckedCreateWithoutTablesInput>>
    connectOrCreate?: Enumerable<AttributeCreateOrConnectWithoutTablesInput>
    upsert?: Enumerable<AttributeUpsertWithWhereUniqueWithoutTablesInput>
    createMany?: AttributeCreateManyTablesInputEnvelope
    set?: Enumerable<AttributeWhereUniqueInput>
    disconnect?: Enumerable<AttributeWhereUniqueInput>
    delete?: Enumerable<AttributeWhereUniqueInput>
    connect?: Enumerable<AttributeWhereUniqueInput>
    update?: Enumerable<AttributeUpdateWithWhereUniqueWithoutTablesInput>
    updateMany?: Enumerable<AttributeUpdateManyWithWhereWithoutTablesInput>
    deleteMany?: Enumerable<AttributeScalarWhereInput>
  }

  export type AttributeUncheckedUpdateManyWithoutTablesNestedInput = {
    create?: XOR<Enumerable<AttributeCreateWithoutTablesInput>, Enumerable<AttributeUncheckedCreateWithoutTablesInput>>
    connectOrCreate?: Enumerable<AttributeCreateOrConnectWithoutTablesInput>
    upsert?: Enumerable<AttributeUpsertWithWhereUniqueWithoutTablesInput>
    createMany?: AttributeCreateManyTablesInputEnvelope
    set?: Enumerable<AttributeWhereUniqueInput>
    disconnect?: Enumerable<AttributeWhereUniqueInput>
    delete?: Enumerable<AttributeWhereUniqueInput>
    connect?: Enumerable<AttributeWhereUniqueInput>
    update?: Enumerable<AttributeUpdateWithWhereUniqueWithoutTablesInput>
    updateMany?: Enumerable<AttributeUpdateManyWithWhereWithoutTablesInput>
    deleteMany?: Enumerable<AttributeScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type tablesCreateWithoutAttributeInput = {
    simpleName: string
    rowCount?: number | null
    numForeignKey?: number | null
    description?: string | null
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type tablesUncheckedCreateWithoutAttributeInput = {
    PK?: number
    simpleName: string
    rowCount?: number | null
    numForeignKey?: number | null
    description?: string | null
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type tablesCreateOrConnectWithoutAttributeInput = {
    where: tablesWhereUniqueInput
    create: XOR<tablesCreateWithoutAttributeInput, tablesUncheckedCreateWithoutAttributeInput>
  }

  export type tablesUpsertWithoutAttributeInput = {
    update: XOR<tablesUpdateWithoutAttributeInput, tablesUncheckedUpdateWithoutAttributeInput>
    create: XOR<tablesCreateWithoutAttributeInput, tablesUncheckedCreateWithoutAttributeInput>
  }

  export type tablesUpdateWithoutAttributeInput = {
    simpleName?: StringFieldUpdateOperationsInput | string
    rowCount?: NullableIntFieldUpdateOperationsInput | number | null
    numForeignKey?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tablesUncheckedUpdateWithoutAttributeInput = {
    PK?: IntFieldUpdateOperationsInput | number
    simpleName?: StringFieldUpdateOperationsInput | string
    rowCount?: NullableIntFieldUpdateOperationsInput | number | null
    numForeignKey?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeCreateWithoutTablesInput = {
    name: string
    type: string
    description?: string | null
    pKey?: string | null
    fTable?: string | null
    pColumn?: string | null
    indexName?: string | null
    tableName?: string | null
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type AttributeUncheckedCreateWithoutTablesInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    pKey?: string | null
    fTable?: string | null
    pColumn?: string | null
    indexName?: string | null
    tableName?: string | null
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type AttributeCreateOrConnectWithoutTablesInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutTablesInput, AttributeUncheckedCreateWithoutTablesInput>
  }

  export type AttributeCreateManyTablesInputEnvelope = {
    data: Enumerable<AttributeCreateManyTablesInput>
    skipDuplicates?: boolean
  }

  export type AttributeUpsertWithWhereUniqueWithoutTablesInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutTablesInput, AttributeUncheckedUpdateWithoutTablesInput>
    create: XOR<AttributeCreateWithoutTablesInput, AttributeUncheckedCreateWithoutTablesInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutTablesInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutTablesInput, AttributeUncheckedUpdateWithoutTablesInput>
  }

  export type AttributeUpdateManyWithWhereWithoutTablesInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutAttributeInput>
  }

  export type AttributeScalarWhereInput = {
    AND?: Enumerable<AttributeScalarWhereInput>
    OR?: Enumerable<AttributeScalarWhereInput>
    NOT?: Enumerable<AttributeScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    type?: StringFilter | string
    description?: StringNullableFilter | string | null
    pKey?: StringNullableFilter | string | null
    fTable?: StringNullableFilter | string | null
    pColumn?: StringNullableFilter | string | null
    indexName?: StringNullableFilter | string | null
    tableName?: StringNullableFilter | string | null
    tableId?: IntNullableFilter | number | null
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AttributeCreateManyTablesInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    pKey?: string | null
    fTable?: string | null
    pColumn?: string | null
    indexName?: string | null
    tableName?: string | null
    createAt?: Date | string
    updatedAt: Date | string
  }

  export type AttributeUpdateWithoutTablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pKey?: NullableStringFieldUpdateOperationsInput | string | null
    fTable?: NullableStringFieldUpdateOperationsInput | string | null
    pColumn?: NullableStringFieldUpdateOperationsInput | string | null
    indexName?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUncheckedUpdateWithoutTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pKey?: NullableStringFieldUpdateOperationsInput | string | null
    fTable?: NullableStringFieldUpdateOperationsInput | string | null
    pColumn?: NullableStringFieldUpdateOperationsInput | string | null
    indexName?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUncheckedUpdateManyWithoutAttributeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pKey?: NullableStringFieldUpdateOperationsInput | string | null
    fTable?: NullableStringFieldUpdateOperationsInput | string | null
    pColumn?: NullableStringFieldUpdateOperationsInput | string | null
    indexName?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}