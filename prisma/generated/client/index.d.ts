
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Friend
 * 
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>
/**
 * Model FriendRequest
 * 
 */
export type FriendRequest = $Result.DefaultSelection<Prisma.$FriendRequestPayload>
/**
 * Model FeedbackSection
 * 
 */
export type FeedbackSection = $Result.DefaultSelection<Prisma.$FeedbackSectionPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model UserToFeedbackSection
 * 
 */
export type UserToFeedbackSection = $Result.DefaultSelection<Prisma.$UserToFeedbackSectionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<ExtArgs>;

  /**
   * `prisma.friendRequest`: Exposes CRUD operations for the **FriendRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendRequests
    * const friendRequests = await prisma.friendRequest.findMany()
    * ```
    */
  get friendRequest(): Prisma.FriendRequestDelegate<ExtArgs>;

  /**
   * `prisma.feedbackSection`: Exposes CRUD operations for the **FeedbackSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedbackSections
    * const feedbackSections = await prisma.feedbackSection.findMany()
    * ```
    */
  get feedbackSection(): Prisma.FeedbackSectionDelegate<ExtArgs>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs>;

  /**
   * `prisma.userToFeedbackSection`: Exposes CRUD operations for the **UserToFeedbackSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserToFeedbackSections
    * const userToFeedbackSections = await prisma.userToFeedbackSection.findMany()
    * ```
    */
  get userToFeedbackSection(): Prisma.UserToFeedbackSectionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Friend: 'Friend',
    FriendRequest: 'FriendRequest',
    FeedbackSection: 'FeedbackSection',
    Feedback: 'Feedback',
    UserToFeedbackSection: 'UserToFeedbackSection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'friend' | 'friendRequest' | 'feedbackSection' | 'feedback' | 'userToFeedbackSection'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>
        fields: Prisma.FriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriend>
          }
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>,
            result: $Utils.Optional<FriendCountAggregateOutputType> | number
          }
        }
      }
      FriendRequest: {
        payload: Prisma.$FriendRequestPayload<ExtArgs>
        fields: Prisma.FriendRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findFirst: {
            args: Prisma.FriendRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findMany: {
            args: Prisma.FriendRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          create: {
            args: Prisma.FriendRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          createMany: {
            args: Prisma.FriendRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FriendRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          update: {
            args: Prisma.FriendRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          deleteMany: {
            args: Prisma.FriendRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FriendRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FriendRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          aggregate: {
            args: Prisma.FriendRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriendRequest>
          }
          groupBy: {
            args: Prisma.FriendRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FriendRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<FriendRequestCountAggregateOutputType> | number
          }
        }
      }
      FeedbackSection: {
        payload: Prisma.$FeedbackSectionPayload<ExtArgs>
        fields: Prisma.FeedbackSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackSectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackSectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackSectionPayload>
          }
          findFirst: {
            args: Prisma.FeedbackSectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackSectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackSectionPayload>
          }
          findMany: {
            args: Prisma.FeedbackSectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackSectionPayload>[]
          }
          create: {
            args: Prisma.FeedbackSectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackSectionPayload>
          }
          createMany: {
            args: Prisma.FeedbackSectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeedbackSectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackSectionPayload>
          }
          update: {
            args: Prisma.FeedbackSectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackSectionPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackSectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackSectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeedbackSectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackSectionPayload>
          }
          aggregate: {
            args: Prisma.FeedbackSectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFeedbackSection>
          }
          groupBy: {
            args: Prisma.FeedbackSectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeedbackSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackSectionCountArgs<ExtArgs>,
            result: $Utils.Optional<FeedbackSectionCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>,
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      UserToFeedbackSection: {
        payload: Prisma.$UserToFeedbackSectionPayload<ExtArgs>
        fields: Prisma.UserToFeedbackSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserToFeedbackSectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserToFeedbackSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserToFeedbackSectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserToFeedbackSectionPayload>
          }
          findFirst: {
            args: Prisma.UserToFeedbackSectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserToFeedbackSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserToFeedbackSectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserToFeedbackSectionPayload>
          }
          findMany: {
            args: Prisma.UserToFeedbackSectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserToFeedbackSectionPayload>[]
          }
          create: {
            args: Prisma.UserToFeedbackSectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserToFeedbackSectionPayload>
          }
          createMany: {
            args: Prisma.UserToFeedbackSectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserToFeedbackSectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserToFeedbackSectionPayload>
          }
          update: {
            args: Prisma.UserToFeedbackSectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserToFeedbackSectionPayload>
          }
          deleteMany: {
            args: Prisma.UserToFeedbackSectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserToFeedbackSectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserToFeedbackSectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserToFeedbackSectionPayload>
          }
          aggregate: {
            args: Prisma.UserToFeedbackSectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserToFeedbackSection>
          }
          groupBy: {
            args: Prisma.UserToFeedbackSectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserToFeedbackSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserToFeedbackSectionCountArgs<ExtArgs>,
            result: $Utils.Optional<UserToFeedbackSectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    feedbackSections: number
    friendOf: number
    friends: number
    friendRequestOf: number
    friendRequest: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbackSections?: boolean | UserCountOutputTypeCountFeedbackSectionsArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    friendRequestOf?: boolean | UserCountOutputTypeCountFriendRequestOfArgs
    friendRequest?: boolean | UserCountOutputTypeCountFriendRequestArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToFeedbackSectionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendRequestOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }



  /**
   * Count Type FeedbackSectionCountOutputType
   */

  export type FeedbackSectionCountOutputType = {
    feedbacks: number
    users: number
  }

  export type FeedbackSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | FeedbackSectionCountOutputTypeCountFeedbacksArgs
    users?: boolean | FeedbackSectionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * FeedbackSectionCountOutputType without action
   */
  export type FeedbackSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSectionCountOutputType
     */
    select?: FeedbackSectionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FeedbackSectionCountOutputType without action
   */
  export type FeedbackSectionCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * FeedbackSectionCountOutputType without action
   */
  export type FeedbackSectionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToFeedbackSectionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    createDate: Date | null
    updateDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    createDate: Date | null
    updateDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    password: number
    createDate: number
    updateDate: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    createDate?: true
    updateDate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    createDate?: true
    updateDate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    createDate?: true
    updateDate?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userName: string
    email: string
    password: string | null
    createDate: Date
    updateDate: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createDate?: boolean
    updateDate?: boolean
    feedbackSections?: boolean | User$feedbackSectionsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendRequestOf?: boolean | User$friendRequestOfArgs<ExtArgs>
    friendRequest?: boolean | User$friendRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createDate?: boolean
    updateDate?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbackSections?: boolean | User$feedbackSectionsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendRequestOf?: boolean | User$friendRequestOfArgs<ExtArgs>
    friendRequest?: boolean | User$friendRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      feedbackSections: Prisma.$UserToFeedbackSectionPayload<ExtArgs>[]
      friendOf: Prisma.$FriendPayload<ExtArgs>[]
      friends: Prisma.$FriendPayload<ExtArgs>[]
      friendRequestOf: Prisma.$FriendRequestPayload<ExtArgs>[]
      friendRequest: Prisma.$FriendRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      email: string
      password: string | null
      createDate: Date
      updateDate: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    feedbackSections<T extends User$feedbackSectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbackSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'findMany'> | Null>;

    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'findMany'> | Null>;

    friendRequestOf<T extends User$friendRequestOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendRequestOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    friendRequest<T extends User$friendRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$friendRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createDate: FieldRef<"User", 'DateTime'>
    readonly updateDate: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.feedbackSections
   */
  export type User$feedbackSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    where?: UserToFeedbackSectionWhereInput
    orderBy?: UserToFeedbackSectionOrderByWithRelationInput | UserToFeedbackSectionOrderByWithRelationInput[]
    cursor?: UserToFeedbackSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserToFeedbackSectionScalarFieldEnum | UserToFeedbackSectionScalarFieldEnum[]
  }


  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }


  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }


  /**
   * User.friendRequestOf
   */
  export type User$friendRequestOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * User.friendRequest
   */
  export type User$friendRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendMinAggregateOutputType = {
    friendOfId: string | null
    friendId: string | null
  }

  export type FriendMaxAggregateOutputType = {
    friendOfId: string | null
    friendId: string | null
  }

  export type FriendCountAggregateOutputType = {
    friendOfId: number
    friendId: number
    _all: number
  }


  export type FriendMinAggregateInputType = {
    friendOfId?: true
    friendId?: true
  }

  export type FriendMaxAggregateInputType = {
    friendOfId?: true
    friendId?: true
  }

  export type FriendCountAggregateInputType = {
    friendOfId?: true
    friendId?: true
    _all?: true
  }

  export type FriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithAggregationInput | FriendOrderByWithAggregationInput[]
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }

  export type FriendGroupByOutputType = {
    friendOfId: string
    friendId: string
    _count: FriendCountAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    friendOfId?: boolean
    friendId?: boolean
    friendOf?: boolean | UserDefaultArgs<ExtArgs>
    friends?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectScalar = {
    friendOfId?: boolean
    friendId?: boolean
  }

  export type FriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friendOf?: boolean | UserDefaultArgs<ExtArgs>
    friends?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $FriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friend"
    objects: {
      friendOf: Prisma.$UserPayload<ExtArgs>
      friends: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      friendOfId: string
      friendId: string
    }, ExtArgs["result"]["friend"]>
    composites: {}
  }


  type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = $Result.GetResult<Prisma.$FriendPayload, S>

  type FriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friend'], meta: { name: 'Friend' } }
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FriendFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>
    ): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Friend that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FriendFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>
    ): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `friendOfId`
     * const friendWithFriendOfIdOnly = await prisma.friend.findMany({ select: { friendOfId: true } })
     * 
    **/
    findMany<T extends FriendFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
    **/
    create<T extends FriendCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendCreateArgs<ExtArgs>>
    ): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Friends.
     *     @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     *     @example
     *     // Create many Friends
     *     const friend = await prisma.friend.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FriendCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
    **/
    delete<T extends FriendDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>
    ): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FriendUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>
    ): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FriendDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FriendUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
    **/
    upsert<T extends FriendUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>
    ): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
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
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friend model
   */
  readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    friendOf<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    friends<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Friend model
   */ 
  interface FriendFieldRefs {
    readonly friendOfId: FieldRef<"Friend", 'String'>
    readonly friendId: FieldRef<"Friend", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }


  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }


  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }


  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }


  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }


  /**
   * Friend create
   */
  export type FriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }


  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Friend update
   */
  export type FriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }


  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
  }


  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }


  /**
   * Friend delete
   */
  export type FriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }


  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
  }


  /**
   * Friend without action
   */
  export type FriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendInclude<ExtArgs> | null
  }



  /**
   * Model FriendRequest
   */

  export type AggregateFriendRequest = {
    _count: FriendRequestCountAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  export type FriendRequestMinAggregateOutputType = {
    friendRequestOfId: string | null
    friendRequestId: string | null
  }

  export type FriendRequestMaxAggregateOutputType = {
    friendRequestOfId: string | null
    friendRequestId: string | null
  }

  export type FriendRequestCountAggregateOutputType = {
    friendRequestOfId: number
    friendRequestId: number
    _all: number
  }


  export type FriendRequestMinAggregateInputType = {
    friendRequestOfId?: true
    friendRequestId?: true
  }

  export type FriendRequestMaxAggregateInputType = {
    friendRequestOfId?: true
    friendRequestId?: true
  }

  export type FriendRequestCountAggregateInputType = {
    friendRequestOfId?: true
    friendRequestId?: true
    _all?: true
  }

  export type FriendRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequest to aggregate.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendRequests
    **/
    _count?: true | FriendRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendRequestMaxAggregateInputType
  }

  export type GetFriendRequestAggregateType<T extends FriendRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendRequest[P]>
      : GetScalarType<T[P], AggregateFriendRequest[P]>
  }




  export type FriendRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithAggregationInput | FriendRequestOrderByWithAggregationInput[]
    by: FriendRequestScalarFieldEnum[] | FriendRequestScalarFieldEnum
    having?: FriendRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendRequestCountAggregateInputType | true
    _min?: FriendRequestMinAggregateInputType
    _max?: FriendRequestMaxAggregateInputType
  }

  export type FriendRequestGroupByOutputType = {
    friendRequestOfId: string
    friendRequestId: string
    _count: FriendRequestCountAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  type GetFriendRequestGroupByPayload<T extends FriendRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
        }
      >
    >


  export type FriendRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    friendRequestOfId?: boolean
    friendRequestId?: boolean
    friendRequestOf?: boolean | UserDefaultArgs<ExtArgs>
    friendRequest?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendRequest"]>

  export type FriendRequestSelectScalar = {
    friendRequestOfId?: boolean
    friendRequestId?: boolean
  }

  export type FriendRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friendRequestOf?: boolean | UserDefaultArgs<ExtArgs>
    friendRequest?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $FriendRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FriendRequest"
    objects: {
      friendRequestOf: Prisma.$UserPayload<ExtArgs>
      friendRequest: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      friendRequestOfId: string
      friendRequestId: string
    }, ExtArgs["result"]["friendRequest"]>
    composites: {}
  }


  type FriendRequestGetPayload<S extends boolean | null | undefined | FriendRequestDefaultArgs> = $Result.GetResult<Prisma.$FriendRequestPayload, S>

  type FriendRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FriendRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FriendRequestCountAggregateInputType | true
    }

  export interface FriendRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FriendRequest'], meta: { name: 'FriendRequest' } }
    /**
     * Find zero or one FriendRequest that matches the filter.
     * @param {FriendRequestFindUniqueArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FriendRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FriendRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FriendRequestFindUniqueOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FriendRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FriendRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FriendRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindFirstArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FriendRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FriendRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FriendRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany()
     * 
     * // Get first 10 FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany({ take: 10 })
     * 
     * // Only select the `friendRequestOfId`
     * const friendRequestWithFriendRequestOfIdOnly = await prisma.friendRequest.findMany({ select: { friendRequestOfId: true } })
     * 
    **/
    findMany<T extends FriendRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FriendRequest.
     * @param {FriendRequestCreateArgs} args - Arguments to create a FriendRequest.
     * @example
     * // Create one FriendRequest
     * const FriendRequest = await prisma.friendRequest.create({
     *   data: {
     *     // ... data to create a FriendRequest
     *   }
     * })
     * 
    **/
    create<T extends FriendRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestCreateArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FriendRequests.
     *     @param {FriendRequestCreateManyArgs} args - Arguments to create many FriendRequests.
     *     @example
     *     // Create many FriendRequests
     *     const friendRequest = await prisma.friendRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FriendRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FriendRequest.
     * @param {FriendRequestDeleteArgs} args - Arguments to delete one FriendRequest.
     * @example
     * // Delete one FriendRequest
     * const FriendRequest = await prisma.friendRequest.delete({
     *   where: {
     *     // ... filter to delete one FriendRequest
     *   }
     * })
     * 
    **/
    delete<T extends FriendRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestDeleteArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FriendRequest.
     * @param {FriendRequestUpdateArgs} args - Arguments to update one FriendRequest.
     * @example
     * // Update one FriendRequest
     * const friendRequest = await prisma.friendRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FriendRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestUpdateArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FriendRequests.
     * @param {FriendRequestDeleteManyArgs} args - Arguments to filter FriendRequests to delete.
     * @example
     * // Delete a few FriendRequests
     * const { count } = await prisma.friendRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FriendRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FriendRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FriendRequest.
     * @param {FriendRequestUpsertArgs} args - Arguments to update or create a FriendRequest.
     * @example
     * // Update or create a FriendRequest
     * const friendRequest = await prisma.friendRequest.upsert({
     *   create: {
     *     // ... data to create a FriendRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendRequest we want to update
     *   }
     * })
    **/
    upsert<T extends FriendRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestUpsertArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestCountArgs} args - Arguments to filter FriendRequests to count.
     * @example
     * // Count the number of FriendRequests
     * const count = await prisma.friendRequest.count({
     *   where: {
     *     // ... the filter for the FriendRequests we want to count
     *   }
     * })
    **/
    count<T extends FriendRequestCountArgs>(
      args?: Subset<T, FriendRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendRequestAggregateArgs>(args: Subset<T, FriendRequestAggregateArgs>): Prisma.PrismaPromise<GetFriendRequestAggregateType<T>>

    /**
     * Group by FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestGroupByArgs} args - Group by arguments.
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
      T extends FriendRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendRequestGroupByArgs['orderBy'] }
        : { orderBy?: FriendRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FriendRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FriendRequest model
   */
  readonly fields: FriendRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    friendRequestOf<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    friendRequest<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FriendRequest model
   */ 
  interface FriendRequestFieldRefs {
    readonly friendRequestOfId: FieldRef<"FriendRequest", 'String'>
    readonly friendRequestId: FieldRef<"FriendRequest", 'String'>
  }
    

  // Custom InputTypes

  /**
   * FriendRequest findUnique
   */
  export type FriendRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest findUniqueOrThrow
   */
  export type FriendRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest findFirst
   */
  export type FriendRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * FriendRequest findFirstOrThrow
   */
  export type FriendRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * FriendRequest findMany
   */
  export type FriendRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequests to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * FriendRequest create
   */
  export type FriendRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a FriendRequest.
     */
    data: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
  }


  /**
   * FriendRequest createMany
   */
  export type FriendRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FriendRequest update
   */
  export type FriendRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a FriendRequest.
     */
    data: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
    /**
     * Choose, which FriendRequest to update.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest updateMany
   */
  export type FriendRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyInput>
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput
  }


  /**
   * FriendRequest upsert
   */
  export type FriendRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the FriendRequest to update in case it exists.
     */
    where: FriendRequestWhereUniqueInput
    /**
     * In case the FriendRequest found by the `where` argument doesn't exist, create a new FriendRequest with this data.
     */
    create: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
    /**
     * In case the FriendRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
  }


  /**
   * FriendRequest delete
   */
  export type FriendRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter which FriendRequest to delete.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest deleteMany
   */
  export type FriendRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequests to delete
     */
    where?: FriendRequestWhereInput
  }


  /**
   * FriendRequest without action
   */
  export type FriendRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FriendRequestInclude<ExtArgs> | null
  }



  /**
   * Model FeedbackSection
   */

  export type AggregateFeedbackSection = {
    _count: FeedbackSectionCountAggregateOutputType | null
    _min: FeedbackSectionMinAggregateOutputType | null
    _max: FeedbackSectionMaxAggregateOutputType | null
  }

  export type FeedbackSectionMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    description: string | null
    type: string | null
  }

  export type FeedbackSectionMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    description: string | null
    type: string | null
  }

  export type FeedbackSectionCountAggregateOutputType = {
    id: number
    authorId: number
    description: number
    type: number
    _all: number
  }


  export type FeedbackSectionMinAggregateInputType = {
    id?: true
    authorId?: true
    description?: true
    type?: true
  }

  export type FeedbackSectionMaxAggregateInputType = {
    id?: true
    authorId?: true
    description?: true
    type?: true
  }

  export type FeedbackSectionCountAggregateInputType = {
    id?: true
    authorId?: true
    description?: true
    type?: true
    _all?: true
  }

  export type FeedbackSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackSection to aggregate.
     */
    where?: FeedbackSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackSections to fetch.
     */
    orderBy?: FeedbackSectionOrderByWithRelationInput | FeedbackSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedbackSections
    **/
    _count?: true | FeedbackSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackSectionMaxAggregateInputType
  }

  export type GetFeedbackSectionAggregateType<T extends FeedbackSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbackSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbackSection[P]>
      : GetScalarType<T[P], AggregateFeedbackSection[P]>
  }




  export type FeedbackSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackSectionWhereInput
    orderBy?: FeedbackSectionOrderByWithAggregationInput | FeedbackSectionOrderByWithAggregationInput[]
    by: FeedbackSectionScalarFieldEnum[] | FeedbackSectionScalarFieldEnum
    having?: FeedbackSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackSectionCountAggregateInputType | true
    _min?: FeedbackSectionMinAggregateInputType
    _max?: FeedbackSectionMaxAggregateInputType
  }

  export type FeedbackSectionGroupByOutputType = {
    id: string
    authorId: string
    description: string
    type: string
    _count: FeedbackSectionCountAggregateOutputType | null
    _min: FeedbackSectionMinAggregateOutputType | null
    _max: FeedbackSectionMaxAggregateOutputType | null
  }

  type GetFeedbackSectionGroupByPayload<T extends FeedbackSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackSectionGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackSectionGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    description?: boolean
    type?: boolean
    feedbacks?: boolean | FeedbackSection$feedbacksArgs<ExtArgs>
    users?: boolean | FeedbackSection$usersArgs<ExtArgs>
    _count?: boolean | FeedbackSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackSection"]>

  export type FeedbackSectionSelectScalar = {
    id?: boolean
    authorId?: boolean
    description?: boolean
    type?: boolean
  }

  export type FeedbackSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | FeedbackSection$feedbacksArgs<ExtArgs>
    users?: boolean | FeedbackSection$usersArgs<ExtArgs>
    _count?: boolean | FeedbackSectionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FeedbackSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedbackSection"
    objects: {
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
      users: Prisma.$UserToFeedbackSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      description: string
      type: string
    }, ExtArgs["result"]["feedbackSection"]>
    composites: {}
  }


  type FeedbackSectionGetPayload<S extends boolean | null | undefined | FeedbackSectionDefaultArgs> = $Result.GetResult<Prisma.$FeedbackSectionPayload, S>

  type FeedbackSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeedbackSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeedbackSectionCountAggregateInputType | true
    }

  export interface FeedbackSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedbackSection'], meta: { name: 'FeedbackSection' } }
    /**
     * Find zero or one FeedbackSection that matches the filter.
     * @param {FeedbackSectionFindUniqueArgs} args - Arguments to find a FeedbackSection
     * @example
     * // Get one FeedbackSection
     * const feedbackSection = await prisma.feedbackSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedbackSectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackSectionFindUniqueArgs<ExtArgs>>
    ): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FeedbackSection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeedbackSectionFindUniqueOrThrowArgs} args - Arguments to find a FeedbackSection
     * @example
     * // Get one FeedbackSection
     * const feedbackSection = await prisma.feedbackSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeedbackSectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackSectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FeedbackSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackSectionFindFirstArgs} args - Arguments to find a FeedbackSection
     * @example
     * // Get one FeedbackSection
     * const feedbackSection = await prisma.feedbackSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedbackSectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackSectionFindFirstArgs<ExtArgs>>
    ): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FeedbackSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackSectionFindFirstOrThrowArgs} args - Arguments to find a FeedbackSection
     * @example
     * // Get one FeedbackSection
     * const feedbackSection = await prisma.feedbackSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeedbackSectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackSectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FeedbackSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackSectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedbackSections
     * const feedbackSections = await prisma.feedbackSection.findMany()
     * 
     * // Get first 10 FeedbackSections
     * const feedbackSections = await prisma.feedbackSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackSectionWithIdOnly = await prisma.feedbackSection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedbackSectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackSectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FeedbackSection.
     * @param {FeedbackSectionCreateArgs} args - Arguments to create a FeedbackSection.
     * @example
     * // Create one FeedbackSection
     * const FeedbackSection = await prisma.feedbackSection.create({
     *   data: {
     *     // ... data to create a FeedbackSection
     *   }
     * })
     * 
    **/
    create<T extends FeedbackSectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackSectionCreateArgs<ExtArgs>>
    ): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FeedbackSections.
     *     @param {FeedbackSectionCreateManyArgs} args - Arguments to create many FeedbackSections.
     *     @example
     *     // Create many FeedbackSections
     *     const feedbackSection = await prisma.feedbackSection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedbackSectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackSectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeedbackSection.
     * @param {FeedbackSectionDeleteArgs} args - Arguments to delete one FeedbackSection.
     * @example
     * // Delete one FeedbackSection
     * const FeedbackSection = await prisma.feedbackSection.delete({
     *   where: {
     *     // ... filter to delete one FeedbackSection
     *   }
     * })
     * 
    **/
    delete<T extends FeedbackSectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackSectionDeleteArgs<ExtArgs>>
    ): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FeedbackSection.
     * @param {FeedbackSectionUpdateArgs} args - Arguments to update one FeedbackSection.
     * @example
     * // Update one FeedbackSection
     * const feedbackSection = await prisma.feedbackSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedbackSectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackSectionUpdateArgs<ExtArgs>>
    ): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FeedbackSections.
     * @param {FeedbackSectionDeleteManyArgs} args - Arguments to filter FeedbackSections to delete.
     * @example
     * // Delete a few FeedbackSections
     * const { count } = await prisma.feedbackSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedbackSectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackSectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedbackSections
     * const feedbackSection = await prisma.feedbackSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedbackSectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackSectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeedbackSection.
     * @param {FeedbackSectionUpsertArgs} args - Arguments to update or create a FeedbackSection.
     * @example
     * // Update or create a FeedbackSection
     * const feedbackSection = await prisma.feedbackSection.upsert({
     *   create: {
     *     // ... data to create a FeedbackSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedbackSection we want to update
     *   }
     * })
    **/
    upsert<T extends FeedbackSectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackSectionUpsertArgs<ExtArgs>>
    ): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FeedbackSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackSectionCountArgs} args - Arguments to filter FeedbackSections to count.
     * @example
     * // Count the number of FeedbackSections
     * const count = await prisma.feedbackSection.count({
     *   where: {
     *     // ... the filter for the FeedbackSections we want to count
     *   }
     * })
    **/
    count<T extends FeedbackSectionCountArgs>(
      args?: Subset<T, FeedbackSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedbackSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackSectionAggregateArgs>(args: Subset<T, FeedbackSectionAggregateArgs>): Prisma.PrismaPromise<GetFeedbackSectionAggregateType<T>>

    /**
     * Group by FeedbackSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackSectionGroupByArgs} args - Group by arguments.
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
      T extends FeedbackSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackSectionGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FeedbackSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedbackSection model
   */
  readonly fields: FeedbackSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedbackSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    feedbacks<T extends FeedbackSection$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, FeedbackSection$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findMany'> | Null>;

    users<T extends FeedbackSection$usersArgs<ExtArgs> = {}>(args?: Subset<T, FeedbackSection$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FeedbackSection model
   */ 
  interface FeedbackSectionFieldRefs {
    readonly id: FieldRef<"FeedbackSection", 'String'>
    readonly authorId: FieldRef<"FeedbackSection", 'String'>
    readonly description: FieldRef<"FeedbackSection", 'String'>
    readonly type: FieldRef<"FeedbackSection", 'String'>
  }
    

  // Custom InputTypes

  /**
   * FeedbackSection findUnique
   */
  export type FeedbackSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackSection to fetch.
     */
    where: FeedbackSectionWhereUniqueInput
  }


  /**
   * FeedbackSection findUniqueOrThrow
   */
  export type FeedbackSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackSection to fetch.
     */
    where: FeedbackSectionWhereUniqueInput
  }


  /**
   * FeedbackSection findFirst
   */
  export type FeedbackSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackSection to fetch.
     */
    where?: FeedbackSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackSections to fetch.
     */
    orderBy?: FeedbackSectionOrderByWithRelationInput | FeedbackSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackSections.
     */
    cursor?: FeedbackSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackSections.
     */
    distinct?: FeedbackSectionScalarFieldEnum | FeedbackSectionScalarFieldEnum[]
  }


  /**
   * FeedbackSection findFirstOrThrow
   */
  export type FeedbackSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackSection to fetch.
     */
    where?: FeedbackSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackSections to fetch.
     */
    orderBy?: FeedbackSectionOrderByWithRelationInput | FeedbackSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackSections.
     */
    cursor?: FeedbackSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackSections.
     */
    distinct?: FeedbackSectionScalarFieldEnum | FeedbackSectionScalarFieldEnum[]
  }


  /**
   * FeedbackSection findMany
   */
  export type FeedbackSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackSections to fetch.
     */
    where?: FeedbackSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackSections to fetch.
     */
    orderBy?: FeedbackSectionOrderByWithRelationInput | FeedbackSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedbackSections.
     */
    cursor?: FeedbackSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackSections.
     */
    skip?: number
    distinct?: FeedbackSectionScalarFieldEnum | FeedbackSectionScalarFieldEnum[]
  }


  /**
   * FeedbackSection create
   */
  export type FeedbackSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedbackSection.
     */
    data: XOR<FeedbackSectionCreateInput, FeedbackSectionUncheckedCreateInput>
  }


  /**
   * FeedbackSection createMany
   */
  export type FeedbackSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedbackSections.
     */
    data: FeedbackSectionCreateManyInput | FeedbackSectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FeedbackSection update
   */
  export type FeedbackSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedbackSection.
     */
    data: XOR<FeedbackSectionUpdateInput, FeedbackSectionUncheckedUpdateInput>
    /**
     * Choose, which FeedbackSection to update.
     */
    where: FeedbackSectionWhereUniqueInput
  }


  /**
   * FeedbackSection updateMany
   */
  export type FeedbackSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedbackSections.
     */
    data: XOR<FeedbackSectionUpdateManyMutationInput, FeedbackSectionUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackSections to update
     */
    where?: FeedbackSectionWhereInput
  }


  /**
   * FeedbackSection upsert
   */
  export type FeedbackSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedbackSection to update in case it exists.
     */
    where: FeedbackSectionWhereUniqueInput
    /**
     * In case the FeedbackSection found by the `where` argument doesn't exist, create a new FeedbackSection with this data.
     */
    create: XOR<FeedbackSectionCreateInput, FeedbackSectionUncheckedCreateInput>
    /**
     * In case the FeedbackSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackSectionUpdateInput, FeedbackSectionUncheckedUpdateInput>
  }


  /**
   * FeedbackSection delete
   */
  export type FeedbackSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter which FeedbackSection to delete.
     */
    where: FeedbackSectionWhereUniqueInput
  }


  /**
   * FeedbackSection deleteMany
   */
  export type FeedbackSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackSections to delete
     */
    where?: FeedbackSectionWhereInput
  }


  /**
   * FeedbackSection.feedbacks
   */
  export type FeedbackSection$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }


  /**
   * FeedbackSection.users
   */
  export type FeedbackSection$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    where?: UserToFeedbackSectionWhereInput
    orderBy?: UserToFeedbackSectionOrderByWithRelationInput | UserToFeedbackSectionOrderByWithRelationInput[]
    cursor?: UserToFeedbackSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserToFeedbackSectionScalarFieldEnum | UserToFeedbackSectionScalarFieldEnum[]
  }


  /**
   * FeedbackSection without action
   */
  export type FeedbackSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackSection
     */
    select?: FeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackSectionInclude<ExtArgs> | null
  }



  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    name: string | null
    feedbackSectionId: string | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    name: string | null
    feedbackSectionId: string | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    name: number
    feedbackSectionId: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    id?: true
    name?: true
    feedbackSectionId?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    name?: true
    feedbackSectionId?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    name?: true
    feedbackSectionId?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    name: string
    feedbackSectionId: string
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    feedbackSectionId?: boolean
    feedbackSection?: boolean | FeedbackSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    name?: boolean
    feedbackSectionId?: boolean
  }

  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbackSection?: boolean | FeedbackSectionDefaultArgs<ExtArgs>
  }


  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      feedbackSection: Prisma.$FeedbackSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      feedbackSectionId: string
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }


  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedbackFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Feedback that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedbackFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedbackFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
    **/
    create<T extends FeedbackCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Feedbacks.
     *     @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     *     @example
     *     // Create many Feedbacks
     *     const feedback = await prisma.feedback.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedbackCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
    **/
    delete<T extends FeedbackDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedbackUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedbackDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedbackUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
    **/
    upsert<T extends FeedbackUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    feedbackSection<T extends FeedbackSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeedbackSectionDefaultArgs<ExtArgs>>): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Feedback model
   */ 
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly name: FieldRef<"Feedback", 'String'>
    readonly feedbackSectionId: FieldRef<"Feedback", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }


  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }


  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }


  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }


  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
  }


  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }


  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
  }


  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude<ExtArgs> | null
  }



  /**
   * Model UserToFeedbackSection
   */

  export type AggregateUserToFeedbackSection = {
    _count: UserToFeedbackSectionCountAggregateOutputType | null
    _min: UserToFeedbackSectionMinAggregateOutputType | null
    _max: UserToFeedbackSectionMaxAggregateOutputType | null
  }

  export type UserToFeedbackSectionMinAggregateOutputType = {
    userId: string | null
    feedbackSectionId: string | null
    role: string | null
  }

  export type UserToFeedbackSectionMaxAggregateOutputType = {
    userId: string | null
    feedbackSectionId: string | null
    role: string | null
  }

  export type UserToFeedbackSectionCountAggregateOutputType = {
    userId: number
    feedbackSectionId: number
    role: number
    _all: number
  }


  export type UserToFeedbackSectionMinAggregateInputType = {
    userId?: true
    feedbackSectionId?: true
    role?: true
  }

  export type UserToFeedbackSectionMaxAggregateInputType = {
    userId?: true
    feedbackSectionId?: true
    role?: true
  }

  export type UserToFeedbackSectionCountAggregateInputType = {
    userId?: true
    feedbackSectionId?: true
    role?: true
    _all?: true
  }

  export type UserToFeedbackSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToFeedbackSection to aggregate.
     */
    where?: UserToFeedbackSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToFeedbackSections to fetch.
     */
    orderBy?: UserToFeedbackSectionOrderByWithRelationInput | UserToFeedbackSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserToFeedbackSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToFeedbackSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToFeedbackSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserToFeedbackSections
    **/
    _count?: true | UserToFeedbackSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserToFeedbackSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserToFeedbackSectionMaxAggregateInputType
  }

  export type GetUserToFeedbackSectionAggregateType<T extends UserToFeedbackSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserToFeedbackSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserToFeedbackSection[P]>
      : GetScalarType<T[P], AggregateUserToFeedbackSection[P]>
  }




  export type UserToFeedbackSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToFeedbackSectionWhereInput
    orderBy?: UserToFeedbackSectionOrderByWithAggregationInput | UserToFeedbackSectionOrderByWithAggregationInput[]
    by: UserToFeedbackSectionScalarFieldEnum[] | UserToFeedbackSectionScalarFieldEnum
    having?: UserToFeedbackSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserToFeedbackSectionCountAggregateInputType | true
    _min?: UserToFeedbackSectionMinAggregateInputType
    _max?: UserToFeedbackSectionMaxAggregateInputType
  }

  export type UserToFeedbackSectionGroupByOutputType = {
    userId: string
    feedbackSectionId: string
    role: string
    _count: UserToFeedbackSectionCountAggregateOutputType | null
    _min: UserToFeedbackSectionMinAggregateOutputType | null
    _max: UserToFeedbackSectionMaxAggregateOutputType | null
  }

  type GetUserToFeedbackSectionGroupByPayload<T extends UserToFeedbackSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserToFeedbackSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserToFeedbackSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserToFeedbackSectionGroupByOutputType[P]>
            : GetScalarType<T[P], UserToFeedbackSectionGroupByOutputType[P]>
        }
      >
    >


  export type UserToFeedbackSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    feedbackSectionId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    feedbackSection?: boolean | FeedbackSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToFeedbackSection"]>

  export type UserToFeedbackSectionSelectScalar = {
    userId?: boolean
    feedbackSectionId?: boolean
    role?: boolean
  }

  export type UserToFeedbackSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    feedbackSection?: boolean | FeedbackSectionDefaultArgs<ExtArgs>
  }


  export type $UserToFeedbackSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserToFeedbackSection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      feedbackSection: Prisma.$FeedbackSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      feedbackSectionId: string
      role: string
    }, ExtArgs["result"]["userToFeedbackSection"]>
    composites: {}
  }


  type UserToFeedbackSectionGetPayload<S extends boolean | null | undefined | UserToFeedbackSectionDefaultArgs> = $Result.GetResult<Prisma.$UserToFeedbackSectionPayload, S>

  type UserToFeedbackSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserToFeedbackSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserToFeedbackSectionCountAggregateInputType | true
    }

  export interface UserToFeedbackSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserToFeedbackSection'], meta: { name: 'UserToFeedbackSection' } }
    /**
     * Find zero or one UserToFeedbackSection that matches the filter.
     * @param {UserToFeedbackSectionFindUniqueArgs} args - Arguments to find a UserToFeedbackSection
     * @example
     * // Get one UserToFeedbackSection
     * const userToFeedbackSection = await prisma.userToFeedbackSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserToFeedbackSectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserToFeedbackSectionFindUniqueArgs<ExtArgs>>
    ): Prisma__UserToFeedbackSectionClient<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserToFeedbackSection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserToFeedbackSectionFindUniqueOrThrowArgs} args - Arguments to find a UserToFeedbackSection
     * @example
     * // Get one UserToFeedbackSection
     * const userToFeedbackSection = await prisma.userToFeedbackSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserToFeedbackSectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserToFeedbackSectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserToFeedbackSectionClient<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserToFeedbackSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToFeedbackSectionFindFirstArgs} args - Arguments to find a UserToFeedbackSection
     * @example
     * // Get one UserToFeedbackSection
     * const userToFeedbackSection = await prisma.userToFeedbackSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserToFeedbackSectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserToFeedbackSectionFindFirstArgs<ExtArgs>>
    ): Prisma__UserToFeedbackSectionClient<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserToFeedbackSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToFeedbackSectionFindFirstOrThrowArgs} args - Arguments to find a UserToFeedbackSection
     * @example
     * // Get one UserToFeedbackSection
     * const userToFeedbackSection = await prisma.userToFeedbackSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserToFeedbackSectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserToFeedbackSectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserToFeedbackSectionClient<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserToFeedbackSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToFeedbackSectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserToFeedbackSections
     * const userToFeedbackSections = await prisma.userToFeedbackSection.findMany()
     * 
     * // Get first 10 UserToFeedbackSections
     * const userToFeedbackSections = await prisma.userToFeedbackSection.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userToFeedbackSectionWithUserIdOnly = await prisma.userToFeedbackSection.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserToFeedbackSectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserToFeedbackSectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserToFeedbackSection.
     * @param {UserToFeedbackSectionCreateArgs} args - Arguments to create a UserToFeedbackSection.
     * @example
     * // Create one UserToFeedbackSection
     * const UserToFeedbackSection = await prisma.userToFeedbackSection.create({
     *   data: {
     *     // ... data to create a UserToFeedbackSection
     *   }
     * })
     * 
    **/
    create<T extends UserToFeedbackSectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserToFeedbackSectionCreateArgs<ExtArgs>>
    ): Prisma__UserToFeedbackSectionClient<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserToFeedbackSections.
     *     @param {UserToFeedbackSectionCreateManyArgs} args - Arguments to create many UserToFeedbackSections.
     *     @example
     *     // Create many UserToFeedbackSections
     *     const userToFeedbackSection = await prisma.userToFeedbackSection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserToFeedbackSectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserToFeedbackSectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserToFeedbackSection.
     * @param {UserToFeedbackSectionDeleteArgs} args - Arguments to delete one UserToFeedbackSection.
     * @example
     * // Delete one UserToFeedbackSection
     * const UserToFeedbackSection = await prisma.userToFeedbackSection.delete({
     *   where: {
     *     // ... filter to delete one UserToFeedbackSection
     *   }
     * })
     * 
    **/
    delete<T extends UserToFeedbackSectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserToFeedbackSectionDeleteArgs<ExtArgs>>
    ): Prisma__UserToFeedbackSectionClient<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserToFeedbackSection.
     * @param {UserToFeedbackSectionUpdateArgs} args - Arguments to update one UserToFeedbackSection.
     * @example
     * // Update one UserToFeedbackSection
     * const userToFeedbackSection = await prisma.userToFeedbackSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserToFeedbackSectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserToFeedbackSectionUpdateArgs<ExtArgs>>
    ): Prisma__UserToFeedbackSectionClient<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserToFeedbackSections.
     * @param {UserToFeedbackSectionDeleteManyArgs} args - Arguments to filter UserToFeedbackSections to delete.
     * @example
     * // Delete a few UserToFeedbackSections
     * const { count } = await prisma.userToFeedbackSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserToFeedbackSectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserToFeedbackSectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserToFeedbackSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToFeedbackSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserToFeedbackSections
     * const userToFeedbackSection = await prisma.userToFeedbackSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserToFeedbackSectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserToFeedbackSectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserToFeedbackSection.
     * @param {UserToFeedbackSectionUpsertArgs} args - Arguments to update or create a UserToFeedbackSection.
     * @example
     * // Update or create a UserToFeedbackSection
     * const userToFeedbackSection = await prisma.userToFeedbackSection.upsert({
     *   create: {
     *     // ... data to create a UserToFeedbackSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserToFeedbackSection we want to update
     *   }
     * })
    **/
    upsert<T extends UserToFeedbackSectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserToFeedbackSectionUpsertArgs<ExtArgs>>
    ): Prisma__UserToFeedbackSectionClient<$Result.GetResult<Prisma.$UserToFeedbackSectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserToFeedbackSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToFeedbackSectionCountArgs} args - Arguments to filter UserToFeedbackSections to count.
     * @example
     * // Count the number of UserToFeedbackSections
     * const count = await prisma.userToFeedbackSection.count({
     *   where: {
     *     // ... the filter for the UserToFeedbackSections we want to count
     *   }
     * })
    **/
    count<T extends UserToFeedbackSectionCountArgs>(
      args?: Subset<T, UserToFeedbackSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserToFeedbackSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserToFeedbackSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToFeedbackSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserToFeedbackSectionAggregateArgs>(args: Subset<T, UserToFeedbackSectionAggregateArgs>): Prisma.PrismaPromise<GetUserToFeedbackSectionAggregateType<T>>

    /**
     * Group by UserToFeedbackSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToFeedbackSectionGroupByArgs} args - Group by arguments.
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
      T extends UserToFeedbackSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserToFeedbackSectionGroupByArgs['orderBy'] }
        : { orderBy?: UserToFeedbackSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserToFeedbackSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserToFeedbackSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserToFeedbackSection model
   */
  readonly fields: UserToFeedbackSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserToFeedbackSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserToFeedbackSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    feedbackSection<T extends FeedbackSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeedbackSectionDefaultArgs<ExtArgs>>): Prisma__FeedbackSectionClient<$Result.GetResult<Prisma.$FeedbackSectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserToFeedbackSection model
   */ 
  interface UserToFeedbackSectionFieldRefs {
    readonly userId: FieldRef<"UserToFeedbackSection", 'String'>
    readonly feedbackSectionId: FieldRef<"UserToFeedbackSection", 'String'>
    readonly role: FieldRef<"UserToFeedbackSection", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserToFeedbackSection findUnique
   */
  export type UserToFeedbackSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which UserToFeedbackSection to fetch.
     */
    where: UserToFeedbackSectionWhereUniqueInput
  }


  /**
   * UserToFeedbackSection findUniqueOrThrow
   */
  export type UserToFeedbackSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which UserToFeedbackSection to fetch.
     */
    where: UserToFeedbackSectionWhereUniqueInput
  }


  /**
   * UserToFeedbackSection findFirst
   */
  export type UserToFeedbackSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which UserToFeedbackSection to fetch.
     */
    where?: UserToFeedbackSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToFeedbackSections to fetch.
     */
    orderBy?: UserToFeedbackSectionOrderByWithRelationInput | UserToFeedbackSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserToFeedbackSections.
     */
    cursor?: UserToFeedbackSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToFeedbackSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToFeedbackSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserToFeedbackSections.
     */
    distinct?: UserToFeedbackSectionScalarFieldEnum | UserToFeedbackSectionScalarFieldEnum[]
  }


  /**
   * UserToFeedbackSection findFirstOrThrow
   */
  export type UserToFeedbackSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which UserToFeedbackSection to fetch.
     */
    where?: UserToFeedbackSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToFeedbackSections to fetch.
     */
    orderBy?: UserToFeedbackSectionOrderByWithRelationInput | UserToFeedbackSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserToFeedbackSections.
     */
    cursor?: UserToFeedbackSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToFeedbackSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToFeedbackSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserToFeedbackSections.
     */
    distinct?: UserToFeedbackSectionScalarFieldEnum | UserToFeedbackSectionScalarFieldEnum[]
  }


  /**
   * UserToFeedbackSection findMany
   */
  export type UserToFeedbackSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter, which UserToFeedbackSections to fetch.
     */
    where?: UserToFeedbackSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToFeedbackSections to fetch.
     */
    orderBy?: UserToFeedbackSectionOrderByWithRelationInput | UserToFeedbackSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserToFeedbackSections.
     */
    cursor?: UserToFeedbackSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToFeedbackSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToFeedbackSections.
     */
    skip?: number
    distinct?: UserToFeedbackSectionScalarFieldEnum | UserToFeedbackSectionScalarFieldEnum[]
  }


  /**
   * UserToFeedbackSection create
   */
  export type UserToFeedbackSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserToFeedbackSection.
     */
    data: XOR<UserToFeedbackSectionCreateInput, UserToFeedbackSectionUncheckedCreateInput>
  }


  /**
   * UserToFeedbackSection createMany
   */
  export type UserToFeedbackSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserToFeedbackSections.
     */
    data: UserToFeedbackSectionCreateManyInput | UserToFeedbackSectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserToFeedbackSection update
   */
  export type UserToFeedbackSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserToFeedbackSection.
     */
    data: XOR<UserToFeedbackSectionUpdateInput, UserToFeedbackSectionUncheckedUpdateInput>
    /**
     * Choose, which UserToFeedbackSection to update.
     */
    where: UserToFeedbackSectionWhereUniqueInput
  }


  /**
   * UserToFeedbackSection updateMany
   */
  export type UserToFeedbackSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserToFeedbackSections.
     */
    data: XOR<UserToFeedbackSectionUpdateManyMutationInput, UserToFeedbackSectionUncheckedUpdateManyInput>
    /**
     * Filter which UserToFeedbackSections to update
     */
    where?: UserToFeedbackSectionWhereInput
  }


  /**
   * UserToFeedbackSection upsert
   */
  export type UserToFeedbackSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserToFeedbackSection to update in case it exists.
     */
    where: UserToFeedbackSectionWhereUniqueInput
    /**
     * In case the UserToFeedbackSection found by the `where` argument doesn't exist, create a new UserToFeedbackSection with this data.
     */
    create: XOR<UserToFeedbackSectionCreateInput, UserToFeedbackSectionUncheckedCreateInput>
    /**
     * In case the UserToFeedbackSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserToFeedbackSectionUpdateInput, UserToFeedbackSectionUncheckedUpdateInput>
  }


  /**
   * UserToFeedbackSection delete
   */
  export type UserToFeedbackSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
    /**
     * Filter which UserToFeedbackSection to delete.
     */
    where: UserToFeedbackSectionWhereUniqueInput
  }


  /**
   * UserToFeedbackSection deleteMany
   */
  export type UserToFeedbackSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToFeedbackSections to delete
     */
    where?: UserToFeedbackSectionWhereInput
  }


  /**
   * UserToFeedbackSection without action
   */
  export type UserToFeedbackSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToFeedbackSection
     */
    select?: UserToFeedbackSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToFeedbackSectionInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    password: 'password',
    createDate: 'createDate',
    updateDate: 'updateDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    friendOfId: 'friendOfId',
    friendId: 'friendId'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const FriendRequestScalarFieldEnum: {
    friendRequestOfId: 'friendRequestOfId',
    friendRequestId: 'friendRequestId'
  };

  export type FriendRequestScalarFieldEnum = (typeof FriendRequestScalarFieldEnum)[keyof typeof FriendRequestScalarFieldEnum]


  export const FeedbackSectionScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    description: 'description',
    type: 'type'
  };

  export type FeedbackSectionScalarFieldEnum = (typeof FeedbackSectionScalarFieldEnum)[keyof typeof FeedbackSectionScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    name: 'name',
    feedbackSectionId: 'feedbackSectionId'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const UserToFeedbackSectionScalarFieldEnum: {
    userId: 'userId',
    feedbackSectionId: 'feedbackSectionId',
    role: 'role'
  };

  export type UserToFeedbackSectionScalarFieldEnum = (typeof UserToFeedbackSectionScalarFieldEnum)[keyof typeof UserToFeedbackSectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createDate?: DateTimeFilter<"User"> | Date | string
    updateDate?: DateTimeFilter<"User"> | Date | string
    feedbackSections?: UserToFeedbackSectionListRelationFilter
    friendOf?: FriendListRelationFilter
    friends?: FriendListRelationFilter
    friendRequestOf?: FriendRequestListRelationFilter
    friendRequest?: FriendRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    feedbackSections?: UserToFeedbackSectionOrderByRelationAggregateInput
    friendOf?: FriendOrderByRelationAggregateInput
    friends?: FriendOrderByRelationAggregateInput
    friendRequestOf?: FriendRequestOrderByRelationAggregateInput
    friendRequest?: FriendRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createDate?: DateTimeFilter<"User"> | Date | string
    updateDate?: DateTimeFilter<"User"> | Date | string
    feedbackSections?: UserToFeedbackSectionListRelationFilter
    friendOf?: FriendListRelationFilter
    friends?: FriendListRelationFilter
    friendRequestOf?: FriendRequestListRelationFilter
    friendRequest?: FriendRequestListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    friendOfId?: StringFilter<"Friend"> | string
    friendId?: StringFilter<"Friend"> | string
    friendOf?: XOR<UserRelationFilter, UserWhereInput>
    friends?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FriendOrderByWithRelationInput = {
    friendOfId?: SortOrder
    friendId?: SortOrder
    friendOf?: UserOrderByWithRelationInput
    friends?: UserOrderByWithRelationInput
  }

  export type FriendWhereUniqueInput = Prisma.AtLeast<{
    friendId_friendOfId?: FriendFriendIdFriendOfIdCompoundUniqueInput
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    friendOfId?: StringFilter<"Friend"> | string
    friendId?: StringFilter<"Friend"> | string
    friendOf?: XOR<UserRelationFilter, UserWhereInput>
    friends?: XOR<UserRelationFilter, UserWhereInput>
  }, "friendId_friendOfId">

  export type FriendOrderByWithAggregationInput = {
    friendOfId?: SortOrder
    friendId?: SortOrder
    _count?: FriendCountOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    OR?: FriendScalarWhereWithAggregatesInput[]
    NOT?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    friendOfId?: StringWithAggregatesFilter<"Friend"> | string
    friendId?: StringWithAggregatesFilter<"Friend"> | string
  }

  export type FriendRequestWhereInput = {
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    friendRequestOfId?: StringFilter<"FriendRequest"> | string
    friendRequestId?: StringFilter<"FriendRequest"> | string
    friendRequestOf?: XOR<UserRelationFilter, UserWhereInput>
    friendRequest?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FriendRequestOrderByWithRelationInput = {
    friendRequestOfId?: SortOrder
    friendRequestId?: SortOrder
    friendRequestOf?: UserOrderByWithRelationInput
    friendRequest?: UserOrderByWithRelationInput
  }

  export type FriendRequestWhereUniqueInput = Prisma.AtLeast<{
    friendRequestId_friendRequestOfId?: FriendRequestFriendRequestIdFriendRequestOfIdCompoundUniqueInput
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    friendRequestOfId?: StringFilter<"FriendRequest"> | string
    friendRequestId?: StringFilter<"FriendRequest"> | string
    friendRequestOf?: XOR<UserRelationFilter, UserWhereInput>
    friendRequest?: XOR<UserRelationFilter, UserWhereInput>
  }, "friendRequestId_friendRequestOfId">

  export type FriendRequestOrderByWithAggregationInput = {
    friendRequestOfId?: SortOrder
    friendRequestId?: SortOrder
    _count?: FriendRequestCountOrderByAggregateInput
    _max?: FriendRequestMaxOrderByAggregateInput
    _min?: FriendRequestMinOrderByAggregateInput
  }

  export type FriendRequestScalarWhereWithAggregatesInput = {
    AND?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    OR?: FriendRequestScalarWhereWithAggregatesInput[]
    NOT?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    friendRequestOfId?: StringWithAggregatesFilter<"FriendRequest"> | string
    friendRequestId?: StringWithAggregatesFilter<"FriendRequest"> | string
  }

  export type FeedbackSectionWhereInput = {
    AND?: FeedbackSectionWhereInput | FeedbackSectionWhereInput[]
    OR?: FeedbackSectionWhereInput[]
    NOT?: FeedbackSectionWhereInput | FeedbackSectionWhereInput[]
    id?: StringFilter<"FeedbackSection"> | string
    authorId?: StringFilter<"FeedbackSection"> | string
    description?: StringFilter<"FeedbackSection"> | string
    type?: StringFilter<"FeedbackSection"> | string
    feedbacks?: FeedbackListRelationFilter
    users?: UserToFeedbackSectionListRelationFilter
  }

  export type FeedbackSectionOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    description?: SortOrder
    type?: SortOrder
    feedbacks?: FeedbackOrderByRelationAggregateInput
    users?: UserToFeedbackSectionOrderByRelationAggregateInput
  }

  export type FeedbackSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackSectionWhereInput | FeedbackSectionWhereInput[]
    OR?: FeedbackSectionWhereInput[]
    NOT?: FeedbackSectionWhereInput | FeedbackSectionWhereInput[]
    authorId?: StringFilter<"FeedbackSection"> | string
    description?: StringFilter<"FeedbackSection"> | string
    type?: StringFilter<"FeedbackSection"> | string
    feedbacks?: FeedbackListRelationFilter
    users?: UserToFeedbackSectionListRelationFilter
  }, "id">

  export type FeedbackSectionOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    description?: SortOrder
    type?: SortOrder
    _count?: FeedbackSectionCountOrderByAggregateInput
    _max?: FeedbackSectionMaxOrderByAggregateInput
    _min?: FeedbackSectionMinOrderByAggregateInput
  }

  export type FeedbackSectionScalarWhereWithAggregatesInput = {
    AND?: FeedbackSectionScalarWhereWithAggregatesInput | FeedbackSectionScalarWhereWithAggregatesInput[]
    OR?: FeedbackSectionScalarWhereWithAggregatesInput[]
    NOT?: FeedbackSectionScalarWhereWithAggregatesInput | FeedbackSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeedbackSection"> | string
    authorId?: StringWithAggregatesFilter<"FeedbackSection"> | string
    description?: StringWithAggregatesFilter<"FeedbackSection"> | string
    type?: StringWithAggregatesFilter<"FeedbackSection"> | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    name?: StringFilter<"Feedback"> | string
    feedbackSectionId?: StringFilter<"Feedback"> | string
    feedbackSection?: XOR<FeedbackSectionRelationFilter, FeedbackSectionWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    feedbackSectionId?: SortOrder
    feedbackSection?: FeedbackSectionOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    name?: StringFilter<"Feedback"> | string
    feedbackSectionId?: StringFilter<"Feedback"> | string
    feedbackSection?: XOR<FeedbackSectionRelationFilter, FeedbackSectionWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    feedbackSectionId?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    name?: StringWithAggregatesFilter<"Feedback"> | string
    feedbackSectionId?: StringWithAggregatesFilter<"Feedback"> | string
  }

  export type UserToFeedbackSectionWhereInput = {
    AND?: UserToFeedbackSectionWhereInput | UserToFeedbackSectionWhereInput[]
    OR?: UserToFeedbackSectionWhereInput[]
    NOT?: UserToFeedbackSectionWhereInput | UserToFeedbackSectionWhereInput[]
    userId?: StringFilter<"UserToFeedbackSection"> | string
    feedbackSectionId?: StringFilter<"UserToFeedbackSection"> | string
    role?: StringFilter<"UserToFeedbackSection"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    feedbackSection?: XOR<FeedbackSectionRelationFilter, FeedbackSectionWhereInput>
  }

  export type UserToFeedbackSectionOrderByWithRelationInput = {
    userId?: SortOrder
    feedbackSectionId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    feedbackSection?: FeedbackSectionOrderByWithRelationInput
  }

  export type UserToFeedbackSectionWhereUniqueInput = Prisma.AtLeast<{
    userId_feedbackSectionId?: UserToFeedbackSectionUserIdFeedbackSectionIdCompoundUniqueInput
    AND?: UserToFeedbackSectionWhereInput | UserToFeedbackSectionWhereInput[]
    OR?: UserToFeedbackSectionWhereInput[]
    NOT?: UserToFeedbackSectionWhereInput | UserToFeedbackSectionWhereInput[]
    userId?: StringFilter<"UserToFeedbackSection"> | string
    feedbackSectionId?: StringFilter<"UserToFeedbackSection"> | string
    role?: StringFilter<"UserToFeedbackSection"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    feedbackSection?: XOR<FeedbackSectionRelationFilter, FeedbackSectionWhereInput>
  }, "userId_feedbackSectionId">

  export type UserToFeedbackSectionOrderByWithAggregationInput = {
    userId?: SortOrder
    feedbackSectionId?: SortOrder
    role?: SortOrder
    _count?: UserToFeedbackSectionCountOrderByAggregateInput
    _max?: UserToFeedbackSectionMaxOrderByAggregateInput
    _min?: UserToFeedbackSectionMinOrderByAggregateInput
  }

  export type UserToFeedbackSectionScalarWhereWithAggregatesInput = {
    AND?: UserToFeedbackSectionScalarWhereWithAggregatesInput | UserToFeedbackSectionScalarWhereWithAggregatesInput[]
    OR?: UserToFeedbackSectionScalarWhereWithAggregatesInput[]
    NOT?: UserToFeedbackSectionScalarWhereWithAggregatesInput | UserToFeedbackSectionScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserToFeedbackSection"> | string
    feedbackSectionId?: StringWithAggregatesFilter<"UserToFeedbackSection"> | string
    role?: StringWithAggregatesFilter<"UserToFeedbackSection"> | string
  }

  export type UserCreateInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendOfInput
    friends?: FriendCreateNestedManyWithoutFriendsInput
    friendRequestOf?: FriendRequestCreateNestedManyWithoutFriendRequestOfInput
    friendRequest?: FriendRequestCreateNestedManyWithoutFriendRequestInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendOfInput
    friends?: FriendUncheckedCreateNestedManyWithoutFriendsInput
    friendRequestOf?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestOfInput
    friendRequest?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUpdateManyWithoutFriendsNestedInput
    friendRequestOf?: FriendRequestUpdateManyWithoutFriendRequestOfNestedInput
    friendRequest?: FriendRequestUpdateManyWithoutFriendRequestNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUncheckedUpdateManyWithoutFriendsNestedInput
    friendRequestOf?: FriendRequestUncheckedUpdateManyWithoutFriendRequestOfNestedInput
    friendRequest?: FriendRequestUncheckedUpdateManyWithoutFriendRequestNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendCreateInput = {
    friendOf: UserCreateNestedOneWithoutFriendOfInput
    friends: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendUncheckedCreateInput = {
    friendOfId: string
    friendId: string
  }

  export type FriendUpdateInput = {
    friendOf?: UserUpdateOneRequiredWithoutFriendOfNestedInput
    friends?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendUncheckedUpdateInput = {
    friendOfId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendCreateManyInput = {
    friendOfId: string
    friendId: string
  }

  export type FriendUpdateManyMutationInput = {

  }

  export type FriendUncheckedUpdateManyInput = {
    friendOfId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendRequestCreateInput = {
    friendRequestOf: UserCreateNestedOneWithoutFriendRequestOfInput
    friendRequest: UserCreateNestedOneWithoutFriendRequestInput
  }

  export type FriendRequestUncheckedCreateInput = {
    friendRequestOfId: string
    friendRequestId: string
  }

  export type FriendRequestUpdateInput = {
    friendRequestOf?: UserUpdateOneRequiredWithoutFriendRequestOfNestedInput
    friendRequest?: UserUpdateOneRequiredWithoutFriendRequestNestedInput
  }

  export type FriendRequestUncheckedUpdateInput = {
    friendRequestOfId?: StringFieldUpdateOperationsInput | string
    friendRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendRequestCreateManyInput = {
    friendRequestOfId: string
    friendRequestId: string
  }

  export type FriendRequestUpdateManyMutationInput = {

  }

  export type FriendRequestUncheckedUpdateManyInput = {
    friendRequestOfId?: StringFieldUpdateOperationsInput | string
    friendRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackSectionCreateInput = {
    id?: string
    authorId: string
    description: string
    type: string
    feedbacks?: FeedbackCreateNestedManyWithoutFeedbackSectionInput
    users?: UserToFeedbackSectionCreateNestedManyWithoutFeedbackSectionInput
  }

  export type FeedbackSectionUncheckedCreateInput = {
    id?: string
    authorId: string
    description: string
    type: string
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutFeedbackSectionInput
    users?: UserToFeedbackSectionUncheckedCreateNestedManyWithoutFeedbackSectionInput
  }

  export type FeedbackSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    feedbacks?: FeedbackUpdateManyWithoutFeedbackSectionNestedInput
    users?: UserToFeedbackSectionUpdateManyWithoutFeedbackSectionNestedInput
  }

  export type FeedbackSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    feedbacks?: FeedbackUncheckedUpdateManyWithoutFeedbackSectionNestedInput
    users?: UserToFeedbackSectionUncheckedUpdateManyWithoutFeedbackSectionNestedInput
  }

  export type FeedbackSectionCreateManyInput = {
    id?: string
    authorId: string
    description: string
    type: string
  }

  export type FeedbackSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateInput = {
    id?: string
    name: string
    feedbackSection: FeedbackSectionCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    name: string
    feedbackSectionId: string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    feedbackSection?: FeedbackSectionUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    feedbackSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    name: string
    feedbackSectionId: string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    feedbackSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserToFeedbackSectionCreateInput = {
    role: string
    user: UserCreateNestedOneWithoutFeedbackSectionsInput
    feedbackSection: FeedbackSectionCreateNestedOneWithoutUsersInput
  }

  export type UserToFeedbackSectionUncheckedCreateInput = {
    userId: string
    feedbackSectionId: string
    role: string
  }

  export type UserToFeedbackSectionUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFeedbackSectionsNestedInput
    feedbackSection?: FeedbackSectionUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserToFeedbackSectionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    feedbackSectionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserToFeedbackSectionCreateManyInput = {
    userId: string
    feedbackSectionId: string
    role: string
  }

  export type UserToFeedbackSectionUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserToFeedbackSectionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    feedbackSectionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserToFeedbackSectionListRelationFilter = {
    every?: UserToFeedbackSectionWhereInput
    some?: UserToFeedbackSectionWhereInput
    none?: UserToFeedbackSectionWhereInput
  }

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type FriendRequestListRelationFilter = {
    every?: FriendRequestWhereInput
    some?: FriendRequestWhereInput
    none?: FriendRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserToFeedbackSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createDate?: SortOrder
    updateDate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FriendFriendIdFriendOfIdCompoundUniqueInput = {
    friendId: string
    friendOfId: string
  }

  export type FriendCountOrderByAggregateInput = {
    friendOfId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    friendOfId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    friendOfId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendRequestFriendRequestIdFriendRequestOfIdCompoundUniqueInput = {
    friendRequestId: string
    friendRequestOfId: string
  }

  export type FriendRequestCountOrderByAggregateInput = {
    friendRequestOfId?: SortOrder
    friendRequestId?: SortOrder
  }

  export type FriendRequestMaxOrderByAggregateInput = {
    friendRequestOfId?: SortOrder
    friendRequestId?: SortOrder
  }

  export type FriendRequestMinOrderByAggregateInput = {
    friendRequestOfId?: SortOrder
    friendRequestId?: SortOrder
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackSectionCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type FeedbackSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type FeedbackSectionMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type FeedbackSectionRelationFilter = {
    is?: FeedbackSectionWhereInput
    isNot?: FeedbackSectionWhereInput
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    feedbackSectionId?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    feedbackSectionId?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    feedbackSectionId?: SortOrder
  }

  export type UserToFeedbackSectionUserIdFeedbackSectionIdCompoundUniqueInput = {
    userId: string
    feedbackSectionId: string
  }

  export type UserToFeedbackSectionCountOrderByAggregateInput = {
    userId?: SortOrder
    feedbackSectionId?: SortOrder
    role?: SortOrder
  }

  export type UserToFeedbackSectionMaxOrderByAggregateInput = {
    userId?: SortOrder
    feedbackSectionId?: SortOrder
    role?: SortOrder
  }

  export type UserToFeedbackSectionMinOrderByAggregateInput = {
    userId?: SortOrder
    feedbackSectionId?: SortOrder
    role?: SortOrder
  }

  export type UserToFeedbackSectionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserToFeedbackSectionCreateWithoutUserInput, UserToFeedbackSectionUncheckedCreateWithoutUserInput> | UserToFeedbackSectionCreateWithoutUserInput[] | UserToFeedbackSectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToFeedbackSectionCreateOrConnectWithoutUserInput | UserToFeedbackSectionCreateOrConnectWithoutUserInput[]
    createMany?: UserToFeedbackSectionCreateManyUserInputEnvelope
    connect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutFriendOfInput = {
    create?: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput> | FriendCreateWithoutFriendOfInput[] | FriendUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendOfInput | FriendCreateOrConnectWithoutFriendOfInput[]
    createMany?: FriendCreateManyFriendOfInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutFriendsInput = {
    create?: XOR<FriendCreateWithoutFriendsInput, FriendUncheckedCreateWithoutFriendsInput> | FriendCreateWithoutFriendsInput[] | FriendUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendsInput | FriendCreateOrConnectWithoutFriendsInput[]
    createMany?: FriendCreateManyFriendsInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendRequestCreateNestedManyWithoutFriendRequestOfInput = {
    create?: XOR<FriendRequestCreateWithoutFriendRequestOfInput, FriendRequestUncheckedCreateWithoutFriendRequestOfInput> | FriendRequestCreateWithoutFriendRequestOfInput[] | FriendRequestUncheckedCreateWithoutFriendRequestOfInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFriendRequestOfInput | FriendRequestCreateOrConnectWithoutFriendRequestOfInput[]
    createMany?: FriendRequestCreateManyFriendRequestOfInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestCreateNestedManyWithoutFriendRequestInput = {
    create?: XOR<FriendRequestCreateWithoutFriendRequestInput, FriendRequestUncheckedCreateWithoutFriendRequestInput> | FriendRequestCreateWithoutFriendRequestInput[] | FriendRequestUncheckedCreateWithoutFriendRequestInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFriendRequestInput | FriendRequestCreateOrConnectWithoutFriendRequestInput[]
    createMany?: FriendRequestCreateManyFriendRequestInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type UserToFeedbackSectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserToFeedbackSectionCreateWithoutUserInput, UserToFeedbackSectionUncheckedCreateWithoutUserInput> | UserToFeedbackSectionCreateWithoutUserInput[] | UserToFeedbackSectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToFeedbackSectionCreateOrConnectWithoutUserInput | UserToFeedbackSectionCreateOrConnectWithoutUserInput[]
    createMany?: UserToFeedbackSectionCreateManyUserInputEnvelope
    connect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutFriendOfInput = {
    create?: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput> | FriendCreateWithoutFriendOfInput[] | FriendUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendOfInput | FriendCreateOrConnectWithoutFriendOfInput[]
    createMany?: FriendCreateManyFriendOfInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutFriendsInput = {
    create?: XOR<FriendCreateWithoutFriendsInput, FriendUncheckedCreateWithoutFriendsInput> | FriendCreateWithoutFriendsInput[] | FriendUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendsInput | FriendCreateOrConnectWithoutFriendsInput[]
    createMany?: FriendCreateManyFriendsInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutFriendRequestOfInput = {
    create?: XOR<FriendRequestCreateWithoutFriendRequestOfInput, FriendRequestUncheckedCreateWithoutFriendRequestOfInput> | FriendRequestCreateWithoutFriendRequestOfInput[] | FriendRequestUncheckedCreateWithoutFriendRequestOfInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFriendRequestOfInput | FriendRequestCreateOrConnectWithoutFriendRequestOfInput[]
    createMany?: FriendRequestCreateManyFriendRequestOfInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutFriendRequestInput = {
    create?: XOR<FriendRequestCreateWithoutFriendRequestInput, FriendRequestUncheckedCreateWithoutFriendRequestInput> | FriendRequestCreateWithoutFriendRequestInput[] | FriendRequestUncheckedCreateWithoutFriendRequestInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFriendRequestInput | FriendRequestCreateOrConnectWithoutFriendRequestInput[]
    createMany?: FriendRequestCreateManyFriendRequestInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
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

  export type UserToFeedbackSectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserToFeedbackSectionCreateWithoutUserInput, UserToFeedbackSectionUncheckedCreateWithoutUserInput> | UserToFeedbackSectionCreateWithoutUserInput[] | UserToFeedbackSectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToFeedbackSectionCreateOrConnectWithoutUserInput | UserToFeedbackSectionCreateOrConnectWithoutUserInput[]
    upsert?: UserToFeedbackSectionUpsertWithWhereUniqueWithoutUserInput | UserToFeedbackSectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserToFeedbackSectionCreateManyUserInputEnvelope
    set?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    disconnect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    delete?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    connect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    update?: UserToFeedbackSectionUpdateWithWhereUniqueWithoutUserInput | UserToFeedbackSectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserToFeedbackSectionUpdateManyWithWhereWithoutUserInput | UserToFeedbackSectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserToFeedbackSectionScalarWhereInput | UserToFeedbackSectionScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutFriendOfNestedInput = {
    create?: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput> | FriendCreateWithoutFriendOfInput[] | FriendUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendOfInput | FriendCreateOrConnectWithoutFriendOfInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendOfInput | FriendUpsertWithWhereUniqueWithoutFriendOfInput[]
    createMany?: FriendCreateManyFriendOfInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendOfInput | FriendUpdateWithWhereUniqueWithoutFriendOfInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendOfInput | FriendUpdateManyWithWhereWithoutFriendOfInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutFriendsNestedInput = {
    create?: XOR<FriendCreateWithoutFriendsInput, FriendUncheckedCreateWithoutFriendsInput> | FriendCreateWithoutFriendsInput[] | FriendUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendsInput | FriendCreateOrConnectWithoutFriendsInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendsInput | FriendUpsertWithWhereUniqueWithoutFriendsInput[]
    createMany?: FriendCreateManyFriendsInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendsInput | FriendUpdateWithWhereUniqueWithoutFriendsInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendsInput | FriendUpdateManyWithWhereWithoutFriendsInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendRequestUpdateManyWithoutFriendRequestOfNestedInput = {
    create?: XOR<FriendRequestCreateWithoutFriendRequestOfInput, FriendRequestUncheckedCreateWithoutFriendRequestOfInput> | FriendRequestCreateWithoutFriendRequestOfInput[] | FriendRequestUncheckedCreateWithoutFriendRequestOfInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFriendRequestOfInput | FriendRequestCreateOrConnectWithoutFriendRequestOfInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutFriendRequestOfInput | FriendRequestUpsertWithWhereUniqueWithoutFriendRequestOfInput[]
    createMany?: FriendRequestCreateManyFriendRequestOfInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutFriendRequestOfInput | FriendRequestUpdateWithWhereUniqueWithoutFriendRequestOfInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutFriendRequestOfInput | FriendRequestUpdateManyWithWhereWithoutFriendRequestOfInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUpdateManyWithoutFriendRequestNestedInput = {
    create?: XOR<FriendRequestCreateWithoutFriendRequestInput, FriendRequestUncheckedCreateWithoutFriendRequestInput> | FriendRequestCreateWithoutFriendRequestInput[] | FriendRequestUncheckedCreateWithoutFriendRequestInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFriendRequestInput | FriendRequestCreateOrConnectWithoutFriendRequestInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutFriendRequestInput | FriendRequestUpsertWithWhereUniqueWithoutFriendRequestInput[]
    createMany?: FriendRequestCreateManyFriendRequestInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutFriendRequestInput | FriendRequestUpdateWithWhereUniqueWithoutFriendRequestInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutFriendRequestInput | FriendRequestUpdateManyWithWhereWithoutFriendRequestInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type UserToFeedbackSectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserToFeedbackSectionCreateWithoutUserInput, UserToFeedbackSectionUncheckedCreateWithoutUserInput> | UserToFeedbackSectionCreateWithoutUserInput[] | UserToFeedbackSectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToFeedbackSectionCreateOrConnectWithoutUserInput | UserToFeedbackSectionCreateOrConnectWithoutUserInput[]
    upsert?: UserToFeedbackSectionUpsertWithWhereUniqueWithoutUserInput | UserToFeedbackSectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserToFeedbackSectionCreateManyUserInputEnvelope
    set?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    disconnect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    delete?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    connect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    update?: UserToFeedbackSectionUpdateWithWhereUniqueWithoutUserInput | UserToFeedbackSectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserToFeedbackSectionUpdateManyWithWhereWithoutUserInput | UserToFeedbackSectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserToFeedbackSectionScalarWhereInput | UserToFeedbackSectionScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutFriendOfNestedInput = {
    create?: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput> | FriendCreateWithoutFriendOfInput[] | FriendUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendOfInput | FriendCreateOrConnectWithoutFriendOfInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendOfInput | FriendUpsertWithWhereUniqueWithoutFriendOfInput[]
    createMany?: FriendCreateManyFriendOfInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendOfInput | FriendUpdateWithWhereUniqueWithoutFriendOfInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendOfInput | FriendUpdateManyWithWhereWithoutFriendOfInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutFriendsNestedInput = {
    create?: XOR<FriendCreateWithoutFriendsInput, FriendUncheckedCreateWithoutFriendsInput> | FriendCreateWithoutFriendsInput[] | FriendUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendsInput | FriendCreateOrConnectWithoutFriendsInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendsInput | FriendUpsertWithWhereUniqueWithoutFriendsInput[]
    createMany?: FriendCreateManyFriendsInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendsInput | FriendUpdateWithWhereUniqueWithoutFriendsInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendsInput | FriendUpdateManyWithWhereWithoutFriendsInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutFriendRequestOfNestedInput = {
    create?: XOR<FriendRequestCreateWithoutFriendRequestOfInput, FriendRequestUncheckedCreateWithoutFriendRequestOfInput> | FriendRequestCreateWithoutFriendRequestOfInput[] | FriendRequestUncheckedCreateWithoutFriendRequestOfInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFriendRequestOfInput | FriendRequestCreateOrConnectWithoutFriendRequestOfInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutFriendRequestOfInput | FriendRequestUpsertWithWhereUniqueWithoutFriendRequestOfInput[]
    createMany?: FriendRequestCreateManyFriendRequestOfInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutFriendRequestOfInput | FriendRequestUpdateWithWhereUniqueWithoutFriendRequestOfInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutFriendRequestOfInput | FriendRequestUpdateManyWithWhereWithoutFriendRequestOfInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutFriendRequestNestedInput = {
    create?: XOR<FriendRequestCreateWithoutFriendRequestInput, FriendRequestUncheckedCreateWithoutFriendRequestInput> | FriendRequestCreateWithoutFriendRequestInput[] | FriendRequestUncheckedCreateWithoutFriendRequestInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutFriendRequestInput | FriendRequestCreateOrConnectWithoutFriendRequestInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutFriendRequestInput | FriendRequestUpsertWithWhereUniqueWithoutFriendRequestInput[]
    createMany?: FriendRequestCreateManyFriendRequestInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutFriendRequestInput | FriendRequestUpdateWithWhereUniqueWithoutFriendRequestInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutFriendRequestInput | FriendRequestUpdateManyWithWhereWithoutFriendRequestInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendOfInput, UserUpdateWithoutFriendOfInput>, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserCreateNestedOneWithoutFriendRequestOfInput = {
    create?: XOR<UserCreateWithoutFriendRequestOfInput, UserUncheckedCreateWithoutFriendRequestOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendRequestInput = {
    create?: XOR<UserCreateWithoutFriendRequestInput, UserUncheckedCreateWithoutFriendRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendRequestOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendRequestOfInput, UserUncheckedCreateWithoutFriendRequestOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestOfInput
    upsert?: UserUpsertWithoutFriendRequestOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendRequestOfInput, UserUpdateWithoutFriendRequestOfInput>, UserUncheckedUpdateWithoutFriendRequestOfInput>
  }

  export type UserUpdateOneRequiredWithoutFriendRequestNestedInput = {
    create?: XOR<UserCreateWithoutFriendRequestInput, UserUncheckedCreateWithoutFriendRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestInput
    upsert?: UserUpsertWithoutFriendRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendRequestInput, UserUpdateWithoutFriendRequestInput>, UserUncheckedUpdateWithoutFriendRequestInput>
  }

  export type FeedbackCreateNestedManyWithoutFeedbackSectionInput = {
    create?: XOR<FeedbackCreateWithoutFeedbackSectionInput, FeedbackUncheckedCreateWithoutFeedbackSectionInput> | FeedbackCreateWithoutFeedbackSectionInput[] | FeedbackUncheckedCreateWithoutFeedbackSectionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutFeedbackSectionInput | FeedbackCreateOrConnectWithoutFeedbackSectionInput[]
    createMany?: FeedbackCreateManyFeedbackSectionInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type UserToFeedbackSectionCreateNestedManyWithoutFeedbackSectionInput = {
    create?: XOR<UserToFeedbackSectionCreateWithoutFeedbackSectionInput, UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput> | UserToFeedbackSectionCreateWithoutFeedbackSectionInput[] | UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput[]
    connectOrCreate?: UserToFeedbackSectionCreateOrConnectWithoutFeedbackSectionInput | UserToFeedbackSectionCreateOrConnectWithoutFeedbackSectionInput[]
    createMany?: UserToFeedbackSectionCreateManyFeedbackSectionInputEnvelope
    connect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutFeedbackSectionInput = {
    create?: XOR<FeedbackCreateWithoutFeedbackSectionInput, FeedbackUncheckedCreateWithoutFeedbackSectionInput> | FeedbackCreateWithoutFeedbackSectionInput[] | FeedbackUncheckedCreateWithoutFeedbackSectionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutFeedbackSectionInput | FeedbackCreateOrConnectWithoutFeedbackSectionInput[]
    createMany?: FeedbackCreateManyFeedbackSectionInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type UserToFeedbackSectionUncheckedCreateNestedManyWithoutFeedbackSectionInput = {
    create?: XOR<UserToFeedbackSectionCreateWithoutFeedbackSectionInput, UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput> | UserToFeedbackSectionCreateWithoutFeedbackSectionInput[] | UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput[]
    connectOrCreate?: UserToFeedbackSectionCreateOrConnectWithoutFeedbackSectionInput | UserToFeedbackSectionCreateOrConnectWithoutFeedbackSectionInput[]
    createMany?: UserToFeedbackSectionCreateManyFeedbackSectionInputEnvelope
    connect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
  }

  export type FeedbackUpdateManyWithoutFeedbackSectionNestedInput = {
    create?: XOR<FeedbackCreateWithoutFeedbackSectionInput, FeedbackUncheckedCreateWithoutFeedbackSectionInput> | FeedbackCreateWithoutFeedbackSectionInput[] | FeedbackUncheckedCreateWithoutFeedbackSectionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutFeedbackSectionInput | FeedbackCreateOrConnectWithoutFeedbackSectionInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutFeedbackSectionInput | FeedbackUpsertWithWhereUniqueWithoutFeedbackSectionInput[]
    createMany?: FeedbackCreateManyFeedbackSectionInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutFeedbackSectionInput | FeedbackUpdateWithWhereUniqueWithoutFeedbackSectionInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutFeedbackSectionInput | FeedbackUpdateManyWithWhereWithoutFeedbackSectionInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserToFeedbackSectionUpdateManyWithoutFeedbackSectionNestedInput = {
    create?: XOR<UserToFeedbackSectionCreateWithoutFeedbackSectionInput, UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput> | UserToFeedbackSectionCreateWithoutFeedbackSectionInput[] | UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput[]
    connectOrCreate?: UserToFeedbackSectionCreateOrConnectWithoutFeedbackSectionInput | UserToFeedbackSectionCreateOrConnectWithoutFeedbackSectionInput[]
    upsert?: UserToFeedbackSectionUpsertWithWhereUniqueWithoutFeedbackSectionInput | UserToFeedbackSectionUpsertWithWhereUniqueWithoutFeedbackSectionInput[]
    createMany?: UserToFeedbackSectionCreateManyFeedbackSectionInputEnvelope
    set?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    disconnect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    delete?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    connect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    update?: UserToFeedbackSectionUpdateWithWhereUniqueWithoutFeedbackSectionInput | UserToFeedbackSectionUpdateWithWhereUniqueWithoutFeedbackSectionInput[]
    updateMany?: UserToFeedbackSectionUpdateManyWithWhereWithoutFeedbackSectionInput | UserToFeedbackSectionUpdateManyWithWhereWithoutFeedbackSectionInput[]
    deleteMany?: UserToFeedbackSectionScalarWhereInput | UserToFeedbackSectionScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutFeedbackSectionNestedInput = {
    create?: XOR<FeedbackCreateWithoutFeedbackSectionInput, FeedbackUncheckedCreateWithoutFeedbackSectionInput> | FeedbackCreateWithoutFeedbackSectionInput[] | FeedbackUncheckedCreateWithoutFeedbackSectionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutFeedbackSectionInput | FeedbackCreateOrConnectWithoutFeedbackSectionInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutFeedbackSectionInput | FeedbackUpsertWithWhereUniqueWithoutFeedbackSectionInput[]
    createMany?: FeedbackCreateManyFeedbackSectionInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutFeedbackSectionInput | FeedbackUpdateWithWhereUniqueWithoutFeedbackSectionInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutFeedbackSectionInput | FeedbackUpdateManyWithWhereWithoutFeedbackSectionInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserToFeedbackSectionUncheckedUpdateManyWithoutFeedbackSectionNestedInput = {
    create?: XOR<UserToFeedbackSectionCreateWithoutFeedbackSectionInput, UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput> | UserToFeedbackSectionCreateWithoutFeedbackSectionInput[] | UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput[]
    connectOrCreate?: UserToFeedbackSectionCreateOrConnectWithoutFeedbackSectionInput | UserToFeedbackSectionCreateOrConnectWithoutFeedbackSectionInput[]
    upsert?: UserToFeedbackSectionUpsertWithWhereUniqueWithoutFeedbackSectionInput | UserToFeedbackSectionUpsertWithWhereUniqueWithoutFeedbackSectionInput[]
    createMany?: UserToFeedbackSectionCreateManyFeedbackSectionInputEnvelope
    set?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    disconnect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    delete?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    connect?: UserToFeedbackSectionWhereUniqueInput | UserToFeedbackSectionWhereUniqueInput[]
    update?: UserToFeedbackSectionUpdateWithWhereUniqueWithoutFeedbackSectionInput | UserToFeedbackSectionUpdateWithWhereUniqueWithoutFeedbackSectionInput[]
    updateMany?: UserToFeedbackSectionUpdateManyWithWhereWithoutFeedbackSectionInput | UserToFeedbackSectionUpdateManyWithWhereWithoutFeedbackSectionInput[]
    deleteMany?: UserToFeedbackSectionScalarWhereInput | UserToFeedbackSectionScalarWhereInput[]
  }

  export type FeedbackSectionCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<FeedbackSectionCreateWithoutFeedbacksInput, FeedbackSectionUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: FeedbackSectionCreateOrConnectWithoutFeedbacksInput
    connect?: FeedbackSectionWhereUniqueInput
  }

  export type FeedbackSectionUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<FeedbackSectionCreateWithoutFeedbacksInput, FeedbackSectionUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: FeedbackSectionCreateOrConnectWithoutFeedbacksInput
    upsert?: FeedbackSectionUpsertWithoutFeedbacksInput
    connect?: FeedbackSectionWhereUniqueInput
    update?: XOR<XOR<FeedbackSectionUpdateToOneWithWhereWithoutFeedbacksInput, FeedbackSectionUpdateWithoutFeedbacksInput>, FeedbackSectionUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserCreateNestedOneWithoutFeedbackSectionsInput = {
    create?: XOR<UserCreateWithoutFeedbackSectionsInput, UserUncheckedCreateWithoutFeedbackSectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackSectionsInput
    connect?: UserWhereUniqueInput
  }

  export type FeedbackSectionCreateNestedOneWithoutUsersInput = {
    create?: XOR<FeedbackSectionCreateWithoutUsersInput, FeedbackSectionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FeedbackSectionCreateOrConnectWithoutUsersInput
    connect?: FeedbackSectionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFeedbackSectionsNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackSectionsInput, UserUncheckedCreateWithoutFeedbackSectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackSectionsInput
    upsert?: UserUpsertWithoutFeedbackSectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackSectionsInput, UserUpdateWithoutFeedbackSectionsInput>, UserUncheckedUpdateWithoutFeedbackSectionsInput>
  }

  export type FeedbackSectionUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<FeedbackSectionCreateWithoutUsersInput, FeedbackSectionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FeedbackSectionCreateOrConnectWithoutUsersInput
    upsert?: FeedbackSectionUpsertWithoutUsersInput
    connect?: FeedbackSectionWhereUniqueInput
    update?: XOR<XOR<FeedbackSectionUpdateToOneWithWhereWithoutUsersInput, FeedbackSectionUpdateWithoutUsersInput>, FeedbackSectionUncheckedUpdateWithoutUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserToFeedbackSectionCreateWithoutUserInput = {
    role: string
    feedbackSection: FeedbackSectionCreateNestedOneWithoutUsersInput
  }

  export type UserToFeedbackSectionUncheckedCreateWithoutUserInput = {
    feedbackSectionId: string
    role: string
  }

  export type UserToFeedbackSectionCreateOrConnectWithoutUserInput = {
    where: UserToFeedbackSectionWhereUniqueInput
    create: XOR<UserToFeedbackSectionCreateWithoutUserInput, UserToFeedbackSectionUncheckedCreateWithoutUserInput>
  }

  export type UserToFeedbackSectionCreateManyUserInputEnvelope = {
    data: UserToFeedbackSectionCreateManyUserInput | UserToFeedbackSectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutFriendOfInput = {
    friends: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendUncheckedCreateWithoutFriendOfInput = {
    friendId: string
  }

  export type FriendCreateOrConnectWithoutFriendOfInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput>
  }

  export type FriendCreateManyFriendOfInputEnvelope = {
    data: FriendCreateManyFriendOfInput | FriendCreateManyFriendOfInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutFriendsInput = {
    friendOf: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendUncheckedCreateWithoutFriendsInput = {
    friendOfId: string
  }

  export type FriendCreateOrConnectWithoutFriendsInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutFriendsInput, FriendUncheckedCreateWithoutFriendsInput>
  }

  export type FriendCreateManyFriendsInputEnvelope = {
    data: FriendCreateManyFriendsInput | FriendCreateManyFriendsInput[]
    skipDuplicates?: boolean
  }

  export type FriendRequestCreateWithoutFriendRequestOfInput = {
    friendRequest: UserCreateNestedOneWithoutFriendRequestInput
  }

  export type FriendRequestUncheckedCreateWithoutFriendRequestOfInput = {
    friendRequestId: string
  }

  export type FriendRequestCreateOrConnectWithoutFriendRequestOfInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutFriendRequestOfInput, FriendRequestUncheckedCreateWithoutFriendRequestOfInput>
  }

  export type FriendRequestCreateManyFriendRequestOfInputEnvelope = {
    data: FriendRequestCreateManyFriendRequestOfInput | FriendRequestCreateManyFriendRequestOfInput[]
    skipDuplicates?: boolean
  }

  export type FriendRequestCreateWithoutFriendRequestInput = {
    friendRequestOf: UserCreateNestedOneWithoutFriendRequestOfInput
  }

  export type FriendRequestUncheckedCreateWithoutFriendRequestInput = {
    friendRequestOfId: string
  }

  export type FriendRequestCreateOrConnectWithoutFriendRequestInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutFriendRequestInput, FriendRequestUncheckedCreateWithoutFriendRequestInput>
  }

  export type FriendRequestCreateManyFriendRequestInputEnvelope = {
    data: FriendRequestCreateManyFriendRequestInput | FriendRequestCreateManyFriendRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserToFeedbackSectionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserToFeedbackSectionWhereUniqueInput
    update: XOR<UserToFeedbackSectionUpdateWithoutUserInput, UserToFeedbackSectionUncheckedUpdateWithoutUserInput>
    create: XOR<UserToFeedbackSectionCreateWithoutUserInput, UserToFeedbackSectionUncheckedCreateWithoutUserInput>
  }

  export type UserToFeedbackSectionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserToFeedbackSectionWhereUniqueInput
    data: XOR<UserToFeedbackSectionUpdateWithoutUserInput, UserToFeedbackSectionUncheckedUpdateWithoutUserInput>
  }

  export type UserToFeedbackSectionUpdateManyWithWhereWithoutUserInput = {
    where: UserToFeedbackSectionScalarWhereInput
    data: XOR<UserToFeedbackSectionUpdateManyMutationInput, UserToFeedbackSectionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserToFeedbackSectionScalarWhereInput = {
    AND?: UserToFeedbackSectionScalarWhereInput | UserToFeedbackSectionScalarWhereInput[]
    OR?: UserToFeedbackSectionScalarWhereInput[]
    NOT?: UserToFeedbackSectionScalarWhereInput | UserToFeedbackSectionScalarWhereInput[]
    userId?: StringFilter<"UserToFeedbackSection"> | string
    feedbackSectionId?: StringFilter<"UserToFeedbackSection"> | string
    role?: StringFilter<"UserToFeedbackSection"> | string
  }

  export type FriendUpsertWithWhereUniqueWithoutFriendOfInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutFriendOfInput, FriendUncheckedUpdateWithoutFriendOfInput>
    create: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutFriendOfInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutFriendOfInput, FriendUncheckedUpdateWithoutFriendOfInput>
  }

  export type FriendUpdateManyWithWhereWithoutFriendOfInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendOfInput>
  }

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[]
    OR?: FriendScalarWhereInput[]
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[]
    friendOfId?: StringFilter<"Friend"> | string
    friendId?: StringFilter<"Friend"> | string
  }

  export type FriendUpsertWithWhereUniqueWithoutFriendsInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutFriendsInput, FriendUncheckedUpdateWithoutFriendsInput>
    create: XOR<FriendCreateWithoutFriendsInput, FriendUncheckedCreateWithoutFriendsInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutFriendsInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutFriendsInput, FriendUncheckedUpdateWithoutFriendsInput>
  }

  export type FriendUpdateManyWithWhereWithoutFriendsInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendsInput>
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutFriendRequestOfInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutFriendRequestOfInput, FriendRequestUncheckedUpdateWithoutFriendRequestOfInput>
    create: XOR<FriendRequestCreateWithoutFriendRequestOfInput, FriendRequestUncheckedCreateWithoutFriendRequestOfInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutFriendRequestOfInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutFriendRequestOfInput, FriendRequestUncheckedUpdateWithoutFriendRequestOfInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutFriendRequestOfInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutFriendRequestOfInput>
  }

  export type FriendRequestScalarWhereInput = {
    AND?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    OR?: FriendRequestScalarWhereInput[]
    NOT?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    friendRequestOfId?: StringFilter<"FriendRequest"> | string
    friendRequestId?: StringFilter<"FriendRequest"> | string
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutFriendRequestInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutFriendRequestInput, FriendRequestUncheckedUpdateWithoutFriendRequestInput>
    create: XOR<FriendRequestCreateWithoutFriendRequestInput, FriendRequestUncheckedCreateWithoutFriendRequestInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutFriendRequestInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutFriendRequestInput, FriendRequestUncheckedUpdateWithoutFriendRequestInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutFriendRequestInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutFriendRequestInput>
  }

  export type UserCreateWithoutFriendOfInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutFriendsInput
    friendRequestOf?: FriendRequestCreateNestedManyWithoutFriendRequestOfInput
    friendRequest?: FriendRequestCreateNestedManyWithoutFriendRequestInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutFriendsInput
    friendRequestOf?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestOfInput
    friendRequest?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserCreateWithoutFriendsInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendOfInput
    friendRequestOf?: FriendRequestCreateNestedManyWithoutFriendRequestOfInput
    friendRequest?: FriendRequestCreateNestedManyWithoutFriendRequestInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendOfInput
    friendRequestOf?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestOfInput
    friendRequest?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutFriendsNestedInput
    friendRequestOf?: FriendRequestUpdateManyWithoutFriendRequestOfNestedInput
    friendRequest?: FriendRequestUpdateManyWithoutFriendRequestNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutFriendsNestedInput
    friendRequestOf?: FriendRequestUncheckedUpdateManyWithoutFriendRequestOfNestedInput
    friendRequest?: FriendRequestUncheckedUpdateManyWithoutFriendRequestNestedInput
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendOfNestedInput
    friendRequestOf?: FriendRequestUpdateManyWithoutFriendRequestOfNestedInput
    friendRequest?: FriendRequestUpdateManyWithoutFriendRequestNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendOfNestedInput
    friendRequestOf?: FriendRequestUncheckedUpdateManyWithoutFriendRequestOfNestedInput
    friendRequest?: FriendRequestUncheckedUpdateManyWithoutFriendRequestNestedInput
  }

  export type UserCreateWithoutFriendRequestOfInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendOfInput
    friends?: FriendCreateNestedManyWithoutFriendsInput
    friendRequest?: FriendRequestCreateNestedManyWithoutFriendRequestInput
  }

  export type UserUncheckedCreateWithoutFriendRequestOfInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendOfInput
    friends?: FriendUncheckedCreateNestedManyWithoutFriendsInput
    friendRequest?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestInput
  }

  export type UserCreateOrConnectWithoutFriendRequestOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendRequestOfInput, UserUncheckedCreateWithoutFriendRequestOfInput>
  }

  export type UserCreateWithoutFriendRequestInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendOfInput
    friends?: FriendCreateNestedManyWithoutFriendsInput
    friendRequestOf?: FriendRequestCreateNestedManyWithoutFriendRequestOfInput
  }

  export type UserUncheckedCreateWithoutFriendRequestInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendOfInput
    friends?: FriendUncheckedCreateNestedManyWithoutFriendsInput
    friendRequestOf?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestOfInput
  }

  export type UserCreateOrConnectWithoutFriendRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendRequestInput, UserUncheckedCreateWithoutFriendRequestInput>
  }

  export type UserUpsertWithoutFriendRequestOfInput = {
    update: XOR<UserUpdateWithoutFriendRequestOfInput, UserUncheckedUpdateWithoutFriendRequestOfInput>
    create: XOR<UserCreateWithoutFriendRequestOfInput, UserUncheckedCreateWithoutFriendRequestOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendRequestOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendRequestOfInput, UserUncheckedUpdateWithoutFriendRequestOfInput>
  }

  export type UserUpdateWithoutFriendRequestOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUpdateManyWithoutFriendsNestedInput
    friendRequest?: FriendRequestUpdateManyWithoutFriendRequestNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendRequestOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUncheckedUpdateManyWithoutFriendsNestedInput
    friendRequest?: FriendRequestUncheckedUpdateManyWithoutFriendRequestNestedInput
  }

  export type UserUpsertWithoutFriendRequestInput = {
    update: XOR<UserUpdateWithoutFriendRequestInput, UserUncheckedUpdateWithoutFriendRequestInput>
    create: XOR<UserCreateWithoutFriendRequestInput, UserUncheckedCreateWithoutFriendRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendRequestInput, UserUncheckedUpdateWithoutFriendRequestInput>
  }

  export type UserUpdateWithoutFriendRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUpdateManyWithoutFriendsNestedInput
    friendRequestOf?: FriendRequestUpdateManyWithoutFriendRequestOfNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSections?: UserToFeedbackSectionUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUncheckedUpdateManyWithoutFriendsNestedInput
    friendRequestOf?: FriendRequestUncheckedUpdateManyWithoutFriendRequestOfNestedInput
  }

  export type FeedbackCreateWithoutFeedbackSectionInput = {
    id?: string
    name: string
  }

  export type FeedbackUncheckedCreateWithoutFeedbackSectionInput = {
    id?: string
    name: string
  }

  export type FeedbackCreateOrConnectWithoutFeedbackSectionInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutFeedbackSectionInput, FeedbackUncheckedCreateWithoutFeedbackSectionInput>
  }

  export type FeedbackCreateManyFeedbackSectionInputEnvelope = {
    data: FeedbackCreateManyFeedbackSectionInput | FeedbackCreateManyFeedbackSectionInput[]
    skipDuplicates?: boolean
  }

  export type UserToFeedbackSectionCreateWithoutFeedbackSectionInput = {
    role: string
    user: UserCreateNestedOneWithoutFeedbackSectionsInput
  }

  export type UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput = {
    userId: string
    role: string
  }

  export type UserToFeedbackSectionCreateOrConnectWithoutFeedbackSectionInput = {
    where: UserToFeedbackSectionWhereUniqueInput
    create: XOR<UserToFeedbackSectionCreateWithoutFeedbackSectionInput, UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput>
  }

  export type UserToFeedbackSectionCreateManyFeedbackSectionInputEnvelope = {
    data: UserToFeedbackSectionCreateManyFeedbackSectionInput | UserToFeedbackSectionCreateManyFeedbackSectionInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackUpsertWithWhereUniqueWithoutFeedbackSectionInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutFeedbackSectionInput, FeedbackUncheckedUpdateWithoutFeedbackSectionInput>
    create: XOR<FeedbackCreateWithoutFeedbackSectionInput, FeedbackUncheckedCreateWithoutFeedbackSectionInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutFeedbackSectionInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutFeedbackSectionInput, FeedbackUncheckedUpdateWithoutFeedbackSectionInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutFeedbackSectionInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutFeedbackSectionInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: StringFilter<"Feedback"> | string
    name?: StringFilter<"Feedback"> | string
    feedbackSectionId?: StringFilter<"Feedback"> | string
  }

  export type UserToFeedbackSectionUpsertWithWhereUniqueWithoutFeedbackSectionInput = {
    where: UserToFeedbackSectionWhereUniqueInput
    update: XOR<UserToFeedbackSectionUpdateWithoutFeedbackSectionInput, UserToFeedbackSectionUncheckedUpdateWithoutFeedbackSectionInput>
    create: XOR<UserToFeedbackSectionCreateWithoutFeedbackSectionInput, UserToFeedbackSectionUncheckedCreateWithoutFeedbackSectionInput>
  }

  export type UserToFeedbackSectionUpdateWithWhereUniqueWithoutFeedbackSectionInput = {
    where: UserToFeedbackSectionWhereUniqueInput
    data: XOR<UserToFeedbackSectionUpdateWithoutFeedbackSectionInput, UserToFeedbackSectionUncheckedUpdateWithoutFeedbackSectionInput>
  }

  export type UserToFeedbackSectionUpdateManyWithWhereWithoutFeedbackSectionInput = {
    where: UserToFeedbackSectionScalarWhereInput
    data: XOR<UserToFeedbackSectionUpdateManyMutationInput, UserToFeedbackSectionUncheckedUpdateManyWithoutFeedbackSectionInput>
  }

  export type FeedbackSectionCreateWithoutFeedbacksInput = {
    id?: string
    authorId: string
    description: string
    type: string
    users?: UserToFeedbackSectionCreateNestedManyWithoutFeedbackSectionInput
  }

  export type FeedbackSectionUncheckedCreateWithoutFeedbacksInput = {
    id?: string
    authorId: string
    description: string
    type: string
    users?: UserToFeedbackSectionUncheckedCreateNestedManyWithoutFeedbackSectionInput
  }

  export type FeedbackSectionCreateOrConnectWithoutFeedbacksInput = {
    where: FeedbackSectionWhereUniqueInput
    create: XOR<FeedbackSectionCreateWithoutFeedbacksInput, FeedbackSectionUncheckedCreateWithoutFeedbacksInput>
  }

  export type FeedbackSectionUpsertWithoutFeedbacksInput = {
    update: XOR<FeedbackSectionUpdateWithoutFeedbacksInput, FeedbackSectionUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<FeedbackSectionCreateWithoutFeedbacksInput, FeedbackSectionUncheckedCreateWithoutFeedbacksInput>
    where?: FeedbackSectionWhereInput
  }

  export type FeedbackSectionUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: FeedbackSectionWhereInput
    data: XOR<FeedbackSectionUpdateWithoutFeedbacksInput, FeedbackSectionUncheckedUpdateWithoutFeedbacksInput>
  }

  export type FeedbackSectionUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    users?: UserToFeedbackSectionUpdateManyWithoutFeedbackSectionNestedInput
  }

  export type FeedbackSectionUncheckedUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    users?: UserToFeedbackSectionUncheckedUpdateManyWithoutFeedbackSectionNestedInput
  }

  export type UserCreateWithoutFeedbackSectionsInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    friendOf?: FriendCreateNestedManyWithoutFriendOfInput
    friends?: FriendCreateNestedManyWithoutFriendsInput
    friendRequestOf?: FriendRequestCreateNestedManyWithoutFriendRequestOfInput
    friendRequest?: FriendRequestCreateNestedManyWithoutFriendRequestInput
  }

  export type UserUncheckedCreateWithoutFeedbackSectionsInput = {
    id?: string
    userName: string
    email: string
    password?: string | null
    createDate?: Date | string
    updateDate?: Date | string
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendOfInput
    friends?: FriendUncheckedCreateNestedManyWithoutFriendsInput
    friendRequestOf?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestOfInput
    friendRequest?: FriendRequestUncheckedCreateNestedManyWithoutFriendRequestInput
  }

  export type UserCreateOrConnectWithoutFeedbackSectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackSectionsInput, UserUncheckedCreateWithoutFeedbackSectionsInput>
  }

  export type FeedbackSectionCreateWithoutUsersInput = {
    id?: string
    authorId: string
    description: string
    type: string
    feedbacks?: FeedbackCreateNestedManyWithoutFeedbackSectionInput
  }

  export type FeedbackSectionUncheckedCreateWithoutUsersInput = {
    id?: string
    authorId: string
    description: string
    type: string
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutFeedbackSectionInput
  }

  export type FeedbackSectionCreateOrConnectWithoutUsersInput = {
    where: FeedbackSectionWhereUniqueInput
    create: XOR<FeedbackSectionCreateWithoutUsersInput, FeedbackSectionUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutFeedbackSectionsInput = {
    update: XOR<UserUpdateWithoutFeedbackSectionsInput, UserUncheckedUpdateWithoutFeedbackSectionsInput>
    create: XOR<UserCreateWithoutFeedbackSectionsInput, UserUncheckedCreateWithoutFeedbackSectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackSectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackSectionsInput, UserUncheckedUpdateWithoutFeedbackSectionsInput>
  }

  export type UserUpdateWithoutFeedbackSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    friendOf?: FriendUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUpdateManyWithoutFriendsNestedInput
    friendRequestOf?: FriendRequestUpdateManyWithoutFriendRequestOfNestedInput
    friendRequest?: FriendRequestUpdateManyWithoutFriendRequestNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    friendOf?: FriendUncheckedUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUncheckedUpdateManyWithoutFriendsNestedInput
    friendRequestOf?: FriendRequestUncheckedUpdateManyWithoutFriendRequestOfNestedInput
    friendRequest?: FriendRequestUncheckedUpdateManyWithoutFriendRequestNestedInput
  }

  export type FeedbackSectionUpsertWithoutUsersInput = {
    update: XOR<FeedbackSectionUpdateWithoutUsersInput, FeedbackSectionUncheckedUpdateWithoutUsersInput>
    create: XOR<FeedbackSectionCreateWithoutUsersInput, FeedbackSectionUncheckedCreateWithoutUsersInput>
    where?: FeedbackSectionWhereInput
  }

  export type FeedbackSectionUpdateToOneWithWhereWithoutUsersInput = {
    where?: FeedbackSectionWhereInput
    data: XOR<FeedbackSectionUpdateWithoutUsersInput, FeedbackSectionUncheckedUpdateWithoutUsersInput>
  }

  export type FeedbackSectionUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    feedbacks?: FeedbackUpdateManyWithoutFeedbackSectionNestedInput
  }

  export type FeedbackSectionUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    feedbacks?: FeedbackUncheckedUpdateManyWithoutFeedbackSectionNestedInput
  }

  export type UserToFeedbackSectionCreateManyUserInput = {
    feedbackSectionId: string
    role: string
  }

  export type FriendCreateManyFriendOfInput = {
    friendId: string
  }

  export type FriendCreateManyFriendsInput = {
    friendOfId: string
  }

  export type FriendRequestCreateManyFriendRequestOfInput = {
    friendRequestId: string
  }

  export type FriendRequestCreateManyFriendRequestInput = {
    friendRequestOfId: string
  }

  export type UserToFeedbackSectionUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    feedbackSection?: FeedbackSectionUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserToFeedbackSectionUncheckedUpdateWithoutUserInput = {
    feedbackSectionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserToFeedbackSectionUncheckedUpdateManyWithoutUserInput = {
    feedbackSectionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type FriendUpdateWithoutFriendOfInput = {
    friends?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendUncheckedUpdateWithoutFriendOfInput = {
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendUncheckedUpdateManyWithoutFriendOfInput = {
    friendId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendUpdateWithoutFriendsInput = {
    friendOf?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendUncheckedUpdateWithoutFriendsInput = {
    friendOfId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendUncheckedUpdateManyWithoutFriendsInput = {
    friendOfId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendRequestUpdateWithoutFriendRequestOfInput = {
    friendRequest?: UserUpdateOneRequiredWithoutFriendRequestNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutFriendRequestOfInput = {
    friendRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutFriendRequestOfInput = {
    friendRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendRequestUpdateWithoutFriendRequestInput = {
    friendRequestOf?: UserUpdateOneRequiredWithoutFriendRequestOfNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutFriendRequestInput = {
    friendRequestOfId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutFriendRequestInput = {
    friendRequestOfId?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateManyFeedbackSectionInput = {
    id?: string
    name: string
  }

  export type UserToFeedbackSectionCreateManyFeedbackSectionInput = {
    userId: string
    role: string
  }

  export type FeedbackUpdateWithoutFeedbackSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackUncheckedUpdateWithoutFeedbackSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackUncheckedUpdateManyWithoutFeedbackSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserToFeedbackSectionUpdateWithoutFeedbackSectionInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFeedbackSectionsNestedInput
  }

  export type UserToFeedbackSectionUncheckedUpdateWithoutFeedbackSectionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserToFeedbackSectionUncheckedUpdateManyWithoutFeedbackSectionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeedbackSectionCountOutputTypeDefaultArgs instead
     */
    export type FeedbackSectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeedbackSectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FriendDefaultArgs instead
     */
    export type FriendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FriendDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FriendRequestDefaultArgs instead
     */
    export type FriendRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FriendRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeedbackSectionDefaultArgs instead
     */
    export type FeedbackSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeedbackSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeedbackDefaultArgs instead
     */
    export type FeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeedbackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserToFeedbackSectionDefaultArgs instead
     */
    export type UserToFeedbackSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserToFeedbackSectionDefaultArgs<ExtArgs>

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