alter table "public"."user" alter column "default_role" drop not null;
alter table "public"."user" add column "default_role" text;
