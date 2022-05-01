NAME_development=next-auth-development

COMPOSE_FILE_development=./deployments/development/docker-compose-development.yml

BASE_PATH=$(PWD)

all:
	@echo
	@echo "please specifiy the command 😭"
	@echo

encrypt-envs:
	@echo
	@echo "🗝️ Encrypt secrets in development"
	@echo
	@find . -name ".env.development.gpg" -exec rm -rf {} ';'
	@find . -name ".env.development" -exec gpg --passphrase "$(PASSPHRASE_DEVELOPMENT)" --quiet --yes --batch -c {} ';'
	@echo
	@echo "🗝️ Encrypt secrets in staging"
	@echo
	@find . -name ".env.staging.gpg" -exec rm -rf {} ';'
	@find . -name ".env.staging" -exec gpg --passphrase "$(PASSPHRASE_STAGING)" --quiet --yes --batch -c {} ';'
	@echo
	@echo "🗝️ Encrypt secrets in production"
	@echo
	@find . -name ".env.production.gpg" -exec rm -rf {} ';'
	@find . -name ".env.production" -exec gpg --passphrase "$(PASSPHRASE_PRODUCTION)" --quiet --yes --batch -c {} ';'

decrypt-envs:
	@echo
	@echo "🔓 Decrypt secrets development"
	@echo
	@chmod +x ./scripts/decrypt.sh
	@./scripts/decrypt.sh "$(PWD)" "$(PASSPHRASE_DEVELOPMENT)" "development"
	@echo
	@echo "🔓 Decrypt secrets staging"
	@echo
	@./scripts/decrypt.sh "$(PWD)" "$(PASSPHRASE_STAGING)" "staging"
	@echo
	@echo "🔓 Decrypt secrets production"
	@echo
	@./scripts/decrypt.sh "$(PWD)" "$(PASSPHRASE_PRODUCTION)" "production"

decrypt-env-stage:
	@echo
	@echo "🚀Decrypt secrets $(stage)"
	@echo
	@chmod +x ./scripts/decrypt.sh
	@./scripts/decrypt.sh "$(PWD)" "$(passphrase)" "$(stage)"

create-env-stage:
	@echo
	@echo "🚀Moving secrets of $(stage) to .env"
	@echo
	@chmod +x ./scripts/create-env.sh
	@./scripts/create-env.sh "$(PWD)" "$(stage)"

build:
	@echo
	@echo "🏭 Building $(stage) service containers"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) build

push:
	@echo
	@echo "⤴️ Uploading $(stage) service containers"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) push

pull:
	@echo
	@echo "⤵️ Downloading $(stage) containers"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) pull

deploy:
	@echo
	@echo "💻 Deploying $(stage) services"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) up -d

delete:
	@echo
	@echo "🗑️ Deleting $(stage) services"
	@echo
ifneq (,$(findstring i, $(MAKEFLAGS)))
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) down -v
else
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) down
endif

build-deploy:
	@echo
	@echo "🏭 ➡️ 💻 Building & Deploying $(stage) services"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) up -d --build


clean-cache:
	@echo
	@echo "🗑️ Cleaning Caches"
	@echo
	@docker system prune --volumes -f

clean:
	@echo
	@echo "🗑️ Deleting and removing all deployments"
	@echo
	@docker system prune -a -f

hasura-migrate:
	@echo
	@echo "🚲 Migrating $(stage) hasura"
	@echo
	@npx hasura --project $(BASE_PATH)/services/hasura --envfile cli/.env.$(stage) migrate apply --database-name 'default'
	@npx hasura --project $(BASE_PATH)/services/hasura --envfile cli/.env.$(stage) metadata apply

hasura-console:
	@echo
	@echo "⚙️ Loading $(stage) hasura console"
	@echo
	@npx hasura --project $(BASE_PATH)/services/hasura --envfile cli/.env.$(stage) console

hasura-seed:
	@echo
	@echo "🪴 Seeding $(stage) hasura"
	@echo
	@npx hasura --project $(BASE_PATH)/services/hasura --envfile cli/.env.$(stage) seeds apply --database-name 'default'


check-hasura:
	@./scripts/check-hasura.sh "$(BASE_PATH)" "$(stage)"

recreate:
	@$(MAKE) --no-print-directory delete -i
	@$(MAKE) --no-print-directory decrypt-envs
	@$(MAKE) --no-print-directory build-deploy
	@$(MAKE) --no-print-directory check-hasura
	@$(MAKE) --no-print-directory hasura-migrate
	@$(MAKE) --no-print-directory hasura-seed

create-seed:
	npx hasura --project $(BASE_PATH)/services/hasura --envfile cli/.env.$(stage)  --database-name 'default' seed create $(name) \
  --from-table test
