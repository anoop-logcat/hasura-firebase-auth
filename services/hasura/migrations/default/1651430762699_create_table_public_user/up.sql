CREATE TABLE "public"."user" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "first_name" text NOT NULL, "last_name" text NOT NULL, "display_name" text NOT NULL, "default_role" text NOT NULL, "email" text NOT NULL, "avatar_url" text, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;