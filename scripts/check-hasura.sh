BASE_PATH=$1
STAGE=${2:-'*'}

HASURA_ENV_URL="$BASE_PATH/services/hasura/cli/.env.$STAGE"

if [ ! -f HASURA_ENV_URL ]
then
  export $(cat $HASURA_ENV_URL | xargs)
fi

echo ""
echo "⏱️ Waiting for hasura to start"
until $(curl --output /dev/null --silent --fail $HASURA_GRAPHQL_ENDPOINT/v1/version); do
    printf '.'
    sleep 5
done
echo ""
echo "✅ Hasura Running"
