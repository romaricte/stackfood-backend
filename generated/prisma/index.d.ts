
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model Variant
 * 
 */
export type Variant = $Result.DefaultSelection<Prisma.$VariantPayload>
/**
 * Model Value
 * 
 */
export type Value = $Result.DefaultSelection<Prisma.$ValuePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model Cuisine
 * 
 */
export type Cuisine = $Result.DefaultSelection<Prisma.$CuisinePayload>
/**
 * Model schedules
 * 
 */
export type schedules = $Result.DefaultSelection<Prisma.$schedulesPayload>
/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FoodType: {
  NON_VEGETARIAN: 'NON_VEGETARIAN',
  VEGETARIAN: 'VEGETARIAN',
  VEGAN: 'VEGAN'
};

export type FoodType = (typeof FoodType)[keyof typeof FoodType]

}

export type FoodType = $Enums.FoodType

export const FoodType: typeof $Enums.FoodType

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **Variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.VariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.value`: Exposes CRUD operations for the **Value** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Values
    * const values = await prisma.value.findMany()
    * ```
    */
  get value(): Prisma.ValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuisine`: Exposes CRUD operations for the **Cuisine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuisines
    * const cuisines = await prisma.cuisine.findMany()
    * ```
    */
  get cuisine(): Prisma.CuisineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedules`: Exposes CRUD operations for the **schedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedules.findMany()
    * ```
    */
  get schedules(): Prisma.schedulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Food: 'Food',
    Variant: 'Variant',
    Value: 'Value',
    Category: 'Category',
    Type: 'Type',
    Cuisine: 'Cuisine',
    schedules: 'schedules',
    Restaurant: 'Restaurant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "food" | "variant" | "value" | "category" | "type" | "cuisine" | "schedules" | "restaurant"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FoodFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FoodAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      Variant: {
        payload: Prisma.$VariantPayload<ExtArgs>
        fields: Prisma.VariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findFirst: {
            args: Prisma.VariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findMany: {
            args: Prisma.VariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          create: {
            args: Prisma.VariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          createMany: {
            args: Prisma.VariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          update: {
            args: Prisma.VariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          deleteMany: {
            args: Prisma.VariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          aggregate: {
            args: Prisma.VariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariant>
          }
          groupBy: {
            args: Prisma.VariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VariantFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VariantAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VariantCountArgs<ExtArgs>
            result: $Utils.Optional<VariantCountAggregateOutputType> | number
          }
        }
      }
      Value: {
        payload: Prisma.$ValuePayload<ExtArgs>
        fields: Prisma.ValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findFirst: {
            args: Prisma.ValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findMany: {
            args: Prisma.ValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          create: {
            args: Prisma.ValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          createMany: {
            args: Prisma.ValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          update: {
            args: Prisma.ValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          deleteMany: {
            args: Prisma.ValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          aggregate: {
            args: Prisma.ValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValue>
          }
          groupBy: {
            args: Prisma.ValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValueGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ValueFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ValueAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ValueCountArgs<ExtArgs>
            result: $Utils.Optional<ValueCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TypeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TypeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      Cuisine: {
        payload: Prisma.$CuisinePayload<ExtArgs>
        fields: Prisma.CuisineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuisineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuisineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          findFirst: {
            args: Prisma.CuisineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuisineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          findMany: {
            args: Prisma.CuisineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>[]
          }
          create: {
            args: Prisma.CuisineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          createMany: {
            args: Prisma.CuisineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CuisineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          update: {
            args: Prisma.CuisineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          deleteMany: {
            args: Prisma.CuisineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuisineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CuisineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisinePayload>
          }
          aggregate: {
            args: Prisma.CuisineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuisine>
          }
          groupBy: {
            args: Prisma.CuisineGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuisineGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CuisineFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CuisineAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CuisineCountArgs<ExtArgs>
            result: $Utils.Optional<CuisineCountAggregateOutputType> | number
          }
        }
      }
      schedules: {
        payload: Prisma.$schedulesPayload<ExtArgs>
        fields: Prisma.schedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.schedulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.schedulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          findFirst: {
            args: Prisma.schedulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.schedulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          findMany: {
            args: Prisma.schedulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          create: {
            args: Prisma.schedulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          createMany: {
            args: Prisma.schedulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.schedulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          update: {
            args: Prisma.schedulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          deleteMany: {
            args: Prisma.schedulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.schedulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.schedulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          aggregate: {
            args: Prisma.SchedulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedules>
          }
          groupBy: {
            args: Prisma.schedulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.schedulesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.schedulesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.schedulesCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulesCountAggregateOutputType> | number
          }
        }
      }
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RestaurantFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RestaurantAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    food?: FoodOmit
    variant?: VariantOmit
    value?: ValueOmit
    category?: CategoryOmit
    type?: TypeOmit
    cuisine?: CuisineOmit
    schedules?: schedulesOmit
    restaurant?: RestaurantOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    variants: number
    cuisine: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | FoodCountOutputTypeCountVariantsArgs
    cuisine?: boolean | FoodCountOutputTypeCountCuisineArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountCuisineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuisineWhereInput
  }


  /**
   * Count Type VariantCountOutputType
   */

  export type VariantCountOutputType = {
    values: number
  }

  export type VariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | VariantCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantCountOutputType
     */
    select?: VariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    type: number
    foods: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | CategoryCountOutputTypeCountTypeArgs
    foods?: boolean | CategoryCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    schedules: number
    foods: number
    cuisine: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | RestaurantCountOutputTypeCountSchedulesArgs
    foods?: boolean | RestaurantCountOutputTypeCountFoodsArgs
    cuisine?: boolean | RestaurantCountOutputTypeCountCuisineArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountCuisineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuisineWhereInput
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
    email: string | null
    name: string | null
    phone: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phone: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    password?: true
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
    email: string
    name: string | null
    phone: string
    password: string
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
    email?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phone" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      phone: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    price: number | null
    min_delivery_time: number | null
    max_delivery_time: number | null
    discount: number | null
    sell_count: number | null
  }

  export type FoodSumAggregateOutputType = {
    price: number | null
    min_delivery_time: number | null
    max_delivery_time: number | null
    discount: number | null
    sell_count: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    min_delivery_time: number | null
    max_delivery_time: number | null
    free_delivery: boolean | null
    veg: boolean | null
    discount: number | null
    sell_count: number | null
    image: string | null
    restaurantId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    min_delivery_time: number | null
    max_delivery_time: number | null
    free_delivery: boolean | null
    veg: boolean | null
    discount: number | null
    sell_count: number | null
    image: string | null
    restaurantId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery: number
    veg: number
    discount: number
    sell_count: number
    image: number
    restaurantId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    price?: true
    min_delivery_time?: true
    max_delivery_time?: true
    discount?: true
    sell_count?: true
  }

  export type FoodSumAggregateInputType = {
    price?: true
    min_delivery_time?: true
    max_delivery_time?: true
    discount?: true
    sell_count?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    min_delivery_time?: true
    max_delivery_time?: true
    free_delivery?: true
    veg?: true
    discount?: true
    sell_count?: true
    image?: true
    restaurantId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    min_delivery_time?: true
    max_delivery_time?: true
    free_delivery?: true
    veg?: true
    discount?: true
    sell_count?: true
    image?: true
    restaurantId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    min_delivery_time?: true
    max_delivery_time?: true
    free_delivery?: true
    veg?: true
    discount?: true
    sell_count?: true
    image?: true
    restaurantId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    restaurantId: string | null
    categoryId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    min_delivery_time?: boolean
    max_delivery_time?: boolean
    free_delivery?: boolean
    veg?: boolean
    discount?: boolean
    sell_count?: boolean
    image?: boolean
    restaurantId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variants?: boolean | Food$variantsArgs<ExtArgs>
    cuisine?: boolean | Food$cuisineArgs<ExtArgs>
    restaurant?: boolean | Food$restaurantArgs<ExtArgs>
    category?: boolean | Food$categoryArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>



  export type FoodSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    min_delivery_time?: boolean
    max_delivery_time?: boolean
    free_delivery?: boolean
    veg?: boolean
    discount?: boolean
    sell_count?: boolean
    image?: boolean
    restaurantId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "min_delivery_time" | "max_delivery_time" | "free_delivery" | "veg" | "discount" | "sell_count" | "image" | "restaurantId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | Food$variantsArgs<ExtArgs>
    cuisine?: boolean | Food$cuisineArgs<ExtArgs>
    restaurant?: boolean | Food$restaurantArgs<ExtArgs>
    category?: boolean | Food$categoryArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      variants: Prisma.$VariantPayload<ExtArgs>[]
      cuisine: Prisma.$CuisinePayload<ExtArgs>[]
      restaurant: Prisma.$RestaurantPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      min_delivery_time: number
      max_delivery_time: number
      free_delivery: boolean
      veg: boolean
      discount: number
      sell_count: number
      image: string
      restaurantId: string | null
      categoryId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * @param {FoodFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const food = await prisma.food.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FoodFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Food.
     * @param {FoodAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const food = await prisma.food.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FoodAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
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
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends Food$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Food$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cuisine<T extends Food$cuisineArgs<ExtArgs> = {}>(args?: Subset<T, Food$cuisineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    restaurant<T extends Food$restaurantArgs<ExtArgs> = {}>(args?: Subset<T, Food$restaurantArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends Food$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Food$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'String'>
    readonly name: FieldRef<"Food", 'String'>
    readonly description: FieldRef<"Food", 'String'>
    readonly price: FieldRef<"Food", 'Float'>
    readonly min_delivery_time: FieldRef<"Food", 'Int'>
    readonly max_delivery_time: FieldRef<"Food", 'Int'>
    readonly free_delivery: FieldRef<"Food", 'Boolean'>
    readonly veg: FieldRef<"Food", 'Boolean'>
    readonly discount: FieldRef<"Food", 'Float'>
    readonly sell_count: FieldRef<"Food", 'Int'>
    readonly image: FieldRef<"Food", 'String'>
    readonly restaurantId: FieldRef<"Food", 'String'>
    readonly categoryId: FieldRef<"Food", 'String'>
    readonly createdAt: FieldRef<"Food", 'DateTime'>
    readonly updatedAt: FieldRef<"Food", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food findRaw
   */
  export type FoodFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Food aggregateRaw
   */
  export type FoodAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Food.variants
   */
  export type Food$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Food.cuisine
   */
  export type Food$cuisineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    where?: CuisineWhereInput
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    cursor?: CuisineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuisineScalarFieldEnum | CuisineScalarFieldEnum[]
  }

  /**
   * Food.restaurant
   */
  export type Food$restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
  }

  /**
   * Food.category
   */
  export type Food$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model Variant
   */

  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantMinAggregateOutputType = {
    variantId: string | null
    name: string | null
    type: string | null
    min: string | null
    max: string | null
    required: boolean | null
    foodId: string | null
  }

  export type VariantMaxAggregateOutputType = {
    variantId: string | null
    name: string | null
    type: string | null
    min: string | null
    max: string | null
    required: boolean | null
    foodId: string | null
  }

  export type VariantCountAggregateOutputType = {
    variantId: number
    name: number
    type: number
    min: number
    max: number
    required: number
    foodId: number
    _all: number
  }


  export type VariantMinAggregateInputType = {
    variantId?: true
    name?: true
    type?: true
    min?: true
    max?: true
    required?: true
    foodId?: true
  }

  export type VariantMaxAggregateInputType = {
    variantId?: true
    name?: true
    type?: true
    min?: true
    max?: true
    required?: true
    foodId?: true
  }

  export type VariantCountAggregateInputType = {
    variantId?: true
    name?: true
    type?: true
    min?: true
    max?: true
    required?: true
    foodId?: true
    _all?: true
  }

  export type VariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variant to aggregate.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type VariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithAggregationInput | VariantOrderByWithAggregationInput[]
    by: VariantScalarFieldEnum[] | VariantScalarFieldEnum
    having?: VariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }

  export type VariantGroupByOutputType = {
    variantId: string
    name: string
    type: string
    min: string
    max: string
    required: boolean
    foodId: string | null
    _count: VariantCountAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type VariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    variantId?: boolean
    name?: boolean
    type?: boolean
    min?: boolean
    max?: boolean
    required?: boolean
    foodId?: boolean
    food?: boolean | Variant$foodArgs<ExtArgs>
    values?: boolean | Variant$valuesArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>



  export type VariantSelectScalar = {
    variantId?: boolean
    name?: boolean
    type?: boolean
    min?: boolean
    max?: boolean
    required?: boolean
    foodId?: boolean
  }

  export type VariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"variantId" | "name" | "type" | "min" | "max" | "required" | "foodId", ExtArgs["result"]["variant"]>
  export type VariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | Variant$foodArgs<ExtArgs>
    values?: boolean | Variant$valuesArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variant"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs> | null
      values: Prisma.$ValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      variantId: string
      name: string
      type: string
      min: string
      max: string
      required: boolean
      foodId: string | null
    }, ExtArgs["result"]["variant"]>
    composites: {}
  }

  type VariantGetPayload<S extends boolean | null | undefined | VariantDefaultArgs> = $Result.GetResult<Prisma.$VariantPayload, S>

  type VariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantCountAggregateInputType | true
    }

  export interface VariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variant'], meta: { name: 'Variant' } }
    /**
     * Find zero or one Variant that matches the filter.
     * @param {VariantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantFindUniqueArgs>(args: SelectSubset<T, VariantFindUniqueArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantFindFirstArgs>(args?: SelectSubset<T, VariantFindFirstArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `variantId`
     * const variantWithVariantIdOnly = await prisma.variant.findMany({ select: { variantId: true } })
     * 
     */
    findMany<T extends VariantFindManyArgs>(args?: SelectSubset<T, VariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variant.
     * @param {VariantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
     */
    create<T extends VariantCreateArgs>(args: SelectSubset<T, VariantCreateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variants.
     * @param {VariantCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantCreateManyArgs>(args?: SelectSubset<T, VariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Variant.
     * @param {VariantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
     */
    delete<T extends VariantDeleteArgs>(args: SelectSubset<T, VariantDeleteArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variant.
     * @param {VariantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantUpdateArgs>(args: SelectSubset<T, VariantUpdateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variants.
     * @param {VariantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantDeleteManyArgs>(args?: SelectSubset<T, VariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantUpdateManyArgs>(args: SelectSubset<T, VariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variant.
     * @param {VariantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
     */
    upsert<T extends VariantUpsertArgs>(args: SelectSubset<T, VariantUpsertArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * @param {VariantFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const variant = await prisma.variant.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VariantFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Variant.
     * @param {VariantAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const variant = await prisma.variant.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VariantAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantCountArgs>(
      args?: Subset<T, VariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantGroupByArgs} args - Group by arguments.
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
      T extends VariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantGroupByArgs['orderBy'] }
        : { orderBy?: VariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variant model
   */
  readonly fields: VariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends Variant$foodArgs<ExtArgs> = {}>(args?: Subset<T, Variant$foodArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    values<T extends Variant$valuesArgs<ExtArgs> = {}>(args?: Subset<T, Variant$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Variant model
   */
  interface VariantFieldRefs {
    readonly variantId: FieldRef<"Variant", 'String'>
    readonly name: FieldRef<"Variant", 'String'>
    readonly type: FieldRef<"Variant", 'String'>
    readonly min: FieldRef<"Variant", 'String'>
    readonly max: FieldRef<"Variant", 'String'>
    readonly required: FieldRef<"Variant", 'Boolean'>
    readonly foodId: FieldRef<"Variant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Variant findUnique
   */
  export type VariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findUniqueOrThrow
   */
  export type VariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findFirst
   */
  export type VariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findFirstOrThrow
   */
  export type VariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findMany
   */
  export type VariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant create
   */
  export type VariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to create a Variant.
     */
    data: XOR<VariantCreateInput, VariantUncheckedCreateInput>
  }

  /**
   * Variant createMany
   */
  export type VariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
  }

  /**
   * Variant update
   */
  export type VariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to update a Variant.
     */
    data: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
    /**
     * Choose, which Variant to update.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant updateMany
   */
  export type VariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to update.
     */
    limit?: number
  }

  /**
   * Variant upsert
   */
  export type VariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The filter to search for the Variant to update in case it exists.
     */
    where: VariantWhereUniqueInput
    /**
     * In case the Variant found by the `where` argument doesn't exist, create a new Variant with this data.
     */
    create: XOR<VariantCreateInput, VariantUncheckedCreateInput>
    /**
     * In case the Variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
  }

  /**
   * Variant delete
   */
  export type VariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter which Variant to delete.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant deleteMany
   */
  export type VariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to delete.
     */
    limit?: number
  }

  /**
   * Variant findRaw
   */
  export type VariantFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Variant aggregateRaw
   */
  export type VariantAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Variant.food
   */
  export type Variant$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
  }

  /**
   * Variant.values
   */
  export type Variant$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    cursor?: ValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Variant without action
   */
  export type VariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
  }


  /**
   * Model Value
   */

  export type AggregateValue = {
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  export type ValueAvgAggregateOutputType = {
    optionPrice: number | null
    stock: number | null
  }

  export type ValueSumAggregateOutputType = {
    optionPrice: number | null
    stock: number | null
  }

  export type ValueMinAggregateOutputType = {
    valueId: string | null
    label: string | null
    optionPrice: number | null
    stock: number | null
    stock_unlimited: boolean | null
    variantId: string | null
  }

  export type ValueMaxAggregateOutputType = {
    valueId: string | null
    label: string | null
    optionPrice: number | null
    stock: number | null
    stock_unlimited: boolean | null
    variantId: string | null
  }

  export type ValueCountAggregateOutputType = {
    valueId: number
    label: number
    optionPrice: number
    stock: number
    stock_unlimited: number
    variantId: number
    _all: number
  }


  export type ValueAvgAggregateInputType = {
    optionPrice?: true
    stock?: true
  }

  export type ValueSumAggregateInputType = {
    optionPrice?: true
    stock?: true
  }

  export type ValueMinAggregateInputType = {
    valueId?: true
    label?: true
    optionPrice?: true
    stock?: true
    stock_unlimited?: true
    variantId?: true
  }

  export type ValueMaxAggregateInputType = {
    valueId?: true
    label?: true
    optionPrice?: true
    stock?: true
    stock_unlimited?: true
    variantId?: true
  }

  export type ValueCountAggregateInputType = {
    valueId?: true
    label?: true
    optionPrice?: true
    stock?: true
    stock_unlimited?: true
    variantId?: true
    _all?: true
  }

  export type ValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Value to aggregate.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Values
    **/
    _count?: true | ValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValueMaxAggregateInputType
  }

  export type GetValueAggregateType<T extends ValueAggregateArgs> = {
        [P in keyof T & keyof AggregateValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValue[P]>
      : GetScalarType<T[P], AggregateValue[P]>
  }




  export type ValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithAggregationInput | ValueOrderByWithAggregationInput[]
    by: ValueScalarFieldEnum[] | ValueScalarFieldEnum
    having?: ValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValueCountAggregateInputType | true
    _avg?: ValueAvgAggregateInputType
    _sum?: ValueSumAggregateInputType
    _min?: ValueMinAggregateInputType
    _max?: ValueMaxAggregateInputType
  }

  export type ValueGroupByOutputType = {
    valueId: string
    label: string
    optionPrice: number
    stock: number
    stock_unlimited: boolean
    variantId: string | null
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  type GetValueGroupByPayload<T extends ValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValueGroupByOutputType[P]>
            : GetScalarType<T[P], ValueGroupByOutputType[P]>
        }
      >
    >


  export type ValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    valueId?: boolean
    label?: boolean
    optionPrice?: boolean
    stock?: boolean
    stock_unlimited?: boolean
    variantId?: boolean
    variant?: boolean | Value$variantArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>



  export type ValueSelectScalar = {
    valueId?: boolean
    label?: boolean
    optionPrice?: boolean
    stock?: boolean
    stock_unlimited?: boolean
    variantId?: boolean
  }

  export type ValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"valueId" | "label" | "optionPrice" | "stock" | "stock_unlimited" | "variantId", ExtArgs["result"]["value"]>
  export type ValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | Value$variantArgs<ExtArgs>
  }

  export type $ValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Value"
    objects: {
      variant: Prisma.$VariantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      valueId: string
      label: string
      optionPrice: number
      stock: number
      stock_unlimited: boolean
      variantId: string | null
    }, ExtArgs["result"]["value"]>
    composites: {}
  }

  type ValueGetPayload<S extends boolean | null | undefined | ValueDefaultArgs> = $Result.GetResult<Prisma.$ValuePayload, S>

  type ValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValueCountAggregateInputType | true
    }

  export interface ValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Value'], meta: { name: 'Value' } }
    /**
     * Find zero or one Value that matches the filter.
     * @param {ValueFindUniqueArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValueFindUniqueArgs>(args: SelectSubset<T, ValueFindUniqueArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Value that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValueFindUniqueOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValueFindUniqueOrThrowArgs>(args: SelectSubset<T, ValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValueFindFirstArgs>(args?: SelectSubset<T, ValueFindFirstArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValueFindFirstOrThrowArgs>(args?: SelectSubset<T, ValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Values
     * const values = await prisma.value.findMany()
     * 
     * // Get first 10 Values
     * const values = await prisma.value.findMany({ take: 10 })
     * 
     * // Only select the `valueId`
     * const valueWithValueIdOnly = await prisma.value.findMany({ select: { valueId: true } })
     * 
     */
    findMany<T extends ValueFindManyArgs>(args?: SelectSubset<T, ValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Value.
     * @param {ValueCreateArgs} args - Arguments to create a Value.
     * @example
     * // Create one Value
     * const Value = await prisma.value.create({
     *   data: {
     *     // ... data to create a Value
     *   }
     * })
     * 
     */
    create<T extends ValueCreateArgs>(args: SelectSubset<T, ValueCreateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Values.
     * @param {ValueCreateManyArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValueCreateManyArgs>(args?: SelectSubset<T, ValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Value.
     * @param {ValueDeleteArgs} args - Arguments to delete one Value.
     * @example
     * // Delete one Value
     * const Value = await prisma.value.delete({
     *   where: {
     *     // ... filter to delete one Value
     *   }
     * })
     * 
     */
    delete<T extends ValueDeleteArgs>(args: SelectSubset<T, ValueDeleteArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Value.
     * @param {ValueUpdateArgs} args - Arguments to update one Value.
     * @example
     * // Update one Value
     * const value = await prisma.value.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValueUpdateArgs>(args: SelectSubset<T, ValueUpdateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Values.
     * @param {ValueDeleteManyArgs} args - Arguments to filter Values to delete.
     * @example
     * // Delete a few Values
     * const { count } = await prisma.value.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValueDeleteManyArgs>(args?: SelectSubset<T, ValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValueUpdateManyArgs>(args: SelectSubset<T, ValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Value.
     * @param {ValueUpsertArgs} args - Arguments to update or create a Value.
     * @example
     * // Update or create a Value
     * const value = await prisma.value.upsert({
     *   create: {
     *     // ... data to create a Value
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Value we want to update
     *   }
     * })
     */
    upsert<T extends ValueUpsertArgs>(args: SelectSubset<T, ValueUpsertArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Values that matches the filter.
     * @param {ValueFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const value = await prisma.value.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ValueFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Value.
     * @param {ValueAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const value = await prisma.value.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ValueAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueCountArgs} args - Arguments to filter Values to count.
     * @example
     * // Count the number of Values
     * const count = await prisma.value.count({
     *   where: {
     *     // ... the filter for the Values we want to count
     *   }
     * })
    **/
    count<T extends ValueCountArgs>(
      args?: Subset<T, ValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValueAggregateArgs>(args: Subset<T, ValueAggregateArgs>): Prisma.PrismaPromise<GetValueAggregateType<T>>

    /**
     * Group by Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueGroupByArgs} args - Group by arguments.
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
      T extends ValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValueGroupByArgs['orderBy'] }
        : { orderBy?: ValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Value model
   */
  readonly fields: ValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Value.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends Value$variantArgs<ExtArgs> = {}>(args?: Subset<T, Value$variantArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Value model
   */
  interface ValueFieldRefs {
    readonly valueId: FieldRef<"Value", 'String'>
    readonly label: FieldRef<"Value", 'String'>
    readonly optionPrice: FieldRef<"Value", 'Int'>
    readonly stock: FieldRef<"Value", 'Int'>
    readonly stock_unlimited: FieldRef<"Value", 'Boolean'>
    readonly variantId: FieldRef<"Value", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Value findUnique
   */
  export type ValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findUniqueOrThrow
   */
  export type ValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findFirst
   */
  export type ValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findFirstOrThrow
   */
  export type ValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findMany
   */
  export type ValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Values to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value create
   */
  export type ValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The data needed to create a Value.
     */
    data: XOR<ValueCreateInput, ValueUncheckedCreateInput>
  }

  /**
   * Value createMany
   */
  export type ValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Values.
     */
    data: ValueCreateManyInput | ValueCreateManyInput[]
  }

  /**
   * Value update
   */
  export type ValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The data needed to update a Value.
     */
    data: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
    /**
     * Choose, which Value to update.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value updateMany
   */
  export type ValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Values.
     */
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyInput>
    /**
     * Filter which Values to update
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to update.
     */
    limit?: number
  }

  /**
   * Value upsert
   */
  export type ValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The filter to search for the Value to update in case it exists.
     */
    where: ValueWhereUniqueInput
    /**
     * In case the Value found by the `where` argument doesn't exist, create a new Value with this data.
     */
    create: XOR<ValueCreateInput, ValueUncheckedCreateInput>
    /**
     * In case the Value was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
  }

  /**
   * Value delete
   */
  export type ValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter which Value to delete.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value deleteMany
   */
  export type ValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Values to delete
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to delete.
     */
    limit?: number
  }

  /**
   * Value findRaw
   */
  export type ValueFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Value aggregateRaw
   */
  export type ValueAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Value.variant
   */
  export type Value$variantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
  }

  /**
   * Value without action
   */
  export type ValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    products_count: number | null
    type_count: number | null
    order_count: number | null
  }

  export type CategorySumAggregateOutputType = {
    products_count: number | null
    type_count: number | null
    order_count: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    products_count: number | null
    type_count: number | null
    status: boolean | null
    order_count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    products_count: number | null
    type_count: number | null
    status: boolean | null
    order_count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    image: number
    products_count: number
    type_count: number
    status: number
    order_count: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    products_count?: true
    type_count?: true
    order_count?: true
  }

  export type CategorySumAggregateInputType = {
    products_count?: true
    type_count?: true
    order_count?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    products_count?: true
    type_count?: true
    status?: true
    order_count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    products_count?: true
    type_count?: true
    status?: true
    order_count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    products_count?: true
    type_count?: true
    status?: true
    order_count?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    image: string
    products_count: number
    type_count: number
    status: boolean
    order_count: number
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    products_count?: boolean
    type_count?: boolean
    status?: boolean
    order_count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | Category$typeArgs<ExtArgs>
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    products_count?: boolean
    type_count?: boolean
    status?: boolean
    order_count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "products_count" | "type_count" | "status" | "order_count" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | Category$typeArgs<ExtArgs>
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      type: Prisma.$TypePayload<ExtArgs>[]
      foods: Prisma.$FoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string
      products_count: number
      type_count: number
      status: boolean
      order_count: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends Category$typeArgs<ExtArgs> = {}>(args?: Subset<T, Category$typeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    foods<T extends Category$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Category$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
    readonly products_count: FieldRef<"Category", 'Int'>
    readonly type_count: FieldRef<"Category", 'Int'>
    readonly status: FieldRef<"Category", 'Boolean'>
    readonly order_count: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category.type
   */
  export type Category$typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    cursor?: TypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Category.foods
   */
  export type Category$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    status: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: string
    name: string
    status: boolean
    categoryId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TypeCountAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Type$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>



  export type TypeSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["type"]>
  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Type$categoryArgs<ExtArgs>
  }

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: boolean
      categoryId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * @param {TypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const type = await prisma.type.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TypeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Type.
     * @param {TypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const type = await prisma.type.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TypeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
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
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Type$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Type$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Type model
   */
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'String'>
    readonly name: FieldRef<"Type", 'String'>
    readonly status: FieldRef<"Type", 'Boolean'>
    readonly categoryId: FieldRef<"Type", 'String'>
    readonly createdAt: FieldRef<"Type", 'DateTime'>
    readonly updatedAt: FieldRef<"Type", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Type findRaw
   */
  export type TypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Type aggregateRaw
   */
  export type TypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Type.category
   */
  export type Type$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Model Cuisine
   */

  export type AggregateCuisine = {
    _count: CuisineCountAggregateOutputType | null
    _min: CuisineMinAggregateOutputType | null
    _max: CuisineMaxAggregateOutputType | null
  }

  export type CuisineMinAggregateOutputType = {
    cuisineId: string | null
    name: string | null
    image: string | null
    status: boolean | null
    restaurantId: string | null
    foodId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CuisineMaxAggregateOutputType = {
    cuisineId: string | null
    name: string | null
    image: string | null
    status: boolean | null
    restaurantId: string | null
    foodId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CuisineCountAggregateOutputType = {
    cuisineId: number
    name: number
    image: number
    status: number
    restaurantId: number
    foodId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CuisineMinAggregateInputType = {
    cuisineId?: true
    name?: true
    image?: true
    status?: true
    restaurantId?: true
    foodId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CuisineMaxAggregateInputType = {
    cuisineId?: true
    name?: true
    image?: true
    status?: true
    restaurantId?: true
    foodId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CuisineCountAggregateInputType = {
    cuisineId?: true
    name?: true
    image?: true
    status?: true
    restaurantId?: true
    foodId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CuisineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuisine to aggregate.
     */
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     */
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cuisines
    **/
    _count?: true | CuisineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuisineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuisineMaxAggregateInputType
  }

  export type GetCuisineAggregateType<T extends CuisineAggregateArgs> = {
        [P in keyof T & keyof AggregateCuisine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuisine[P]>
      : GetScalarType<T[P], AggregateCuisine[P]>
  }




  export type CuisineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuisineWhereInput
    orderBy?: CuisineOrderByWithAggregationInput | CuisineOrderByWithAggregationInput[]
    by: CuisineScalarFieldEnum[] | CuisineScalarFieldEnum
    having?: CuisineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuisineCountAggregateInputType | true
    _min?: CuisineMinAggregateInputType
    _max?: CuisineMaxAggregateInputType
  }

  export type CuisineGroupByOutputType = {
    cuisineId: string
    name: string
    image: string
    status: boolean
    restaurantId: string | null
    foodId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CuisineCountAggregateOutputType | null
    _min: CuisineMinAggregateOutputType | null
    _max: CuisineMaxAggregateOutputType | null
  }

  type GetCuisineGroupByPayload<T extends CuisineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuisineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuisineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuisineGroupByOutputType[P]>
            : GetScalarType<T[P], CuisineGroupByOutputType[P]>
        }
      >
    >


  export type CuisineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cuisineId?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    restaurantId?: boolean
    foodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | Cuisine$restaurantArgs<ExtArgs>
    food?: boolean | Cuisine$foodArgs<ExtArgs>
  }, ExtArgs["result"]["cuisine"]>



  export type CuisineSelectScalar = {
    cuisineId?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    restaurantId?: boolean
    foodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CuisineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cuisineId" | "name" | "image" | "status" | "restaurantId" | "foodId" | "createdAt" | "updatedAt", ExtArgs["result"]["cuisine"]>
  export type CuisineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | Cuisine$restaurantArgs<ExtArgs>
    food?: boolean | Cuisine$foodArgs<ExtArgs>
  }

  export type $CuisinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cuisine"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs> | null
      food: Prisma.$FoodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      cuisineId: string
      name: string
      image: string
      status: boolean
      restaurantId: string | null
      foodId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cuisine"]>
    composites: {}
  }

  type CuisineGetPayload<S extends boolean | null | undefined | CuisineDefaultArgs> = $Result.GetResult<Prisma.$CuisinePayload, S>

  type CuisineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CuisineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuisineCountAggregateInputType | true
    }

  export interface CuisineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cuisine'], meta: { name: 'Cuisine' } }
    /**
     * Find zero or one Cuisine that matches the filter.
     * @param {CuisineFindUniqueArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuisineFindUniqueArgs>(args: SelectSubset<T, CuisineFindUniqueArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cuisine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CuisineFindUniqueOrThrowArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuisineFindUniqueOrThrowArgs>(args: SelectSubset<T, CuisineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuisine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineFindFirstArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuisineFindFirstArgs>(args?: SelectSubset<T, CuisineFindFirstArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuisine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineFindFirstOrThrowArgs} args - Arguments to find a Cuisine
     * @example
     * // Get one Cuisine
     * const cuisine = await prisma.cuisine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuisineFindFirstOrThrowArgs>(args?: SelectSubset<T, CuisineFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuisines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuisines
     * const cuisines = await prisma.cuisine.findMany()
     * 
     * // Get first 10 Cuisines
     * const cuisines = await prisma.cuisine.findMany({ take: 10 })
     * 
     * // Only select the `cuisineId`
     * const cuisineWithCuisineIdOnly = await prisma.cuisine.findMany({ select: { cuisineId: true } })
     * 
     */
    findMany<T extends CuisineFindManyArgs>(args?: SelectSubset<T, CuisineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cuisine.
     * @param {CuisineCreateArgs} args - Arguments to create a Cuisine.
     * @example
     * // Create one Cuisine
     * const Cuisine = await prisma.cuisine.create({
     *   data: {
     *     // ... data to create a Cuisine
     *   }
     * })
     * 
     */
    create<T extends CuisineCreateArgs>(args: SelectSubset<T, CuisineCreateArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cuisines.
     * @param {CuisineCreateManyArgs} args - Arguments to create many Cuisines.
     * @example
     * // Create many Cuisines
     * const cuisine = await prisma.cuisine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuisineCreateManyArgs>(args?: SelectSubset<T, CuisineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cuisine.
     * @param {CuisineDeleteArgs} args - Arguments to delete one Cuisine.
     * @example
     * // Delete one Cuisine
     * const Cuisine = await prisma.cuisine.delete({
     *   where: {
     *     // ... filter to delete one Cuisine
     *   }
     * })
     * 
     */
    delete<T extends CuisineDeleteArgs>(args: SelectSubset<T, CuisineDeleteArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cuisine.
     * @param {CuisineUpdateArgs} args - Arguments to update one Cuisine.
     * @example
     * // Update one Cuisine
     * const cuisine = await prisma.cuisine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuisineUpdateArgs>(args: SelectSubset<T, CuisineUpdateArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cuisines.
     * @param {CuisineDeleteManyArgs} args - Arguments to filter Cuisines to delete.
     * @example
     * // Delete a few Cuisines
     * const { count } = await prisma.cuisine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuisineDeleteManyArgs>(args?: SelectSubset<T, CuisineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuisines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuisines
     * const cuisine = await prisma.cuisine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuisineUpdateManyArgs>(args: SelectSubset<T, CuisineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuisine.
     * @param {CuisineUpsertArgs} args - Arguments to update or create a Cuisine.
     * @example
     * // Update or create a Cuisine
     * const cuisine = await prisma.cuisine.upsert({
     *   create: {
     *     // ... data to create a Cuisine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuisine we want to update
     *   }
     * })
     */
    upsert<T extends CuisineUpsertArgs>(args: SelectSubset<T, CuisineUpsertArgs<ExtArgs>>): Prisma__CuisineClient<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuisines that matches the filter.
     * @param {CuisineFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cuisine = await prisma.cuisine.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CuisineFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cuisine.
     * @param {CuisineAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cuisine = await prisma.cuisine.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CuisineAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Cuisines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineCountArgs} args - Arguments to filter Cuisines to count.
     * @example
     * // Count the number of Cuisines
     * const count = await prisma.cuisine.count({
     *   where: {
     *     // ... the filter for the Cuisines we want to count
     *   }
     * })
    **/
    count<T extends CuisineCountArgs>(
      args?: Subset<T, CuisineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuisineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuisine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuisineAggregateArgs>(args: Subset<T, CuisineAggregateArgs>): Prisma.PrismaPromise<GetCuisineAggregateType<T>>

    /**
     * Group by Cuisine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineGroupByArgs} args - Group by arguments.
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
      T extends CuisineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuisineGroupByArgs['orderBy'] }
        : { orderBy?: CuisineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CuisineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuisineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cuisine model
   */
  readonly fields: CuisineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuisine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuisineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends Cuisine$restaurantArgs<ExtArgs> = {}>(args?: Subset<T, Cuisine$restaurantArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    food<T extends Cuisine$foodArgs<ExtArgs> = {}>(args?: Subset<T, Cuisine$foodArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cuisine model
   */
  interface CuisineFieldRefs {
    readonly cuisineId: FieldRef<"Cuisine", 'String'>
    readonly name: FieldRef<"Cuisine", 'String'>
    readonly image: FieldRef<"Cuisine", 'String'>
    readonly status: FieldRef<"Cuisine", 'Boolean'>
    readonly restaurantId: FieldRef<"Cuisine", 'String'>
    readonly foodId: FieldRef<"Cuisine", 'String'>
    readonly createdAt: FieldRef<"Cuisine", 'DateTime'>
    readonly updatedAt: FieldRef<"Cuisine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cuisine findUnique
   */
  export type CuisineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    /**
     * Filter, which Cuisine to fetch.
     */
    where: CuisineWhereUniqueInput
  }

  /**
   * Cuisine findUniqueOrThrow
   */
  export type CuisineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    /**
     * Filter, which Cuisine to fetch.
     */
    where: CuisineWhereUniqueInput
  }

  /**
   * Cuisine findFirst
   */
  export type CuisineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    /**
     * Filter, which Cuisine to fetch.
     */
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     */
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuisines.
     */
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuisines.
     */
    distinct?: CuisineScalarFieldEnum | CuisineScalarFieldEnum[]
  }

  /**
   * Cuisine findFirstOrThrow
   */
  export type CuisineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    /**
     * Filter, which Cuisine to fetch.
     */
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     */
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuisines.
     */
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuisines.
     */
    distinct?: CuisineScalarFieldEnum | CuisineScalarFieldEnum[]
  }

  /**
   * Cuisine findMany
   */
  export type CuisineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    /**
     * Filter, which Cuisines to fetch.
     */
    where?: CuisineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuisines to fetch.
     */
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cuisines.
     */
    cursor?: CuisineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuisines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuisines.
     */
    skip?: number
    distinct?: CuisineScalarFieldEnum | CuisineScalarFieldEnum[]
  }

  /**
   * Cuisine create
   */
  export type CuisineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    /**
     * The data needed to create a Cuisine.
     */
    data: XOR<CuisineCreateInput, CuisineUncheckedCreateInput>
  }

  /**
   * Cuisine createMany
   */
  export type CuisineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cuisines.
     */
    data: CuisineCreateManyInput | CuisineCreateManyInput[]
  }

  /**
   * Cuisine update
   */
  export type CuisineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    /**
     * The data needed to update a Cuisine.
     */
    data: XOR<CuisineUpdateInput, CuisineUncheckedUpdateInput>
    /**
     * Choose, which Cuisine to update.
     */
    where: CuisineWhereUniqueInput
  }

  /**
   * Cuisine updateMany
   */
  export type CuisineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cuisines.
     */
    data: XOR<CuisineUpdateManyMutationInput, CuisineUncheckedUpdateManyInput>
    /**
     * Filter which Cuisines to update
     */
    where?: CuisineWhereInput
    /**
     * Limit how many Cuisines to update.
     */
    limit?: number
  }

  /**
   * Cuisine upsert
   */
  export type CuisineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    /**
     * The filter to search for the Cuisine to update in case it exists.
     */
    where: CuisineWhereUniqueInput
    /**
     * In case the Cuisine found by the `where` argument doesn't exist, create a new Cuisine with this data.
     */
    create: XOR<CuisineCreateInput, CuisineUncheckedCreateInput>
    /**
     * In case the Cuisine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuisineUpdateInput, CuisineUncheckedUpdateInput>
  }

  /**
   * Cuisine delete
   */
  export type CuisineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    /**
     * Filter which Cuisine to delete.
     */
    where: CuisineWhereUniqueInput
  }

  /**
   * Cuisine deleteMany
   */
  export type CuisineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuisines to delete
     */
    where?: CuisineWhereInput
    /**
     * Limit how many Cuisines to delete.
     */
    limit?: number
  }

  /**
   * Cuisine findRaw
   */
  export type CuisineFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cuisine aggregateRaw
   */
  export type CuisineAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cuisine.restaurant
   */
  export type Cuisine$restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
  }

  /**
   * Cuisine.food
   */
  export type Cuisine$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
  }

  /**
   * Cuisine without action
   */
  export type CuisineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
  }


  /**
   * Model schedules
   */

  export type AggregateSchedules = {
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  export type SchedulesAvgAggregateOutputType = {
    day: number | null
  }

  export type SchedulesSumAggregateOutputType = {
    day: number | null
  }

  export type SchedulesMinAggregateOutputType = {
    scheduleId: string | null
    day: number | null
    opening_time: Date | null
    closeing_time: Date | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchedulesMaxAggregateOutputType = {
    scheduleId: string | null
    day: number | null
    opening_time: Date | null
    closeing_time: Date | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchedulesCountAggregateOutputType = {
    scheduleId: number
    day: number
    opening_time: number
    closeing_time: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchedulesAvgAggregateInputType = {
    day?: true
  }

  export type SchedulesSumAggregateInputType = {
    day?: true
  }

  export type SchedulesMinAggregateInputType = {
    scheduleId?: true
    day?: true
    opening_time?: true
    closeing_time?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchedulesMaxAggregateInputType = {
    scheduleId?: true
    day?: true
    opening_time?: true
    closeing_time?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchedulesCountAggregateInputType = {
    scheduleId?: true
    day?: true
    opening_time?: true
    closeing_time?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to aggregate.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | SchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulesMaxAggregateInputType
  }

  export type GetSchedulesAggregateType<T extends SchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedules[P]>
      : GetScalarType<T[P], AggregateSchedules[P]>
  }




  export type schedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
    orderBy?: schedulesOrderByWithAggregationInput | schedulesOrderByWithAggregationInput[]
    by: SchedulesScalarFieldEnum[] | SchedulesScalarFieldEnum
    having?: schedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulesCountAggregateInputType | true
    _avg?: SchedulesAvgAggregateInputType
    _sum?: SchedulesSumAggregateInputType
    _min?: SchedulesMinAggregateInputType
    _max?: SchedulesMaxAggregateInputType
  }

  export type SchedulesGroupByOutputType = {
    scheduleId: string
    day: number
    opening_time: Date | null
    closeing_time: Date | null
    restaurantId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  type GetSchedulesGroupByPayload<T extends schedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
        }
      >
    >


  export type schedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    day?: boolean
    opening_time?: boolean
    closeing_time?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | schedules$restaurantArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>



  export type schedulesSelectScalar = {
    scheduleId?: boolean
    day?: boolean
    opening_time?: boolean
    closeing_time?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type schedulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scheduleId" | "day" | "opening_time" | "closeing_time" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["schedules"]>
  export type schedulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | schedules$restaurantArgs<ExtArgs>
  }

  export type $schedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schedules"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      scheduleId: string
      day: number
      opening_time: Date | null
      closeing_time: Date | null
      restaurantId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedules"]>
    composites: {}
  }

  type schedulesGetPayload<S extends boolean | null | undefined | schedulesDefaultArgs> = $Result.GetResult<Prisma.$schedulesPayload, S>

  type schedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<schedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulesCountAggregateInputType | true
    }

  export interface schedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedules'], meta: { name: 'schedules' } }
    /**
     * Find zero or one Schedules that matches the filter.
     * @param {schedulesFindUniqueArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends schedulesFindUniqueArgs>(args: SelectSubset<T, schedulesFindUniqueArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {schedulesFindUniqueOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends schedulesFindUniqueOrThrowArgs>(args: SelectSubset<T, schedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends schedulesFindFirstArgs>(args?: SelectSubset<T, schedulesFindFirstArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends schedulesFindFirstOrThrowArgs>(args?: SelectSubset<T, schedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedules.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedules.findMany({ take: 10 })
     * 
     * // Only select the `scheduleId`
     * const schedulesWithScheduleIdOnly = await prisma.schedules.findMany({ select: { scheduleId: true } })
     * 
     */
    findMany<T extends schedulesFindManyArgs>(args?: SelectSubset<T, schedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedules.
     * @param {schedulesCreateArgs} args - Arguments to create a Schedules.
     * @example
     * // Create one Schedules
     * const Schedules = await prisma.schedules.create({
     *   data: {
     *     // ... data to create a Schedules
     *   }
     * })
     * 
     */
    create<T extends schedulesCreateArgs>(args: SelectSubset<T, schedulesCreateArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {schedulesCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedules = await prisma.schedules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends schedulesCreateManyArgs>(args?: SelectSubset<T, schedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedules.
     * @param {schedulesDeleteArgs} args - Arguments to delete one Schedules.
     * @example
     * // Delete one Schedules
     * const Schedules = await prisma.schedules.delete({
     *   where: {
     *     // ... filter to delete one Schedules
     *   }
     * })
     * 
     */
    delete<T extends schedulesDeleteArgs>(args: SelectSubset<T, schedulesDeleteArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedules.
     * @param {schedulesUpdateArgs} args - Arguments to update one Schedules.
     * @example
     * // Update one Schedules
     * const schedules = await prisma.schedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends schedulesUpdateArgs>(args: SelectSubset<T, schedulesUpdateArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {schedulesDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends schedulesDeleteManyArgs>(args?: SelectSubset<T, schedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends schedulesUpdateManyArgs>(args: SelectSubset<T, schedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedules.
     * @param {schedulesUpsertArgs} args - Arguments to update or create a Schedules.
     * @example
     * // Update or create a Schedules
     * const schedules = await prisma.schedules.upsert({
     *   create: {
     *     // ... data to create a Schedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedules we want to update
     *   }
     * })
     */
    upsert<T extends schedulesUpsertArgs>(args: SelectSubset<T, schedulesUpsertArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * @param {schedulesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const schedules = await prisma.schedules.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: schedulesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Schedules.
     * @param {schedulesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const schedules = await prisma.schedules.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: schedulesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedules.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends schedulesCountArgs>(
      args?: Subset<T, schedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulesAggregateArgs>(args: Subset<T, SchedulesAggregateArgs>): Prisma.PrismaPromise<GetSchedulesAggregateType<T>>

    /**
     * Group by Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesGroupByArgs} args - Group by arguments.
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
      T extends schedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schedulesGroupByArgs['orderBy'] }
        : { orderBy?: schedulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, schedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schedules model
   */
  readonly fields: schedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends schedules$restaurantArgs<ExtArgs> = {}>(args?: Subset<T, schedules$restaurantArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schedules model
   */
  interface schedulesFieldRefs {
    readonly scheduleId: FieldRef<"schedules", 'String'>
    readonly day: FieldRef<"schedules", 'Int'>
    readonly opening_time: FieldRef<"schedules", 'DateTime'>
    readonly closeing_time: FieldRef<"schedules", 'DateTime'>
    readonly restaurantId: FieldRef<"schedules", 'String'>
    readonly createdAt: FieldRef<"schedules", 'DateTime'>
    readonly updatedAt: FieldRef<"schedules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * schedules findUnique
   */
  export type schedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules findUniqueOrThrow
   */
  export type schedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules findFirst
   */
  export type schedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules findFirstOrThrow
   */
  export type schedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules findMany
   */
  export type schedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules create
   */
  export type schedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a schedules.
     */
    data: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
  }

  /**
   * schedules createMany
   */
  export type schedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: schedulesCreateManyInput | schedulesCreateManyInput[]
  }

  /**
   * schedules update
   */
  export type schedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a schedules.
     */
    data: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
    /**
     * Choose, which schedules to update.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules updateMany
   */
  export type schedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
  }

  /**
   * schedules upsert
   */
  export type schedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the schedules to update in case it exists.
     */
    where: schedulesWhereUniqueInput
    /**
     * In case the schedules found by the `where` argument doesn't exist, create a new schedules with this data.
     */
    create: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
    /**
     * In case the schedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
  }

  /**
   * schedules delete
   */
  export type schedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter which schedules to delete.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules deleteMany
   */
  export type schedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to delete.
     */
    limit?: number
  }

  /**
   * schedules findRaw
   */
  export type schedulesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * schedules aggregateRaw
   */
  export type schedulesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * schedules.restaurant
   */
  export type schedules$restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
  }

  /**
   * schedules without action
   */
  export type schedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
  }


  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    minimum_order: number | null
    comission: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    minimum_order: number | null
    comission: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    restaurantId: string | null
    name: string | null
    phone: string | null
    email: string | null
    logo: string | null
    image: string | null
    longitude: string | null
    latitude: string | null
    address: string | null
    footer_text: string | null
    minimum_order: number | null
    comission: number | null
    schedule_order: boolean | null
    cover_photo: string | null
    delivery: boolean | null
    free_delivery: boolean | null
    active: boolean | null
    off_day: string | null
    delivery_time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    restaurantId: string | null
    name: string | null
    phone: string | null
    email: string | null
    logo: string | null
    image: string | null
    longitude: string | null
    latitude: string | null
    address: string | null
    footer_text: string | null
    minimum_order: number | null
    comission: number | null
    schedule_order: boolean | null
    cover_photo: string | null
    delivery: boolean | null
    free_delivery: boolean | null
    active: boolean | null
    off_day: string | null
    delivery_time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    restaurantId: number
    name: number
    phone: number
    email: number
    logo: number
    image: number
    longitude: number
    latitude: number
    address: number
    footer_text: number
    minimum_order: number
    comission: number
    schedule_order: number
    cover_photo: number
    delivery: number
    free_delivery: number
    active: number
    off_day: number
    delivery_time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    minimum_order?: true
    comission?: true
  }

  export type RestaurantSumAggregateInputType = {
    minimum_order?: true
    comission?: true
  }

  export type RestaurantMinAggregateInputType = {
    restaurantId?: true
    name?: true
    phone?: true
    email?: true
    logo?: true
    image?: true
    longitude?: true
    latitude?: true
    address?: true
    footer_text?: true
    minimum_order?: true
    comission?: true
    schedule_order?: true
    cover_photo?: true
    delivery?: true
    free_delivery?: true
    active?: true
    off_day?: true
    delivery_time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    restaurantId?: true
    name?: true
    phone?: true
    email?: true
    logo?: true
    image?: true
    longitude?: true
    latitude?: true
    address?: true
    footer_text?: true
    minimum_order?: true
    comission?: true
    schedule_order?: true
    cover_photo?: true
    delivery?: true
    free_delivery?: true
    active?: true
    off_day?: true
    delivery_time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    restaurantId?: true
    name?: true
    phone?: true
    email?: true
    logo?: true
    image?: true
    longitude?: true
    latitude?: true
    address?: true
    footer_text?: true
    minimum_order?: true
    comission?: true
    schedule_order?: true
    cover_photo?: true
    delivery?: true
    free_delivery?: true
    active?: true
    off_day?: true
    delivery_time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    restaurantId: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    restaurantId?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    logo?: boolean
    image?: boolean
    longitude?: boolean
    latitude?: boolean
    address?: boolean
    footer_text?: boolean
    minimum_order?: boolean
    comission?: boolean
    schedule_order?: boolean
    cover_photo?: boolean
    delivery?: boolean
    free_delivery?: boolean
    active?: boolean
    off_day?: boolean
    delivery_time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedules?: boolean | Restaurant$schedulesArgs<ExtArgs>
    foods?: boolean | Restaurant$foodsArgs<ExtArgs>
    cuisine?: boolean | Restaurant$cuisineArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>



  export type RestaurantSelectScalar = {
    restaurantId?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    logo?: boolean
    image?: boolean
    longitude?: boolean
    latitude?: boolean
    address?: boolean
    footer_text?: boolean
    minimum_order?: boolean
    comission?: boolean
    schedule_order?: boolean
    cover_photo?: boolean
    delivery?: boolean
    free_delivery?: boolean
    active?: boolean
    off_day?: boolean
    delivery_time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"restaurantId" | "name" | "phone" | "email" | "logo" | "image" | "longitude" | "latitude" | "address" | "footer_text" | "minimum_order" | "comission" | "schedule_order" | "cover_photo" | "delivery" | "free_delivery" | "active" | "off_day" | "delivery_time" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurant"]>
  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | Restaurant$schedulesArgs<ExtArgs>
    foods?: boolean | Restaurant$foodsArgs<ExtArgs>
    cuisine?: boolean | Restaurant$cuisineArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      schedules: Prisma.$schedulesPayload<ExtArgs>[]
      foods: Prisma.$FoodPayload<ExtArgs>[]
      cuisine: Prisma.$CuisinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      restaurantId: string
      name: string
      phone: string
      email: string
      logo: string
      image: string
      longitude: string
      latitude: string
      address: string
      footer_text: string
      minimum_order: number
      comission: number
      schedule_order: boolean
      cover_photo: string
      delivery: boolean
      free_delivery: boolean
      active: boolean
      off_day: string
      delivery_time: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `restaurantId`
     * const restaurantWithRestaurantIdOnly = await prisma.restaurant.findMany({ select: { restaurantId: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * @param {RestaurantFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const restaurant = await prisma.restaurant.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RestaurantFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Restaurant.
     * @param {RestaurantAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const restaurant = await prisma.restaurant.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RestaurantAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedules<T extends Restaurant$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    foods<T extends Restaurant$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cuisine<T extends Restaurant$cuisineArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$cuisineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuisinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly restaurantId: FieldRef<"Restaurant", 'String'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly phone: FieldRef<"Restaurant", 'String'>
    readonly email: FieldRef<"Restaurant", 'String'>
    readonly logo: FieldRef<"Restaurant", 'String'>
    readonly image: FieldRef<"Restaurant", 'String'>
    readonly longitude: FieldRef<"Restaurant", 'String'>
    readonly latitude: FieldRef<"Restaurant", 'String'>
    readonly address: FieldRef<"Restaurant", 'String'>
    readonly footer_text: FieldRef<"Restaurant", 'String'>
    readonly minimum_order: FieldRef<"Restaurant", 'Float'>
    readonly comission: FieldRef<"Restaurant", 'Float'>
    readonly schedule_order: FieldRef<"Restaurant", 'Boolean'>
    readonly cover_photo: FieldRef<"Restaurant", 'String'>
    readonly delivery: FieldRef<"Restaurant", 'Boolean'>
    readonly free_delivery: FieldRef<"Restaurant", 'Boolean'>
    readonly active: FieldRef<"Restaurant", 'Boolean'>
    readonly off_day: FieldRef<"Restaurant", 'String'>
    readonly delivery_time: FieldRef<"Restaurant", 'String'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurant findRaw
   */
  export type RestaurantFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Restaurant aggregateRaw
   */
  export type RestaurantAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Restaurant.schedules
   */
  export type Restaurant$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    where?: schedulesWhereInput
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    cursor?: schedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * Restaurant.foods
   */
  export type Restaurant$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Restaurant.cuisine
   */
  export type Restaurant$cuisineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuisine
     */
    select?: CuisineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuisine
     */
    omit?: CuisineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuisineInclude<ExtArgs> | null
    where?: CuisineWhereInput
    orderBy?: CuisineOrderByWithRelationInput | CuisineOrderByWithRelationInput[]
    cursor?: CuisineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuisineScalarFieldEnum | CuisineScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phone: 'phone',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    min_delivery_time: 'min_delivery_time',
    max_delivery_time: 'max_delivery_time',
    free_delivery: 'free_delivery',
    veg: 'veg',
    discount: 'discount',
    sell_count: 'sell_count',
    image: 'image',
    restaurantId: 'restaurantId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    variantId: 'variantId',
    name: 'name',
    type: 'type',
    min: 'min',
    max: 'max',
    required: 'required',
    foodId: 'foodId'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  export const ValueScalarFieldEnum: {
    valueId: 'valueId',
    label: 'label',
    optionPrice: 'optionPrice',
    stock: 'stock',
    stock_unlimited: 'stock_unlimited',
    variantId: 'variantId'
  };

  export type ValueScalarFieldEnum = (typeof ValueScalarFieldEnum)[keyof typeof ValueScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    products_count: 'products_count',
    type_count: 'type_count',
    status: 'status',
    order_count: 'order_count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const CuisineScalarFieldEnum: {
    cuisineId: 'cuisineId',
    name: 'name',
    image: 'image',
    status: 'status',
    restaurantId: 'restaurantId',
    foodId: 'foodId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CuisineScalarFieldEnum = (typeof CuisineScalarFieldEnum)[keyof typeof CuisineScalarFieldEnum]


  export const SchedulesScalarFieldEnum: {
    scheduleId: 'scheduleId',
    day: 'day',
    opening_time: 'opening_time',
    closeing_time: 'closeing_time',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchedulesScalarFieldEnum = (typeof SchedulesScalarFieldEnum)[keyof typeof SchedulesScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    restaurantId: 'restaurantId',
    name: 'name',
    phone: 'phone',
    email: 'email',
    logo: 'logo',
    image: 'image',
    longitude: 'longitude',
    latitude: 'latitude',
    address: 'address',
    footer_text: 'footer_text',
    minimum_order: 'minimum_order',
    comission: 'comission',
    schedule_order: 'schedule_order',
    cover_photo: 'cover_photo',
    delivery: 'delivery',
    free_delivery: 'free_delivery',
    active: 'active',
    off_day: 'off_day',
    delivery_time: 'delivery_time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: StringFilter<"Food"> | string
    name?: StringFilter<"Food"> | string
    description?: StringFilter<"Food"> | string
    price?: FloatFilter<"Food"> | number
    min_delivery_time?: IntFilter<"Food"> | number
    max_delivery_time?: IntFilter<"Food"> | number
    free_delivery?: BoolFilter<"Food"> | boolean
    veg?: BoolFilter<"Food"> | boolean
    discount?: FloatFilter<"Food"> | number
    sell_count?: IntFilter<"Food"> | number
    image?: StringFilter<"Food"> | string
    restaurantId?: StringNullableFilter<"Food"> | string | null
    categoryId?: StringNullableFilter<"Food"> | string | null
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    variants?: VariantListRelationFilter
    cuisine?: CuisineListRelationFilter
    restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    min_delivery_time?: SortOrder
    max_delivery_time?: SortOrder
    free_delivery?: SortOrder
    veg?: SortOrder
    discount?: SortOrder
    sell_count?: SortOrder
    image?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variants?: VariantOrderByRelationAggregateInput
    cuisine?: CuisineOrderByRelationAggregateInput
    restaurant?: RestaurantOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    name?: StringFilter<"Food"> | string
    description?: StringFilter<"Food"> | string
    price?: FloatFilter<"Food"> | number
    min_delivery_time?: IntFilter<"Food"> | number
    max_delivery_time?: IntFilter<"Food"> | number
    free_delivery?: BoolFilter<"Food"> | boolean
    veg?: BoolFilter<"Food"> | boolean
    discount?: FloatFilter<"Food"> | number
    sell_count?: IntFilter<"Food"> | number
    image?: StringFilter<"Food"> | string
    restaurantId?: StringNullableFilter<"Food"> | string | null
    categoryId?: StringNullableFilter<"Food"> | string | null
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    variants?: VariantListRelationFilter
    cuisine?: CuisineListRelationFilter
    restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    min_delivery_time?: SortOrder
    max_delivery_time?: SortOrder
    free_delivery?: SortOrder
    veg?: SortOrder
    discount?: SortOrder
    sell_count?: SortOrder
    image?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Food"> | string
    name?: StringWithAggregatesFilter<"Food"> | string
    description?: StringWithAggregatesFilter<"Food"> | string
    price?: FloatWithAggregatesFilter<"Food"> | number
    min_delivery_time?: IntWithAggregatesFilter<"Food"> | number
    max_delivery_time?: IntWithAggregatesFilter<"Food"> | number
    free_delivery?: BoolWithAggregatesFilter<"Food"> | boolean
    veg?: BoolWithAggregatesFilter<"Food"> | boolean
    discount?: FloatWithAggregatesFilter<"Food"> | number
    sell_count?: IntWithAggregatesFilter<"Food"> | number
    image?: StringWithAggregatesFilter<"Food"> | string
    restaurantId?: StringNullableWithAggregatesFilter<"Food"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Food"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
  }

  export type VariantWhereInput = {
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    variantId?: StringFilter<"Variant"> | string
    name?: StringFilter<"Variant"> | string
    type?: StringFilter<"Variant"> | string
    min?: StringFilter<"Variant"> | string
    max?: StringFilter<"Variant"> | string
    required?: BoolFilter<"Variant"> | boolean
    foodId?: StringNullableFilter<"Variant"> | string | null
    food?: XOR<FoodNullableScalarRelationFilter, FoodWhereInput> | null
    values?: ValueListRelationFilter
  }

  export type VariantOrderByWithRelationInput = {
    variantId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    min?: SortOrder
    max?: SortOrder
    required?: SortOrder
    foodId?: SortOrder
    food?: FoodOrderByWithRelationInput
    values?: ValueOrderByRelationAggregateInput
  }

  export type VariantWhereUniqueInput = Prisma.AtLeast<{
    variantId?: string
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    name?: StringFilter<"Variant"> | string
    type?: StringFilter<"Variant"> | string
    min?: StringFilter<"Variant"> | string
    max?: StringFilter<"Variant"> | string
    required?: BoolFilter<"Variant"> | boolean
    foodId?: StringNullableFilter<"Variant"> | string | null
    food?: XOR<FoodNullableScalarRelationFilter, FoodWhereInput> | null
    values?: ValueListRelationFilter
  }, "variantId">

  export type VariantOrderByWithAggregationInput = {
    variantId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    min?: SortOrder
    max?: SortOrder
    required?: SortOrder
    foodId?: SortOrder
    _count?: VariantCountOrderByAggregateInput
    _max?: VariantMaxOrderByAggregateInput
    _min?: VariantMinOrderByAggregateInput
  }

  export type VariantScalarWhereWithAggregatesInput = {
    AND?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    OR?: VariantScalarWhereWithAggregatesInput[]
    NOT?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    variantId?: StringWithAggregatesFilter<"Variant"> | string
    name?: StringWithAggregatesFilter<"Variant"> | string
    type?: StringWithAggregatesFilter<"Variant"> | string
    min?: StringWithAggregatesFilter<"Variant"> | string
    max?: StringWithAggregatesFilter<"Variant"> | string
    required?: BoolWithAggregatesFilter<"Variant"> | boolean
    foodId?: StringNullableWithAggregatesFilter<"Variant"> | string | null
  }

  export type ValueWhereInput = {
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    valueId?: StringFilter<"Value"> | string
    label?: StringFilter<"Value"> | string
    optionPrice?: IntFilter<"Value"> | number
    stock?: IntFilter<"Value"> | number
    stock_unlimited?: BoolFilter<"Value"> | boolean
    variantId?: StringNullableFilter<"Value"> | string | null
    variant?: XOR<VariantNullableScalarRelationFilter, VariantWhereInput> | null
  }

  export type ValueOrderByWithRelationInput = {
    valueId?: SortOrder
    label?: SortOrder
    optionPrice?: SortOrder
    stock?: SortOrder
    stock_unlimited?: SortOrder
    variantId?: SortOrder
    variant?: VariantOrderByWithRelationInput
  }

  export type ValueWhereUniqueInput = Prisma.AtLeast<{
    valueId?: string
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    label?: StringFilter<"Value"> | string
    optionPrice?: IntFilter<"Value"> | number
    stock?: IntFilter<"Value"> | number
    stock_unlimited?: BoolFilter<"Value"> | boolean
    variantId?: StringNullableFilter<"Value"> | string | null
    variant?: XOR<VariantNullableScalarRelationFilter, VariantWhereInput> | null
  }, "valueId">

  export type ValueOrderByWithAggregationInput = {
    valueId?: SortOrder
    label?: SortOrder
    optionPrice?: SortOrder
    stock?: SortOrder
    stock_unlimited?: SortOrder
    variantId?: SortOrder
    _count?: ValueCountOrderByAggregateInput
    _avg?: ValueAvgOrderByAggregateInput
    _max?: ValueMaxOrderByAggregateInput
    _min?: ValueMinOrderByAggregateInput
    _sum?: ValueSumOrderByAggregateInput
  }

  export type ValueScalarWhereWithAggregatesInput = {
    AND?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    OR?: ValueScalarWhereWithAggregatesInput[]
    NOT?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    valueId?: StringWithAggregatesFilter<"Value"> | string
    label?: StringWithAggregatesFilter<"Value"> | string
    optionPrice?: IntWithAggregatesFilter<"Value"> | number
    stock?: IntWithAggregatesFilter<"Value"> | number
    stock_unlimited?: BoolWithAggregatesFilter<"Value"> | boolean
    variantId?: StringNullableWithAggregatesFilter<"Value"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    image?: StringFilter<"Category"> | string
    products_count?: IntFilter<"Category"> | number
    type_count?: IntFilter<"Category"> | number
    status?: BoolFilter<"Category"> | boolean
    order_count?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    type?: TypeListRelationFilter
    foods?: FoodListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    products_count?: SortOrder
    type_count?: SortOrder
    status?: SortOrder
    order_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: TypeOrderByRelationAggregateInput
    foods?: FoodOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    image?: StringFilter<"Category"> | string
    products_count?: IntFilter<"Category"> | number
    type_count?: IntFilter<"Category"> | number
    status?: BoolFilter<"Category"> | boolean
    order_count?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    type?: TypeListRelationFilter
    foods?: FoodListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    products_count?: SortOrder
    type_count?: SortOrder
    status?: SortOrder
    order_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    image?: StringWithAggregatesFilter<"Category"> | string
    products_count?: IntWithAggregatesFilter<"Category"> | number
    type_count?: IntWithAggregatesFilter<"Category"> | number
    status?: BoolWithAggregatesFilter<"Category"> | boolean
    order_count?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: StringFilter<"Type"> | string
    name?: StringFilter<"Type"> | string
    status?: BoolFilter<"Type"> | boolean
    categoryId?: StringNullableFilter<"Type"> | string | null
    createdAt?: DateTimeFilter<"Type"> | Date | string
    updatedAt?: DateTimeFilter<"Type"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    name?: StringFilter<"Type"> | string
    status?: BoolFilter<"Type"> | boolean
    categoryId?: StringNullableFilter<"Type"> | string | null
    createdAt?: DateTimeFilter<"Type"> | Date | string
    updatedAt?: DateTimeFilter<"Type"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Type"> | string
    name?: StringWithAggregatesFilter<"Type"> | string
    status?: BoolWithAggregatesFilter<"Type"> | boolean
    categoryId?: StringNullableWithAggregatesFilter<"Type"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Type"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Type"> | Date | string
  }

  export type CuisineWhereInput = {
    AND?: CuisineWhereInput | CuisineWhereInput[]
    OR?: CuisineWhereInput[]
    NOT?: CuisineWhereInput | CuisineWhereInput[]
    cuisineId?: StringFilter<"Cuisine"> | string
    name?: StringFilter<"Cuisine"> | string
    image?: StringFilter<"Cuisine"> | string
    status?: BoolFilter<"Cuisine"> | boolean
    restaurantId?: StringNullableFilter<"Cuisine"> | string | null
    foodId?: StringNullableFilter<"Cuisine"> | string | null
    createdAt?: DateTimeFilter<"Cuisine"> | Date | string
    updatedAt?: DateTimeFilter<"Cuisine"> | Date | string
    restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
    food?: XOR<FoodNullableScalarRelationFilter, FoodWhereInput> | null
  }

  export type CuisineOrderByWithRelationInput = {
    cuisineId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    restaurantId?: SortOrder
    foodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
  }

  export type CuisineWhereUniqueInput = Prisma.AtLeast<{
    cuisineId?: string
    AND?: CuisineWhereInput | CuisineWhereInput[]
    OR?: CuisineWhereInput[]
    NOT?: CuisineWhereInput | CuisineWhereInput[]
    name?: StringFilter<"Cuisine"> | string
    image?: StringFilter<"Cuisine"> | string
    status?: BoolFilter<"Cuisine"> | boolean
    restaurantId?: StringNullableFilter<"Cuisine"> | string | null
    foodId?: StringNullableFilter<"Cuisine"> | string | null
    createdAt?: DateTimeFilter<"Cuisine"> | Date | string
    updatedAt?: DateTimeFilter<"Cuisine"> | Date | string
    restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
    food?: XOR<FoodNullableScalarRelationFilter, FoodWhereInput> | null
  }, "cuisineId">

  export type CuisineOrderByWithAggregationInput = {
    cuisineId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    restaurantId?: SortOrder
    foodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CuisineCountOrderByAggregateInput
    _max?: CuisineMaxOrderByAggregateInput
    _min?: CuisineMinOrderByAggregateInput
  }

  export type CuisineScalarWhereWithAggregatesInput = {
    AND?: CuisineScalarWhereWithAggregatesInput | CuisineScalarWhereWithAggregatesInput[]
    OR?: CuisineScalarWhereWithAggregatesInput[]
    NOT?: CuisineScalarWhereWithAggregatesInput | CuisineScalarWhereWithAggregatesInput[]
    cuisineId?: StringWithAggregatesFilter<"Cuisine"> | string
    name?: StringWithAggregatesFilter<"Cuisine"> | string
    image?: StringWithAggregatesFilter<"Cuisine"> | string
    status?: BoolWithAggregatesFilter<"Cuisine"> | boolean
    restaurantId?: StringNullableWithAggregatesFilter<"Cuisine"> | string | null
    foodId?: StringNullableWithAggregatesFilter<"Cuisine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cuisine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cuisine"> | Date | string
  }

  export type schedulesWhereInput = {
    AND?: schedulesWhereInput | schedulesWhereInput[]
    OR?: schedulesWhereInput[]
    NOT?: schedulesWhereInput | schedulesWhereInput[]
    scheduleId?: StringFilter<"schedules"> | string
    day?: IntFilter<"schedules"> | number
    opening_time?: DateTimeNullableFilter<"schedules"> | Date | string | null
    closeing_time?: DateTimeNullableFilter<"schedules"> | Date | string | null
    restaurantId?: StringNullableFilter<"schedules"> | string | null
    createdAt?: DateTimeFilter<"schedules"> | Date | string
    updatedAt?: DateTimeFilter<"schedules"> | Date | string
    restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
  }

  export type schedulesOrderByWithRelationInput = {
    scheduleId?: SortOrder
    day?: SortOrder
    opening_time?: SortOrder
    closeing_time?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type schedulesWhereUniqueInput = Prisma.AtLeast<{
    scheduleId?: string
    AND?: schedulesWhereInput | schedulesWhereInput[]
    OR?: schedulesWhereInput[]
    NOT?: schedulesWhereInput | schedulesWhereInput[]
    day?: IntFilter<"schedules"> | number
    opening_time?: DateTimeNullableFilter<"schedules"> | Date | string | null
    closeing_time?: DateTimeNullableFilter<"schedules"> | Date | string | null
    restaurantId?: StringNullableFilter<"schedules"> | string | null
    createdAt?: DateTimeFilter<"schedules"> | Date | string
    updatedAt?: DateTimeFilter<"schedules"> | Date | string
    restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
  }, "scheduleId">

  export type schedulesOrderByWithAggregationInput = {
    scheduleId?: SortOrder
    day?: SortOrder
    opening_time?: SortOrder
    closeing_time?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: schedulesCountOrderByAggregateInput
    _avg?: schedulesAvgOrderByAggregateInput
    _max?: schedulesMaxOrderByAggregateInput
    _min?: schedulesMinOrderByAggregateInput
    _sum?: schedulesSumOrderByAggregateInput
  }

  export type schedulesScalarWhereWithAggregatesInput = {
    AND?: schedulesScalarWhereWithAggregatesInput | schedulesScalarWhereWithAggregatesInput[]
    OR?: schedulesScalarWhereWithAggregatesInput[]
    NOT?: schedulesScalarWhereWithAggregatesInput | schedulesScalarWhereWithAggregatesInput[]
    scheduleId?: StringWithAggregatesFilter<"schedules"> | string
    day?: IntWithAggregatesFilter<"schedules"> | number
    opening_time?: DateTimeNullableWithAggregatesFilter<"schedules"> | Date | string | null
    closeing_time?: DateTimeNullableWithAggregatesFilter<"schedules"> | Date | string | null
    restaurantId?: StringNullableWithAggregatesFilter<"schedules"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"schedules"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"schedules"> | Date | string
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    restaurantId?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    phone?: StringFilter<"Restaurant"> | string
    email?: StringFilter<"Restaurant"> | string
    logo?: StringFilter<"Restaurant"> | string
    image?: StringFilter<"Restaurant"> | string
    longitude?: StringFilter<"Restaurant"> | string
    latitude?: StringFilter<"Restaurant"> | string
    address?: StringFilter<"Restaurant"> | string
    footer_text?: StringFilter<"Restaurant"> | string
    minimum_order?: FloatFilter<"Restaurant"> | number
    comission?: FloatFilter<"Restaurant"> | number
    schedule_order?: BoolFilter<"Restaurant"> | boolean
    cover_photo?: StringFilter<"Restaurant"> | string
    delivery?: BoolFilter<"Restaurant"> | boolean
    free_delivery?: BoolFilter<"Restaurant"> | boolean
    active?: BoolFilter<"Restaurant"> | boolean
    off_day?: StringFilter<"Restaurant"> | string
    delivery_time?: StringFilter<"Restaurant"> | string
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    schedules?: SchedulesListRelationFilter
    foods?: FoodListRelationFilter
    cuisine?: CuisineListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    image?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    address?: SortOrder
    footer_text?: SortOrder
    minimum_order?: SortOrder
    comission?: SortOrder
    schedule_order?: SortOrder
    cover_photo?: SortOrder
    delivery?: SortOrder
    free_delivery?: SortOrder
    active?: SortOrder
    off_day?: SortOrder
    delivery_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedules?: schedulesOrderByRelationAggregateInput
    foods?: FoodOrderByRelationAggregateInput
    cuisine?: CuisineOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    restaurantId?: string
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringFilter<"Restaurant"> | string
    phone?: StringFilter<"Restaurant"> | string
    email?: StringFilter<"Restaurant"> | string
    logo?: StringFilter<"Restaurant"> | string
    image?: StringFilter<"Restaurant"> | string
    longitude?: StringFilter<"Restaurant"> | string
    latitude?: StringFilter<"Restaurant"> | string
    address?: StringFilter<"Restaurant"> | string
    footer_text?: StringFilter<"Restaurant"> | string
    minimum_order?: FloatFilter<"Restaurant"> | number
    comission?: FloatFilter<"Restaurant"> | number
    schedule_order?: BoolFilter<"Restaurant"> | boolean
    cover_photo?: StringFilter<"Restaurant"> | string
    delivery?: BoolFilter<"Restaurant"> | boolean
    free_delivery?: BoolFilter<"Restaurant"> | boolean
    active?: BoolFilter<"Restaurant"> | boolean
    off_day?: StringFilter<"Restaurant"> | string
    delivery_time?: StringFilter<"Restaurant"> | string
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    schedules?: SchedulesListRelationFilter
    foods?: FoodListRelationFilter
    cuisine?: CuisineListRelationFilter
  }, "restaurantId">

  export type RestaurantOrderByWithAggregationInput = {
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    image?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    address?: SortOrder
    footer_text?: SortOrder
    minimum_order?: SortOrder
    comission?: SortOrder
    schedule_order?: SortOrder
    cover_photo?: SortOrder
    delivery?: SortOrder
    free_delivery?: SortOrder
    active?: SortOrder
    off_day?: SortOrder
    delivery_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _avg?: RestaurantAvgOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
    _sum?: RestaurantSumOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    restaurantId?: StringWithAggregatesFilter<"Restaurant"> | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    phone?: StringWithAggregatesFilter<"Restaurant"> | string
    email?: StringWithAggregatesFilter<"Restaurant"> | string
    logo?: StringWithAggregatesFilter<"Restaurant"> | string
    image?: StringWithAggregatesFilter<"Restaurant"> | string
    longitude?: StringWithAggregatesFilter<"Restaurant"> | string
    latitude?: StringWithAggregatesFilter<"Restaurant"> | string
    address?: StringWithAggregatesFilter<"Restaurant"> | string
    footer_text?: StringWithAggregatesFilter<"Restaurant"> | string
    minimum_order?: FloatWithAggregatesFilter<"Restaurant"> | number
    comission?: FloatWithAggregatesFilter<"Restaurant"> | number
    schedule_order?: BoolWithAggregatesFilter<"Restaurant"> | boolean
    cover_photo?: StringWithAggregatesFilter<"Restaurant"> | string
    delivery?: BoolWithAggregatesFilter<"Restaurant"> | boolean
    free_delivery?: BoolWithAggregatesFilter<"Restaurant"> | boolean
    active?: BoolWithAggregatesFilter<"Restaurant"> | boolean
    off_day?: StringWithAggregatesFilter<"Restaurant"> | string
    delivery_time?: StringWithAggregatesFilter<"Restaurant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    phone: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    phone: string
    password: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    phone: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantCreateNestedManyWithoutFoodInput
    cuisine?: CuisineCreateNestedManyWithoutFoodInput
    restaurant?: RestaurantCreateNestedOneWithoutFoodsInput
    category?: CategoryCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    restaurantId?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantUncheckedCreateNestedManyWithoutFoodInput
    cuisine?: CuisineUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUpdateManyWithoutFoodNestedInput
    cuisine?: CuisineUpdateManyWithoutFoodNestedInput
    restaurant?: RestaurantUpdateOneWithoutFoodsNestedInput
    category?: CategoryUpdateOneWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUncheckedUpdateManyWithoutFoodNestedInput
    cuisine?: CuisineUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    restaurantId?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantCreateInput = {
    variantId?: string
    name: string
    type: string
    min: string
    max: string
    required: boolean
    food?: FoodCreateNestedOneWithoutVariantsInput
    values?: ValueCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateInput = {
    variantId?: string
    name: string
    type: string
    min: string
    max: string
    required: boolean
    foodId?: string | null
    values?: ValueUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    min?: StringFieldUpdateOperationsInput | string
    max?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    food?: FoodUpdateOneWithoutVariantsNestedInput
    values?: ValueUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    min?: StringFieldUpdateOperationsInput | string
    max?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    values?: ValueUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantCreateManyInput = {
    variantId?: string
    name: string
    type: string
    min: string
    max: string
    required: boolean
    foodId?: string | null
  }

  export type VariantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    min?: StringFieldUpdateOperationsInput | string
    max?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VariantUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    min?: StringFieldUpdateOperationsInput | string
    max?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ValueCreateInput = {
    valueId?: string
    label: string
    optionPrice: number
    stock: number
    stock_unlimited: boolean
    variant?: VariantCreateNestedOneWithoutValuesInput
  }

  export type ValueUncheckedCreateInput = {
    valueId?: string
    label: string
    optionPrice: number
    stock: number
    stock_unlimited: boolean
    variantId?: string | null
  }

  export type ValueUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    optionPrice?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stock_unlimited?: BoolFieldUpdateOperationsInput | boolean
    variant?: VariantUpdateOneWithoutValuesNestedInput
  }

  export type ValueUncheckedUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    optionPrice?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stock_unlimited?: BoolFieldUpdateOperationsInput | boolean
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ValueCreateManyInput = {
    valueId?: string
    label: string
    optionPrice: number
    stock: number
    stock_unlimited: boolean
    variantId?: string | null
  }

  export type ValueUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    optionPrice?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stock_unlimited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ValueUncheckedUpdateManyInput = {
    label?: StringFieldUpdateOperationsInput | string
    optionPrice?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stock_unlimited?: BoolFieldUpdateOperationsInput | boolean
    variantId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    image: string
    products_count?: number
    type_count?: number
    status?: boolean
    order_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: TypeCreateNestedManyWithoutCategoryInput
    foods?: FoodCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    image: string
    products_count?: number
    type_count?: number
    status?: boolean
    order_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: TypeUncheckedCreateNestedManyWithoutCategoryInput
    foods?: FoodUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products_count?: IntFieldUpdateOperationsInput | number
    type_count?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TypeUpdateManyWithoutCategoryNestedInput
    foods?: FoodUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products_count?: IntFieldUpdateOperationsInput | number
    type_count?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TypeUncheckedUpdateManyWithoutCategoryNestedInput
    foods?: FoodUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    image: string
    products_count?: number
    type_count?: number
    status?: boolean
    order_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products_count?: IntFieldUpdateOperationsInput | number
    type_count?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products_count?: IntFieldUpdateOperationsInput | number
    type_count?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeCreateInput = {
    id?: string
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id?: string
    name: string
    status?: boolean
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeCreateManyInput = {
    id?: string
    name: string
    status?: boolean
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuisineCreateInput = {
    cuisineId?: string
    name: string
    image: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant?: RestaurantCreateNestedOneWithoutCuisineInput
    food?: FoodCreateNestedOneWithoutCuisineInput
  }

  export type CuisineUncheckedCreateInput = {
    cuisineId?: string
    name: string
    image: string
    status?: boolean
    restaurantId?: string | null
    foodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuisineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneWithoutCuisineNestedInput
    food?: FoodUpdateOneWithoutCuisineNestedInput
  }

  export type CuisineUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuisineCreateManyInput = {
    cuisineId?: string
    name: string
    image: string
    status?: boolean
    restaurantId?: string | null
    foodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuisineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuisineUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesCreateInput = {
    scheduleId?: string
    day: number
    opening_time?: Date | string | null
    closeing_time?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant?: RestaurantCreateNestedOneWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateInput = {
    scheduleId?: string
    day: number
    opening_time?: Date | string | null
    closeing_time?: Date | string | null
    restaurantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type schedulesUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesCreateManyInput = {
    scheduleId?: string
    day: number
    opening_time?: Date | string | null
    closeing_time?: Date | string | null
    restaurantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type schedulesUpdateManyMutationInput = {
    day?: IntFieldUpdateOperationsInput | number
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesUncheckedUpdateManyInput = {
    day?: IntFieldUpdateOperationsInput | number
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateInput = {
    restaurantId?: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: schedulesCreateNestedManyWithoutRestaurantInput
    foods?: FoodCreateNestedManyWithoutRestaurantInput
    cuisine?: CuisineCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    restaurantId?: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: schedulesUncheckedCreateNestedManyWithoutRestaurantInput
    foods?: FoodUncheckedCreateNestedManyWithoutRestaurantInput
    cuisine?: CuisineUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: schedulesUpdateManyWithoutRestaurantNestedInput
    foods?: FoodUpdateManyWithoutRestaurantNestedInput
    cuisine?: CuisineUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: schedulesUncheckedUpdateManyWithoutRestaurantNestedInput
    foods?: FoodUncheckedUpdateManyWithoutRestaurantNestedInput
    cuisine?: CuisineUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    restaurantId?: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
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
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type VariantListRelationFilter = {
    every?: VariantWhereInput
    some?: VariantWhereInput
    none?: VariantWhereInput
  }

  export type CuisineListRelationFilter = {
    every?: CuisineWhereInput
    some?: CuisineWhereInput
    none?: CuisineWhereInput
  }

  export type RestaurantNullableScalarRelationFilter = {
    is?: RestaurantWhereInput | null
    isNot?: RestaurantWhereInput | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type VariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CuisineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    min_delivery_time?: SortOrder
    max_delivery_time?: SortOrder
    free_delivery?: SortOrder
    veg?: SortOrder
    discount?: SortOrder
    sell_count?: SortOrder
    image?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    price?: SortOrder
    min_delivery_time?: SortOrder
    max_delivery_time?: SortOrder
    discount?: SortOrder
    sell_count?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    min_delivery_time?: SortOrder
    max_delivery_time?: SortOrder
    free_delivery?: SortOrder
    veg?: SortOrder
    discount?: SortOrder
    sell_count?: SortOrder
    image?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    min_delivery_time?: SortOrder
    max_delivery_time?: SortOrder
    free_delivery?: SortOrder
    veg?: SortOrder
    discount?: SortOrder
    sell_count?: SortOrder
    image?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    price?: SortOrder
    min_delivery_time?: SortOrder
    max_delivery_time?: SortOrder
    discount?: SortOrder
    sell_count?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FoodNullableScalarRelationFilter = {
    is?: FoodWhereInput | null
    isNot?: FoodWhereInput | null
  }

  export type ValueListRelationFilter = {
    every?: ValueWhereInput
    some?: ValueWhereInput
    none?: ValueWhereInput
  }

  export type ValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantCountOrderByAggregateInput = {
    variantId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    min?: SortOrder
    max?: SortOrder
    required?: SortOrder
    foodId?: SortOrder
  }

  export type VariantMaxOrderByAggregateInput = {
    variantId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    min?: SortOrder
    max?: SortOrder
    required?: SortOrder
    foodId?: SortOrder
  }

  export type VariantMinOrderByAggregateInput = {
    variantId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    min?: SortOrder
    max?: SortOrder
    required?: SortOrder
    foodId?: SortOrder
  }

  export type VariantNullableScalarRelationFilter = {
    is?: VariantWhereInput | null
    isNot?: VariantWhereInput | null
  }

  export type ValueCountOrderByAggregateInput = {
    valueId?: SortOrder
    label?: SortOrder
    optionPrice?: SortOrder
    stock?: SortOrder
    stock_unlimited?: SortOrder
    variantId?: SortOrder
  }

  export type ValueAvgOrderByAggregateInput = {
    optionPrice?: SortOrder
    stock?: SortOrder
  }

  export type ValueMaxOrderByAggregateInput = {
    valueId?: SortOrder
    label?: SortOrder
    optionPrice?: SortOrder
    stock?: SortOrder
    stock_unlimited?: SortOrder
    variantId?: SortOrder
  }

  export type ValueMinOrderByAggregateInput = {
    valueId?: SortOrder
    label?: SortOrder
    optionPrice?: SortOrder
    stock?: SortOrder
    stock_unlimited?: SortOrder
    variantId?: SortOrder
  }

  export type ValueSumOrderByAggregateInput = {
    optionPrice?: SortOrder
    stock?: SortOrder
  }

  export type TypeListRelationFilter = {
    every?: TypeWhereInput
    some?: TypeWhereInput
    none?: TypeWhereInput
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type TypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    products_count?: SortOrder
    type_count?: SortOrder
    status?: SortOrder
    order_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    products_count?: SortOrder
    type_count?: SortOrder
    order_count?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    products_count?: SortOrder
    type_count?: SortOrder
    status?: SortOrder
    order_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    products_count?: SortOrder
    type_count?: SortOrder
    status?: SortOrder
    order_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    products_count?: SortOrder
    type_count?: SortOrder
    order_count?: SortOrder
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CuisineCountOrderByAggregateInput = {
    cuisineId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    restaurantId?: SortOrder
    foodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CuisineMaxOrderByAggregateInput = {
    cuisineId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    restaurantId?: SortOrder
    foodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CuisineMinOrderByAggregateInput = {
    cuisineId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    restaurantId?: SortOrder
    foodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type schedulesCountOrderByAggregateInput = {
    scheduleId?: SortOrder
    day?: SortOrder
    opening_time?: SortOrder
    closeing_time?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type schedulesAvgOrderByAggregateInput = {
    day?: SortOrder
  }

  export type schedulesMaxOrderByAggregateInput = {
    scheduleId?: SortOrder
    day?: SortOrder
    opening_time?: SortOrder
    closeing_time?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type schedulesMinOrderByAggregateInput = {
    scheduleId?: SortOrder
    day?: SortOrder
    opening_time?: SortOrder
    closeing_time?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type schedulesSumOrderByAggregateInput = {
    day?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SchedulesListRelationFilter = {
    every?: schedulesWhereInput
    some?: schedulesWhereInput
    none?: schedulesWhereInput
  }

  export type schedulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    image?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    address?: SortOrder
    footer_text?: SortOrder
    minimum_order?: SortOrder
    comission?: SortOrder
    schedule_order?: SortOrder
    cover_photo?: SortOrder
    delivery?: SortOrder
    free_delivery?: SortOrder
    active?: SortOrder
    off_day?: SortOrder
    delivery_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantAvgOrderByAggregateInput = {
    minimum_order?: SortOrder
    comission?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    image?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    address?: SortOrder
    footer_text?: SortOrder
    minimum_order?: SortOrder
    comission?: SortOrder
    schedule_order?: SortOrder
    cover_photo?: SortOrder
    delivery?: SortOrder
    free_delivery?: SortOrder
    active?: SortOrder
    off_day?: SortOrder
    delivery_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    restaurantId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    image?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    address?: SortOrder
    footer_text?: SortOrder
    minimum_order?: SortOrder
    comission?: SortOrder
    schedule_order?: SortOrder
    cover_photo?: SortOrder
    delivery?: SortOrder
    free_delivery?: SortOrder
    active?: SortOrder
    off_day?: SortOrder
    delivery_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantSumOrderByAggregateInput = {
    minimum_order?: SortOrder
    comission?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type VariantCreateNestedManyWithoutFoodInput = {
    create?: XOR<VariantCreateWithoutFoodInput, VariantUncheckedCreateWithoutFoodInput> | VariantCreateWithoutFoodInput[] | VariantUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutFoodInput | VariantCreateOrConnectWithoutFoodInput[]
    createMany?: VariantCreateManyFoodInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type CuisineCreateNestedManyWithoutFoodInput = {
    create?: XOR<CuisineCreateWithoutFoodInput, CuisineUncheckedCreateWithoutFoodInput> | CuisineCreateWithoutFoodInput[] | CuisineUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: CuisineCreateOrConnectWithoutFoodInput | CuisineCreateOrConnectWithoutFoodInput[]
    createMany?: CuisineCreateManyFoodInputEnvelope
    connect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
  }

  export type RestaurantCreateNestedOneWithoutFoodsInput = {
    create?: XOR<RestaurantCreateWithoutFoodsInput, RestaurantUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFoodsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutFoodsInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    connect?: CategoryWhereUniqueInput
  }

  export type VariantUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<VariantCreateWithoutFoodInput, VariantUncheckedCreateWithoutFoodInput> | VariantCreateWithoutFoodInput[] | VariantUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutFoodInput | VariantCreateOrConnectWithoutFoodInput[]
    createMany?: VariantCreateManyFoodInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type CuisineUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<CuisineCreateWithoutFoodInput, CuisineUncheckedCreateWithoutFoodInput> | CuisineCreateWithoutFoodInput[] | CuisineUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: CuisineCreateOrConnectWithoutFoodInput | CuisineCreateOrConnectWithoutFoodInput[]
    createMany?: CuisineCreateManyFoodInputEnvelope
    connect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VariantUpdateManyWithoutFoodNestedInput = {
    create?: XOR<VariantCreateWithoutFoodInput, VariantUncheckedCreateWithoutFoodInput> | VariantCreateWithoutFoodInput[] | VariantUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutFoodInput | VariantCreateOrConnectWithoutFoodInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutFoodInput | VariantUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: VariantCreateManyFoodInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutFoodInput | VariantUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutFoodInput | VariantUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type CuisineUpdateManyWithoutFoodNestedInput = {
    create?: XOR<CuisineCreateWithoutFoodInput, CuisineUncheckedCreateWithoutFoodInput> | CuisineCreateWithoutFoodInput[] | CuisineUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: CuisineCreateOrConnectWithoutFoodInput | CuisineCreateOrConnectWithoutFoodInput[]
    upsert?: CuisineUpsertWithWhereUniqueWithoutFoodInput | CuisineUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: CuisineCreateManyFoodInputEnvelope
    set?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    disconnect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    delete?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    connect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    update?: CuisineUpdateWithWhereUniqueWithoutFoodInput | CuisineUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: CuisineUpdateManyWithWhereWithoutFoodInput | CuisineUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: CuisineScalarWhereInput | CuisineScalarWhereInput[]
  }

  export type RestaurantUpdateOneWithoutFoodsNestedInput = {
    create?: XOR<RestaurantCreateWithoutFoodsInput, RestaurantUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFoodsInput
    upsert?: RestaurantUpsertWithoutFoodsInput
    disconnect?: boolean
    delete?: RestaurantWhereInput | boolean
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutFoodsInput, RestaurantUpdateWithoutFoodsInput>, RestaurantUncheckedUpdateWithoutFoodsInput>
  }

  export type CategoryUpdateOneWithoutFoodsNestedInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    upsert?: CategoryUpsertWithoutFoodsInput
    disconnect?: boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFoodsInput, CategoryUpdateWithoutFoodsInput>, CategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type VariantUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<VariantCreateWithoutFoodInput, VariantUncheckedCreateWithoutFoodInput> | VariantCreateWithoutFoodInput[] | VariantUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutFoodInput | VariantCreateOrConnectWithoutFoodInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutFoodInput | VariantUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: VariantCreateManyFoodInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutFoodInput | VariantUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutFoodInput | VariantUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type CuisineUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<CuisineCreateWithoutFoodInput, CuisineUncheckedCreateWithoutFoodInput> | CuisineCreateWithoutFoodInput[] | CuisineUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: CuisineCreateOrConnectWithoutFoodInput | CuisineCreateOrConnectWithoutFoodInput[]
    upsert?: CuisineUpsertWithWhereUniqueWithoutFoodInput | CuisineUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: CuisineCreateManyFoodInputEnvelope
    set?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    disconnect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    delete?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    connect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    update?: CuisineUpdateWithWhereUniqueWithoutFoodInput | CuisineUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: CuisineUpdateManyWithWhereWithoutFoodInput | CuisineUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: CuisineScalarWhereInput | CuisineScalarWhereInput[]
  }

  export type FoodCreateNestedOneWithoutVariantsInput = {
    create?: XOR<FoodCreateWithoutVariantsInput, FoodUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutVariantsInput
    connect?: FoodWhereUniqueInput
  }

  export type ValueCreateNestedManyWithoutVariantInput = {
    create?: XOR<ValueCreateWithoutVariantInput, ValueUncheckedCreateWithoutVariantInput> | ValueCreateWithoutVariantInput[] | ValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutVariantInput | ValueCreateOrConnectWithoutVariantInput[]
    createMany?: ValueCreateManyVariantInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type ValueUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<ValueCreateWithoutVariantInput, ValueUncheckedCreateWithoutVariantInput> | ValueCreateWithoutVariantInput[] | ValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutVariantInput | ValueCreateOrConnectWithoutVariantInput[]
    createMany?: ValueCreateManyVariantInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type FoodUpdateOneWithoutVariantsNestedInput = {
    create?: XOR<FoodCreateWithoutVariantsInput, FoodUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutVariantsInput
    upsert?: FoodUpsertWithoutVariantsInput
    disconnect?: boolean
    delete?: FoodWhereInput | boolean
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutVariantsInput, FoodUpdateWithoutVariantsInput>, FoodUncheckedUpdateWithoutVariantsInput>
  }

  export type ValueUpdateManyWithoutVariantNestedInput = {
    create?: XOR<ValueCreateWithoutVariantInput, ValueUncheckedCreateWithoutVariantInput> | ValueCreateWithoutVariantInput[] | ValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutVariantInput | ValueCreateOrConnectWithoutVariantInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutVariantInput | ValueUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: ValueCreateManyVariantInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutVariantInput | ValueUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutVariantInput | ValueUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type ValueUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<ValueCreateWithoutVariantInput, ValueUncheckedCreateWithoutVariantInput> | ValueCreateWithoutVariantInput[] | ValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutVariantInput | ValueCreateOrConnectWithoutVariantInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutVariantInput | ValueUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: ValueCreateManyVariantInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutVariantInput | ValueUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutVariantInput | ValueUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type VariantCreateNestedOneWithoutValuesInput = {
    create?: XOR<VariantCreateWithoutValuesInput, VariantUncheckedCreateWithoutValuesInput>
    connectOrCreate?: VariantCreateOrConnectWithoutValuesInput
    connect?: VariantWhereUniqueInput
  }

  export type VariantUpdateOneWithoutValuesNestedInput = {
    create?: XOR<VariantCreateWithoutValuesInput, VariantUncheckedCreateWithoutValuesInput>
    connectOrCreate?: VariantCreateOrConnectWithoutValuesInput
    upsert?: VariantUpsertWithoutValuesInput
    disconnect?: boolean
    delete?: VariantWhereInput | boolean
    connect?: VariantWhereUniqueInput
    update?: XOR<XOR<VariantUpdateToOneWithWhereWithoutValuesInput, VariantUpdateWithoutValuesInput>, VariantUncheckedUpdateWithoutValuesInput>
  }

  export type TypeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TypeCreateWithoutCategoryInput, TypeUncheckedCreateWithoutCategoryInput> | TypeCreateWithoutCategoryInput[] | TypeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutCategoryInput | TypeCreateOrConnectWithoutCategoryInput[]
    createMany?: TypeCreateManyCategoryInputEnvelope
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
  }

  export type FoodCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type TypeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TypeCreateWithoutCategoryInput, TypeUncheckedCreateWithoutCategoryInput> | TypeCreateWithoutCategoryInput[] | TypeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutCategoryInput | TypeCreateOrConnectWithoutCategoryInput[]
    createMany?: TypeCreateManyCategoryInputEnvelope
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type TypeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TypeCreateWithoutCategoryInput, TypeUncheckedCreateWithoutCategoryInput> | TypeCreateWithoutCategoryInput[] | TypeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutCategoryInput | TypeCreateOrConnectWithoutCategoryInput[]
    upsert?: TypeUpsertWithWhereUniqueWithoutCategoryInput | TypeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TypeCreateManyCategoryInputEnvelope
    set?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    disconnect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    delete?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    update?: TypeUpdateWithWhereUniqueWithoutCategoryInput | TypeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TypeUpdateManyWithWhereWithoutCategoryInput | TypeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TypeScalarWhereInput | TypeScalarWhereInput[]
  }

  export type FoodUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type TypeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TypeCreateWithoutCategoryInput, TypeUncheckedCreateWithoutCategoryInput> | TypeCreateWithoutCategoryInput[] | TypeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutCategoryInput | TypeCreateOrConnectWithoutCategoryInput[]
    upsert?: TypeUpsertWithWhereUniqueWithoutCategoryInput | TypeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TypeCreateManyCategoryInputEnvelope
    set?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    disconnect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    delete?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    update?: TypeUpdateWithWhereUniqueWithoutCategoryInput | TypeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TypeUpdateManyWithWhereWithoutCategoryInput | TypeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TypeScalarWhereInput | TypeScalarWhereInput[]
  }

  export type FoodUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutTypeInput = {
    create?: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryUpdateOneWithoutTypeNestedInput = {
    create?: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeInput
    upsert?: CategoryUpsertWithoutTypeInput
    disconnect?: boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTypeInput, CategoryUpdateWithoutTypeInput>, CategoryUncheckedUpdateWithoutTypeInput>
  }

  export type RestaurantCreateNestedOneWithoutCuisineInput = {
    create?: XOR<RestaurantCreateWithoutCuisineInput, RestaurantUncheckedCreateWithoutCuisineInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutCuisineInput
    connect?: RestaurantWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutCuisineInput = {
    create?: XOR<FoodCreateWithoutCuisineInput, FoodUncheckedCreateWithoutCuisineInput>
    connectOrCreate?: FoodCreateOrConnectWithoutCuisineInput
    connect?: FoodWhereUniqueInput
  }

  export type RestaurantUpdateOneWithoutCuisineNestedInput = {
    create?: XOR<RestaurantCreateWithoutCuisineInput, RestaurantUncheckedCreateWithoutCuisineInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutCuisineInput
    upsert?: RestaurantUpsertWithoutCuisineInput
    disconnect?: boolean
    delete?: RestaurantWhereInput | boolean
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutCuisineInput, RestaurantUpdateWithoutCuisineInput>, RestaurantUncheckedUpdateWithoutCuisineInput>
  }

  export type FoodUpdateOneWithoutCuisineNestedInput = {
    create?: XOR<FoodCreateWithoutCuisineInput, FoodUncheckedCreateWithoutCuisineInput>
    connectOrCreate?: FoodCreateOrConnectWithoutCuisineInput
    upsert?: FoodUpsertWithoutCuisineInput
    disconnect?: boolean
    delete?: FoodWhereInput | boolean
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutCuisineInput, FoodUpdateWithoutCuisineInput>, FoodUncheckedUpdateWithoutCuisineInput>
  }

  export type RestaurantCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<RestaurantCreateWithoutSchedulesInput, RestaurantUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutSchedulesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type RestaurantUpdateOneWithoutSchedulesNestedInput = {
    create?: XOR<RestaurantCreateWithoutSchedulesInput, RestaurantUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutSchedulesInput
    upsert?: RestaurantUpsertWithoutSchedulesInput
    disconnect?: boolean
    delete?: RestaurantWhereInput | boolean
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutSchedulesInput, RestaurantUpdateWithoutSchedulesInput>, RestaurantUncheckedUpdateWithoutSchedulesInput>
  }

  export type schedulesCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<schedulesCreateWithoutRestaurantInput, schedulesUncheckedCreateWithoutRestaurantInput> | schedulesCreateWithoutRestaurantInput[] | schedulesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutRestaurantInput | schedulesCreateOrConnectWithoutRestaurantInput[]
    createMany?: schedulesCreateManyRestaurantInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type FoodCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<FoodCreateWithoutRestaurantInput, FoodUncheckedCreateWithoutRestaurantInput> | FoodCreateWithoutRestaurantInput[] | FoodUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutRestaurantInput | FoodCreateOrConnectWithoutRestaurantInput[]
    createMany?: FoodCreateManyRestaurantInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type CuisineCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CuisineCreateWithoutRestaurantInput, CuisineUncheckedCreateWithoutRestaurantInput> | CuisineCreateWithoutRestaurantInput[] | CuisineUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CuisineCreateOrConnectWithoutRestaurantInput | CuisineCreateOrConnectWithoutRestaurantInput[]
    createMany?: CuisineCreateManyRestaurantInputEnvelope
    connect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
  }

  export type schedulesUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<schedulesCreateWithoutRestaurantInput, schedulesUncheckedCreateWithoutRestaurantInput> | schedulesCreateWithoutRestaurantInput[] | schedulesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutRestaurantInput | schedulesCreateOrConnectWithoutRestaurantInput[]
    createMany?: schedulesCreateManyRestaurantInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<FoodCreateWithoutRestaurantInput, FoodUncheckedCreateWithoutRestaurantInput> | FoodCreateWithoutRestaurantInput[] | FoodUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutRestaurantInput | FoodCreateOrConnectWithoutRestaurantInput[]
    createMany?: FoodCreateManyRestaurantInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type CuisineUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CuisineCreateWithoutRestaurantInput, CuisineUncheckedCreateWithoutRestaurantInput> | CuisineCreateWithoutRestaurantInput[] | CuisineUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CuisineCreateOrConnectWithoutRestaurantInput | CuisineCreateOrConnectWithoutRestaurantInput[]
    createMany?: CuisineCreateManyRestaurantInputEnvelope
    connect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
  }

  export type schedulesUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<schedulesCreateWithoutRestaurantInput, schedulesUncheckedCreateWithoutRestaurantInput> | schedulesCreateWithoutRestaurantInput[] | schedulesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutRestaurantInput | schedulesCreateOrConnectWithoutRestaurantInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutRestaurantInput | schedulesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: schedulesCreateManyRestaurantInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutRestaurantInput | schedulesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutRestaurantInput | schedulesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type FoodUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<FoodCreateWithoutRestaurantInput, FoodUncheckedCreateWithoutRestaurantInput> | FoodCreateWithoutRestaurantInput[] | FoodUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutRestaurantInput | FoodCreateOrConnectWithoutRestaurantInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutRestaurantInput | FoodUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: FoodCreateManyRestaurantInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutRestaurantInput | FoodUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutRestaurantInput | FoodUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type CuisineUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CuisineCreateWithoutRestaurantInput, CuisineUncheckedCreateWithoutRestaurantInput> | CuisineCreateWithoutRestaurantInput[] | CuisineUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CuisineCreateOrConnectWithoutRestaurantInput | CuisineCreateOrConnectWithoutRestaurantInput[]
    upsert?: CuisineUpsertWithWhereUniqueWithoutRestaurantInput | CuisineUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CuisineCreateManyRestaurantInputEnvelope
    set?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    disconnect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    delete?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    connect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    update?: CuisineUpdateWithWhereUniqueWithoutRestaurantInput | CuisineUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CuisineUpdateManyWithWhereWithoutRestaurantInput | CuisineUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CuisineScalarWhereInput | CuisineScalarWhereInput[]
  }

  export type schedulesUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<schedulesCreateWithoutRestaurantInput, schedulesUncheckedCreateWithoutRestaurantInput> | schedulesCreateWithoutRestaurantInput[] | schedulesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutRestaurantInput | schedulesCreateOrConnectWithoutRestaurantInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutRestaurantInput | schedulesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: schedulesCreateManyRestaurantInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutRestaurantInput | schedulesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutRestaurantInput | schedulesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type FoodUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<FoodCreateWithoutRestaurantInput, FoodUncheckedCreateWithoutRestaurantInput> | FoodCreateWithoutRestaurantInput[] | FoodUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutRestaurantInput | FoodCreateOrConnectWithoutRestaurantInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutRestaurantInput | FoodUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: FoodCreateManyRestaurantInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutRestaurantInput | FoodUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutRestaurantInput | FoodUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type CuisineUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CuisineCreateWithoutRestaurantInput, CuisineUncheckedCreateWithoutRestaurantInput> | CuisineCreateWithoutRestaurantInput[] | CuisineUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CuisineCreateOrConnectWithoutRestaurantInput | CuisineCreateOrConnectWithoutRestaurantInput[]
    upsert?: CuisineUpsertWithWhereUniqueWithoutRestaurantInput | CuisineUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CuisineCreateManyRestaurantInputEnvelope
    set?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    disconnect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    delete?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    connect?: CuisineWhereUniqueInput | CuisineWhereUniqueInput[]
    update?: CuisineUpdateWithWhereUniqueWithoutRestaurantInput | CuisineUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CuisineUpdateManyWithWhereWithoutRestaurantInput | CuisineUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CuisineScalarWhereInput | CuisineScalarWhereInput[]
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type VariantCreateWithoutFoodInput = {
    variantId?: string
    name: string
    type: string
    min: string
    max: string
    required: boolean
    values?: ValueCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutFoodInput = {
    variantId?: string
    name: string
    type: string
    min: string
    max: string
    required: boolean
    values?: ValueUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutFoodInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutFoodInput, VariantUncheckedCreateWithoutFoodInput>
  }

  export type VariantCreateManyFoodInputEnvelope = {
    data: VariantCreateManyFoodInput | VariantCreateManyFoodInput[]
  }

  export type CuisineCreateWithoutFoodInput = {
    cuisineId?: string
    name: string
    image: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant?: RestaurantCreateNestedOneWithoutCuisineInput
  }

  export type CuisineUncheckedCreateWithoutFoodInput = {
    cuisineId?: string
    name: string
    image: string
    status?: boolean
    restaurantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuisineCreateOrConnectWithoutFoodInput = {
    where: CuisineWhereUniqueInput
    create: XOR<CuisineCreateWithoutFoodInput, CuisineUncheckedCreateWithoutFoodInput>
  }

  export type CuisineCreateManyFoodInputEnvelope = {
    data: CuisineCreateManyFoodInput | CuisineCreateManyFoodInput[]
  }

  export type RestaurantCreateWithoutFoodsInput = {
    restaurantId?: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: schedulesCreateNestedManyWithoutRestaurantInput
    cuisine?: CuisineCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutFoodsInput = {
    restaurantId?: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: schedulesUncheckedCreateNestedManyWithoutRestaurantInput
    cuisine?: CuisineUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutFoodsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutFoodsInput, RestaurantUncheckedCreateWithoutFoodsInput>
  }

  export type CategoryCreateWithoutFoodsInput = {
    id?: string
    name: string
    image: string
    products_count?: number
    type_count?: number
    status?: boolean
    order_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: TypeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutFoodsInput = {
    id?: string
    name: string
    image: string
    products_count?: number
    type_count?: number
    status?: boolean
    order_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: TypeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutFoodsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
  }

  export type VariantUpsertWithWhereUniqueWithoutFoodInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutFoodInput, VariantUncheckedUpdateWithoutFoodInput>
    create: XOR<VariantCreateWithoutFoodInput, VariantUncheckedCreateWithoutFoodInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutFoodInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutFoodInput, VariantUncheckedUpdateWithoutFoodInput>
  }

  export type VariantUpdateManyWithWhereWithoutFoodInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutFoodInput>
  }

  export type VariantScalarWhereInput = {
    AND?: VariantScalarWhereInput | VariantScalarWhereInput[]
    OR?: VariantScalarWhereInput[]
    NOT?: VariantScalarWhereInput | VariantScalarWhereInput[]
    variantId?: StringFilter<"Variant"> | string
    name?: StringFilter<"Variant"> | string
    type?: StringFilter<"Variant"> | string
    min?: StringFilter<"Variant"> | string
    max?: StringFilter<"Variant"> | string
    required?: BoolFilter<"Variant"> | boolean
    foodId?: StringNullableFilter<"Variant"> | string | null
  }

  export type CuisineUpsertWithWhereUniqueWithoutFoodInput = {
    where: CuisineWhereUniqueInput
    update: XOR<CuisineUpdateWithoutFoodInput, CuisineUncheckedUpdateWithoutFoodInput>
    create: XOR<CuisineCreateWithoutFoodInput, CuisineUncheckedCreateWithoutFoodInput>
  }

  export type CuisineUpdateWithWhereUniqueWithoutFoodInput = {
    where: CuisineWhereUniqueInput
    data: XOR<CuisineUpdateWithoutFoodInput, CuisineUncheckedUpdateWithoutFoodInput>
  }

  export type CuisineUpdateManyWithWhereWithoutFoodInput = {
    where: CuisineScalarWhereInput
    data: XOR<CuisineUpdateManyMutationInput, CuisineUncheckedUpdateManyWithoutFoodInput>
  }

  export type CuisineScalarWhereInput = {
    AND?: CuisineScalarWhereInput | CuisineScalarWhereInput[]
    OR?: CuisineScalarWhereInput[]
    NOT?: CuisineScalarWhereInput | CuisineScalarWhereInput[]
    cuisineId?: StringFilter<"Cuisine"> | string
    name?: StringFilter<"Cuisine"> | string
    image?: StringFilter<"Cuisine"> | string
    status?: BoolFilter<"Cuisine"> | boolean
    restaurantId?: StringNullableFilter<"Cuisine"> | string | null
    foodId?: StringNullableFilter<"Cuisine"> | string | null
    createdAt?: DateTimeFilter<"Cuisine"> | Date | string
    updatedAt?: DateTimeFilter<"Cuisine"> | Date | string
  }

  export type RestaurantUpsertWithoutFoodsInput = {
    update: XOR<RestaurantUpdateWithoutFoodsInput, RestaurantUncheckedUpdateWithoutFoodsInput>
    create: XOR<RestaurantCreateWithoutFoodsInput, RestaurantUncheckedCreateWithoutFoodsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutFoodsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutFoodsInput, RestaurantUncheckedUpdateWithoutFoodsInput>
  }

  export type RestaurantUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: schedulesUpdateManyWithoutRestaurantNestedInput
    cuisine?: CuisineUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: schedulesUncheckedUpdateManyWithoutRestaurantNestedInput
    cuisine?: CuisineUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type CategoryUpsertWithoutFoodsInput = {
    update: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFoodsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type CategoryUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products_count?: IntFieldUpdateOperationsInput | number
    type_count?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TypeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products_count?: IntFieldUpdateOperationsInput | number
    type_count?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TypeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FoodCreateWithoutVariantsInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuisine?: CuisineCreateNestedManyWithoutFoodInput
    restaurant?: RestaurantCreateNestedOneWithoutFoodsInput
    category?: CategoryCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateWithoutVariantsInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    restaurantId?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cuisine?: CuisineUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutVariantsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutVariantsInput, FoodUncheckedCreateWithoutVariantsInput>
  }

  export type ValueCreateWithoutVariantInput = {
    valueId?: string
    label: string
    optionPrice: number
    stock: number
    stock_unlimited: boolean
  }

  export type ValueUncheckedCreateWithoutVariantInput = {
    valueId?: string
    label: string
    optionPrice: number
    stock: number
    stock_unlimited: boolean
  }

  export type ValueCreateOrConnectWithoutVariantInput = {
    where: ValueWhereUniqueInput
    create: XOR<ValueCreateWithoutVariantInput, ValueUncheckedCreateWithoutVariantInput>
  }

  export type ValueCreateManyVariantInputEnvelope = {
    data: ValueCreateManyVariantInput | ValueCreateManyVariantInput[]
  }

  export type FoodUpsertWithoutVariantsInput = {
    update: XOR<FoodUpdateWithoutVariantsInput, FoodUncheckedUpdateWithoutVariantsInput>
    create: XOR<FoodCreateWithoutVariantsInput, FoodUncheckedCreateWithoutVariantsInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutVariantsInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutVariantsInput, FoodUncheckedUpdateWithoutVariantsInput>
  }

  export type FoodUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuisine?: CuisineUpdateManyWithoutFoodNestedInput
    restaurant?: RestaurantUpdateOneWithoutFoodsNestedInput
    category?: CategoryUpdateOneWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuisine?: CuisineUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type ValueUpsertWithWhereUniqueWithoutVariantInput = {
    where: ValueWhereUniqueInput
    update: XOR<ValueUpdateWithoutVariantInput, ValueUncheckedUpdateWithoutVariantInput>
    create: XOR<ValueCreateWithoutVariantInput, ValueUncheckedCreateWithoutVariantInput>
  }

  export type ValueUpdateWithWhereUniqueWithoutVariantInput = {
    where: ValueWhereUniqueInput
    data: XOR<ValueUpdateWithoutVariantInput, ValueUncheckedUpdateWithoutVariantInput>
  }

  export type ValueUpdateManyWithWhereWithoutVariantInput = {
    where: ValueScalarWhereInput
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyWithoutVariantInput>
  }

  export type ValueScalarWhereInput = {
    AND?: ValueScalarWhereInput | ValueScalarWhereInput[]
    OR?: ValueScalarWhereInput[]
    NOT?: ValueScalarWhereInput | ValueScalarWhereInput[]
    valueId?: StringFilter<"Value"> | string
    label?: StringFilter<"Value"> | string
    optionPrice?: IntFilter<"Value"> | number
    stock?: IntFilter<"Value"> | number
    stock_unlimited?: BoolFilter<"Value"> | boolean
    variantId?: StringNullableFilter<"Value"> | string | null
  }

  export type VariantCreateWithoutValuesInput = {
    variantId?: string
    name: string
    type: string
    min: string
    max: string
    required: boolean
    food?: FoodCreateNestedOneWithoutVariantsInput
  }

  export type VariantUncheckedCreateWithoutValuesInput = {
    variantId?: string
    name: string
    type: string
    min: string
    max: string
    required: boolean
    foodId?: string | null
  }

  export type VariantCreateOrConnectWithoutValuesInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutValuesInput, VariantUncheckedCreateWithoutValuesInput>
  }

  export type VariantUpsertWithoutValuesInput = {
    update: XOR<VariantUpdateWithoutValuesInput, VariantUncheckedUpdateWithoutValuesInput>
    create: XOR<VariantCreateWithoutValuesInput, VariantUncheckedCreateWithoutValuesInput>
    where?: VariantWhereInput
  }

  export type VariantUpdateToOneWithWhereWithoutValuesInput = {
    where?: VariantWhereInput
    data: XOR<VariantUpdateWithoutValuesInput, VariantUncheckedUpdateWithoutValuesInput>
  }

  export type VariantUpdateWithoutValuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    min?: StringFieldUpdateOperationsInput | string
    max?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    food?: FoodUpdateOneWithoutVariantsNestedInput
  }

  export type VariantUncheckedUpdateWithoutValuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    min?: StringFieldUpdateOperationsInput | string
    max?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TypeCreateWithoutCategoryInput = {
    id?: string
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypeUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypeCreateOrConnectWithoutCategoryInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutCategoryInput, TypeUncheckedCreateWithoutCategoryInput>
  }

  export type TypeCreateManyCategoryInputEnvelope = {
    data: TypeCreateManyCategoryInput | TypeCreateManyCategoryInput[]
  }

  export type FoodCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantCreateNestedManyWithoutFoodInput
    cuisine?: CuisineCreateNestedManyWithoutFoodInput
    restaurant?: RestaurantCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    restaurantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantUncheckedCreateNestedManyWithoutFoodInput
    cuisine?: CuisineUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodCreateManyCategoryInputEnvelope = {
    data: FoodCreateManyCategoryInput | FoodCreateManyCategoryInput[]
  }

  export type TypeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TypeWhereUniqueInput
    update: XOR<TypeUpdateWithoutCategoryInput, TypeUncheckedUpdateWithoutCategoryInput>
    create: XOR<TypeCreateWithoutCategoryInput, TypeUncheckedCreateWithoutCategoryInput>
  }

  export type TypeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TypeWhereUniqueInput
    data: XOR<TypeUpdateWithoutCategoryInput, TypeUncheckedUpdateWithoutCategoryInput>
  }

  export type TypeUpdateManyWithWhereWithoutCategoryInput = {
    where: TypeScalarWhereInput
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TypeScalarWhereInput = {
    AND?: TypeScalarWhereInput | TypeScalarWhereInput[]
    OR?: TypeScalarWhereInput[]
    NOT?: TypeScalarWhereInput | TypeScalarWhereInput[]
    id?: StringFilter<"Type"> | string
    name?: StringFilter<"Type"> | string
    status?: BoolFilter<"Type"> | boolean
    categoryId?: StringNullableFilter<"Type"> | string | null
    createdAt?: DateTimeFilter<"Type"> | Date | string
    updatedAt?: DateTimeFilter<"Type"> | Date | string
  }

  export type FoodUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
  }

  export type FoodUpdateManyWithWhereWithoutCategoryInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: StringFilter<"Food"> | string
    name?: StringFilter<"Food"> | string
    description?: StringFilter<"Food"> | string
    price?: FloatFilter<"Food"> | number
    min_delivery_time?: IntFilter<"Food"> | number
    max_delivery_time?: IntFilter<"Food"> | number
    free_delivery?: BoolFilter<"Food"> | boolean
    veg?: BoolFilter<"Food"> | boolean
    discount?: FloatFilter<"Food"> | number
    sell_count?: IntFilter<"Food"> | number
    image?: StringFilter<"Food"> | string
    restaurantId?: StringNullableFilter<"Food"> | string | null
    categoryId?: StringNullableFilter<"Food"> | string | null
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
  }

  export type CategoryCreateWithoutTypeInput = {
    id?: string
    name: string
    image: string
    products_count?: number
    type_count?: number
    status?: boolean
    order_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    image: string
    products_count?: number
    type_count?: number
    status?: boolean
    order_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTypeInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput>
  }

  export type CategoryUpsertWithoutTypeInput = {
    update: XOR<CategoryUpdateWithoutTypeInput, CategoryUncheckedUpdateWithoutTypeInput>
    create: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTypeInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTypeInput, CategoryUncheckedUpdateWithoutTypeInput>
  }

  export type CategoryUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products_count?: IntFieldUpdateOperationsInput | number
    type_count?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products_count?: IntFieldUpdateOperationsInput | number
    type_count?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type RestaurantCreateWithoutCuisineInput = {
    restaurantId?: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: schedulesCreateNestedManyWithoutRestaurantInput
    foods?: FoodCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutCuisineInput = {
    restaurantId?: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: schedulesUncheckedCreateNestedManyWithoutRestaurantInput
    foods?: FoodUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutCuisineInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutCuisineInput, RestaurantUncheckedCreateWithoutCuisineInput>
  }

  export type FoodCreateWithoutCuisineInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantCreateNestedManyWithoutFoodInput
    restaurant?: RestaurantCreateNestedOneWithoutFoodsInput
    category?: CategoryCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateWithoutCuisineInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    restaurantId?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutCuisineInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutCuisineInput, FoodUncheckedCreateWithoutCuisineInput>
  }

  export type RestaurantUpsertWithoutCuisineInput = {
    update: XOR<RestaurantUpdateWithoutCuisineInput, RestaurantUncheckedUpdateWithoutCuisineInput>
    create: XOR<RestaurantCreateWithoutCuisineInput, RestaurantUncheckedCreateWithoutCuisineInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutCuisineInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutCuisineInput, RestaurantUncheckedUpdateWithoutCuisineInput>
  }

  export type RestaurantUpdateWithoutCuisineInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: schedulesUpdateManyWithoutRestaurantNestedInput
    foods?: FoodUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutCuisineInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: schedulesUncheckedUpdateManyWithoutRestaurantNestedInput
    foods?: FoodUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type FoodUpsertWithoutCuisineInput = {
    update: XOR<FoodUpdateWithoutCuisineInput, FoodUncheckedUpdateWithoutCuisineInput>
    create: XOR<FoodCreateWithoutCuisineInput, FoodUncheckedCreateWithoutCuisineInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutCuisineInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutCuisineInput, FoodUncheckedUpdateWithoutCuisineInput>
  }

  export type FoodUpdateWithoutCuisineInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUpdateManyWithoutFoodNestedInput
    restaurant?: RestaurantUpdateOneWithoutFoodsNestedInput
    category?: CategoryUpdateOneWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateWithoutCuisineInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type RestaurantCreateWithoutSchedulesInput = {
    restaurantId?: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutRestaurantInput
    cuisine?: CuisineCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutSchedulesInput = {
    restaurantId?: string
    name: string
    phone: string
    email: string
    logo: string
    image: string
    longitude: string
    latitude: string
    address: string
    footer_text: string
    minimum_order: number
    comission: number
    schedule_order: boolean
    cover_photo: string
    delivery: boolean
    free_delivery: boolean
    active: boolean
    off_day: string
    delivery_time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutRestaurantInput
    cuisine?: CuisineUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutSchedulesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutSchedulesInput, RestaurantUncheckedCreateWithoutSchedulesInput>
  }

  export type RestaurantUpsertWithoutSchedulesInput = {
    update: XOR<RestaurantUpdateWithoutSchedulesInput, RestaurantUncheckedUpdateWithoutSchedulesInput>
    create: XOR<RestaurantCreateWithoutSchedulesInput, RestaurantUncheckedCreateWithoutSchedulesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutSchedulesInput, RestaurantUncheckedUpdateWithoutSchedulesInput>
  }

  export type RestaurantUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutRestaurantNestedInput
    cuisine?: CuisineUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    footer_text?: StringFieldUpdateOperationsInput | string
    minimum_order?: FloatFieldUpdateOperationsInput | number
    comission?: FloatFieldUpdateOperationsInput | number
    schedule_order?: BoolFieldUpdateOperationsInput | boolean
    cover_photo?: StringFieldUpdateOperationsInput | string
    delivery?: BoolFieldUpdateOperationsInput | boolean
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    off_day?: StringFieldUpdateOperationsInput | string
    delivery_time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutRestaurantNestedInput
    cuisine?: CuisineUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type schedulesCreateWithoutRestaurantInput = {
    scheduleId?: string
    day: number
    opening_time?: Date | string | null
    closeing_time?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type schedulesUncheckedCreateWithoutRestaurantInput = {
    scheduleId?: string
    day: number
    opening_time?: Date | string | null
    closeing_time?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type schedulesCreateOrConnectWithoutRestaurantInput = {
    where: schedulesWhereUniqueInput
    create: XOR<schedulesCreateWithoutRestaurantInput, schedulesUncheckedCreateWithoutRestaurantInput>
  }

  export type schedulesCreateManyRestaurantInputEnvelope = {
    data: schedulesCreateManyRestaurantInput | schedulesCreateManyRestaurantInput[]
  }

  export type FoodCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantCreateNestedManyWithoutFoodInput
    cuisine?: CuisineCreateNestedManyWithoutFoodInput
    category?: CategoryCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: VariantUncheckedCreateNestedManyWithoutFoodInput
    cuisine?: CuisineUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutRestaurantInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutRestaurantInput, FoodUncheckedCreateWithoutRestaurantInput>
  }

  export type FoodCreateManyRestaurantInputEnvelope = {
    data: FoodCreateManyRestaurantInput | FoodCreateManyRestaurantInput[]
  }

  export type CuisineCreateWithoutRestaurantInput = {
    cuisineId?: string
    name: string
    image: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodCreateNestedOneWithoutCuisineInput
  }

  export type CuisineUncheckedCreateWithoutRestaurantInput = {
    cuisineId?: string
    name: string
    image: string
    status?: boolean
    foodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuisineCreateOrConnectWithoutRestaurantInput = {
    where: CuisineWhereUniqueInput
    create: XOR<CuisineCreateWithoutRestaurantInput, CuisineUncheckedCreateWithoutRestaurantInput>
  }

  export type CuisineCreateManyRestaurantInputEnvelope = {
    data: CuisineCreateManyRestaurantInput | CuisineCreateManyRestaurantInput[]
  }

  export type schedulesUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: schedulesWhereUniqueInput
    update: XOR<schedulesUpdateWithoutRestaurantInput, schedulesUncheckedUpdateWithoutRestaurantInput>
    create: XOR<schedulesCreateWithoutRestaurantInput, schedulesUncheckedCreateWithoutRestaurantInput>
  }

  export type schedulesUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: schedulesWhereUniqueInput
    data: XOR<schedulesUpdateWithoutRestaurantInput, schedulesUncheckedUpdateWithoutRestaurantInput>
  }

  export type schedulesUpdateManyWithWhereWithoutRestaurantInput = {
    where: schedulesScalarWhereInput
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type schedulesScalarWhereInput = {
    AND?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
    OR?: schedulesScalarWhereInput[]
    NOT?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
    scheduleId?: StringFilter<"schedules"> | string
    day?: IntFilter<"schedules"> | number
    opening_time?: DateTimeNullableFilter<"schedules"> | Date | string | null
    closeing_time?: DateTimeNullableFilter<"schedules"> | Date | string | null
    restaurantId?: StringNullableFilter<"schedules"> | string | null
    createdAt?: DateTimeFilter<"schedules"> | Date | string
    updatedAt?: DateTimeFilter<"schedules"> | Date | string
  }

  export type FoodUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutRestaurantInput, FoodUncheckedUpdateWithoutRestaurantInput>
    create: XOR<FoodCreateWithoutRestaurantInput, FoodUncheckedCreateWithoutRestaurantInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutRestaurantInput, FoodUncheckedUpdateWithoutRestaurantInput>
  }

  export type FoodUpdateManyWithWhereWithoutRestaurantInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type CuisineUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: CuisineWhereUniqueInput
    update: XOR<CuisineUpdateWithoutRestaurantInput, CuisineUncheckedUpdateWithoutRestaurantInput>
    create: XOR<CuisineCreateWithoutRestaurantInput, CuisineUncheckedCreateWithoutRestaurantInput>
  }

  export type CuisineUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: CuisineWhereUniqueInput
    data: XOR<CuisineUpdateWithoutRestaurantInput, CuisineUncheckedUpdateWithoutRestaurantInput>
  }

  export type CuisineUpdateManyWithWhereWithoutRestaurantInput = {
    where: CuisineScalarWhereInput
    data: XOR<CuisineUpdateManyMutationInput, CuisineUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type VariantCreateManyFoodInput = {
    variantId?: string
    name: string
    type: string
    min: string
    max: string
    required: boolean
  }

  export type CuisineCreateManyFoodInput = {
    cuisineId?: string
    name: string
    image: string
    status?: boolean
    restaurantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VariantUpdateWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    min?: StringFieldUpdateOperationsInput | string
    max?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    values?: ValueUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    min?: StringFieldUpdateOperationsInput | string
    max?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    values?: ValueUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateManyWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    min?: StringFieldUpdateOperationsInput | string
    max?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CuisineUpdateWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneWithoutCuisineNestedInput
  }

  export type CuisineUncheckedUpdateWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuisineUncheckedUpdateManyWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValueCreateManyVariantInput = {
    valueId?: string
    label: string
    optionPrice: number
    stock: number
    stock_unlimited: boolean
  }

  export type ValueUpdateWithoutVariantInput = {
    label?: StringFieldUpdateOperationsInput | string
    optionPrice?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stock_unlimited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ValueUncheckedUpdateWithoutVariantInput = {
    label?: StringFieldUpdateOperationsInput | string
    optionPrice?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stock_unlimited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ValueUncheckedUpdateManyWithoutVariantInput = {
    label?: StringFieldUpdateOperationsInput | string
    optionPrice?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    stock_unlimited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TypeCreateManyCategoryInput = {
    id?: string
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodCreateManyCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    restaurantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TypeUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeUncheckedUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeUncheckedUpdateManyWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUpdateManyWithoutFoodNestedInput
    cuisine?: CuisineUpdateManyWithoutFoodNestedInput
    restaurant?: RestaurantUpdateOneWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUncheckedUpdateManyWithoutFoodNestedInput
    cuisine?: CuisineUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesCreateManyRestaurantInput = {
    scheduleId?: string
    day: number
    opening_time?: Date | string | null
    closeing_time?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodCreateManyRestaurantInput = {
    id?: string
    name: string
    description: string
    price: number
    min_delivery_time: number
    max_delivery_time: number
    free_delivery?: boolean
    veg: boolean
    discount: number
    sell_count: number
    image: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuisineCreateManyRestaurantInput = {
    cuisineId?: string
    name: string
    image: string
    status?: boolean
    foodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type schedulesUpdateWithoutRestaurantInput = {
    day?: IntFieldUpdateOperationsInput | number
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesUncheckedUpdateWithoutRestaurantInput = {
    day?: IntFieldUpdateOperationsInput | number
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesUncheckedUpdateManyWithoutRestaurantInput = {
    day?: IntFieldUpdateOperationsInput | number
    opening_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeing_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUpdateManyWithoutFoodNestedInput
    cuisine?: CuisineUpdateManyWithoutFoodNestedInput
    category?: CategoryUpdateOneWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: VariantUncheckedUpdateManyWithoutFoodNestedInput
    cuisine?: CuisineUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    min_delivery_time?: IntFieldUpdateOperationsInput | number
    max_delivery_time?: IntFieldUpdateOperationsInput | number
    free_delivery?: BoolFieldUpdateOperationsInput | boolean
    veg?: BoolFieldUpdateOperationsInput | boolean
    discount?: FloatFieldUpdateOperationsInput | number
    sell_count?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuisineUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneWithoutCuisineNestedInput
  }

  export type CuisineUncheckedUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuisineUncheckedUpdateManyWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    foodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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