alter table "auth"."account_roles"
  add constraint "account_roles_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete restrict;
