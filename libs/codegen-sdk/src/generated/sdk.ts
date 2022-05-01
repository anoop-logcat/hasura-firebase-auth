import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type RegisterInput = {
  avatar_url?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  userId: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "auth.account_roles" */
export type Auth_Account_Roles = {
  __typename?: 'auth_account_roles';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_default: Scalars['Boolean'];
  role: Auth_Roles_Enum;
  /** An object relationship */
  roleByRole: Auth_Roles;
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate = {
  __typename?: 'auth_account_roles_aggregate';
  aggregate?: Maybe<Auth_Account_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Account_Roles>;
};

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Fields = {
  __typename?: 'auth_account_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Roles_Max_Fields>;
  min?: Maybe<Auth_Account_Roles_Min_Fields>;
};


/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Account_Roles_Max_Order_By>;
  min?: InputMaybe<Auth_Account_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Account_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Account_Roles_Bool_Exp>>;
  _not?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Account_Roles_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_default?: InputMaybe<Boolean_Comparison_Exp>;
  role?: InputMaybe<Auth_Roles_Enum_Comparison_Exp>;
  roleByRole?: InputMaybe<Auth_Roles_Bool_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account_roles" */
export enum Auth_Account_Roles_Constraint {
  /** unique or primary key constraint */
  AccountRolesPkey = 'account_roles_pkey'
}

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_default?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Auth_Roles_Enum>;
  roleByRole?: InputMaybe<Auth_Roles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Account_Roles_Max_Fields = {
  __typename?: 'auth_account_roles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Roles_Min_Fields = {
  __typename?: 'auth_account_roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.account_roles" */
export type Auth_Account_Roles_Mutation_Response = {
  __typename?: 'auth_account_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Roles>;
};

/** on_conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint;
  update_columns?: Array<Auth_Account_Roles_Update_Column>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_roles". */
export type Auth_Account_Roles_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_default?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<Auth_Roles_Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_account_roles */
export type Auth_Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'is_default',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.account_roles" */
export type Auth_Account_Roles_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_default?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Auth_Roles_Enum>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'is_default',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "auth.roles" */
export type Auth_Roles = {
  __typename?: 'auth_roles';
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  comment: Scalars['String'];
  value: Scalars['String'];
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Roles>;
};

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Roles_Max_Fields>;
  min?: Maybe<Auth_Roles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Roles_Bool_Exp>>;
  _not?: InputMaybe<Auth_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Roles_Bool_Exp>>;
  account_roles?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum Auth_Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

export enum Auth_Roles_Enum {
  /** A role for anonymous */
  Anonymous = 'anonymous',
  /** A role for customer */
  Customer = 'customer',
  /** A role for retailer */
  Retailer = 'retailer',
  /** A role for user */
  User = 'user'
}

/** Boolean expression to compare columns of type "auth_roles_enum". All fields are combined with logical 'AND'. */
export type Auth_Roles_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Auth_Roles_Enum>;
  _in?: InputMaybe<Array<Auth_Roles_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Auth_Roles_Enum>;
  _nin?: InputMaybe<Array<Auth_Roles_Enum>>;
};

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: InputMaybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Roles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns?: Array<Auth_Roles_Update_Column>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type Auth_Roles_Order_By = {
  account_roles_aggregate?: InputMaybe<Auth_Account_Roles_Aggregate_Order_By>;
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_roles */
export type Auth_Roles_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum Auth_Roles_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.roles" */
export type Auth_Roles_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum Auth_Roles_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** delete data from the table: "test" */
  delete_test?: Maybe<Test_Mutation_Response>;
  /** delete single row from the table: "test" */
  delete_test_by_pk?: Maybe<Test>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<Auth_Account_Roles>;
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<Auth_Roles>;
  /** insert data into the table: "test" */
  insert_test?: Maybe<Test_Mutation_Response>;
  /** insert a single row into the table: "test" */
  insert_test_one?: Maybe<Test>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  register?: Maybe<RegisterOutput>;
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** update data of the table: "test" */
  update_test?: Maybe<Test_Mutation_Response>;
  /** update single row of the table: "test" */
  update_test_by_pk?: Maybe<Test>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_RolesArgs = {
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TestArgs = {
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_RolesArgs = {
  objects: Array<Auth_Account_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Roles_OneArgs = {
  object: Auth_Account_Roles_Insert_Input;
  on_conflict?: InputMaybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input;
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_OneArgs = {
  object: Test_Insert_Input;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  object: RegisterInput;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_RolesArgs = {
  _set?: InputMaybe<Auth_Account_Roles_Set_Input>;
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Roles_By_PkArgs = {
  _set?: InputMaybe<Auth_Account_Roles_Set_Input>;
  pk_columns: Auth_Account_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: InputMaybe<Auth_Roles_Set_Input>;
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: InputMaybe<Auth_Roles_Set_Input>;
  pk_columns: Auth_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TestArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_By_PkArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootAuth_Account_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootAuth_Account_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test';
  id: Scalars['uuid'];
  text: Scalars['String'];
};

/** aggregated selection of "test" */
export type Test_Aggregate = {
  __typename?: 'test_aggregate';
  aggregate?: Maybe<Test_Aggregate_Fields>;
  nodes: Array<Test>;
};

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
  __typename?: 'test_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_Max_Fields>;
  min?: Maybe<Test_Min_Fields>;
};


/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Bool_Exp>>;
  _not?: InputMaybe<Test_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "test" */
export enum Test_Constraint {
  /** unique or primary key constraint */
  TestPkey = 'test_pkey'
}

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: 'test_max_fields';
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: 'test_min_fields';
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
  __typename?: 'test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test>;
};

/** on_conflict condition type for table "test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns?: Array<Test_Update_Column>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test" */
export enum Test_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "test" */
export type Test_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "test" */
export enum Test_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "user" */
export type UserAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Account_Roles_Order_By>>;
  where?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  account_roles?: InputMaybe<Auth_Account_Roles_Bool_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  account_roles?: InputMaybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  account_roles_aggregate?: InputMaybe<Auth_Account_Roles_Aggregate_Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AddAccountRolesMutationVariables = Exact<{
  objects: Array<Auth_Account_Roles_Insert_Input> | Auth_Account_Roles_Insert_Input;
}>;


export type AddAccountRolesMutation = { __typename?: 'mutation_root', insert_auth_account_roles?: { __typename?: 'auth_account_roles_mutation_response', returning: Array<{ __typename?: 'auth_account_roles', id: any, created_at: any, user_id: any, role: Auth_Roles_Enum, is_default: boolean }> } | null };

export type GetTestByBackendQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestByBackendQuery = { __typename?: 'query_root', test: Array<{ __typename?: 'test', id: any, text: string }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', user_by_pk?: { __typename?: 'user', avatar_url?: string | null, created_at: any, display_name: string, email: string, first_name: string, id: any, last_name: string, updated_at: any } | null };

export type AddUserMutationVariables = Exact<{
  object: User_Insert_Input;
}>;


export type AddUserMutation = { __typename?: 'mutation_root', insert_user_one?: { __typename?: 'user', id: any, created_at: any, updated_at: any, first_name: string, last_name: string, display_name: string, email: string, avatar_url?: string | null } | null };


export const AddAccountRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addAccountRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"auth_account_roles_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_auth_account_roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}}]}}]}}]}}]} as unknown as DocumentNode;
export const GetTestByBackendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTestByBackend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"test"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode;
export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]} as unknown as DocumentNode;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addAccountRoles(variables: AddAccountRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddAccountRolesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddAccountRolesMutation>(AddAccountRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addAccountRoles', 'mutation');
    },
    getTestByBackend(variables?: GetTestByBackendQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTestByBackendQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTestByBackendQuery>(GetTestByBackendDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTestByBackend', 'query');
    },
    getUserById(variables: GetUserByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByIdQuery>(GetUserByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserById', 'query');
    },
    addUser(variables: AddUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddUserMutation>(AddUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addUser', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;