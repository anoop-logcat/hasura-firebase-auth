alter table "auth"."account_roles"
  add constraint "account_roles_role_fkey"
  foreign key ("role")
  references "auth"."roles"
  ("value") on update restrict on delete restrict;
