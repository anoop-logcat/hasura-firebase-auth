alter table "auth"."account_roles" add column "is_default" boolean
 not null default 'false';
