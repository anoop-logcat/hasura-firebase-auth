import { Auth_Roles_Enum } from '@next-auth/codegen-sdk';
import {
  createHasura,
  FirebaseAdmin,
  formatJSONResponse,
  prepareHandler,
} from '@next-auth/shared-backend';
import { get } from 'lodash';

const admin = FirebaseAdmin();

export default prepareHandler(async (event) => {
  const { sdk } = createHasura();

  const { first_name, last_name, avatar_url, email, password } = get(
    event,
    'body.input.object'
  );

  // add new user in Hasura
  const { insert_user_one: hasuraUser } = await sdk.addUser({
    object: {
      first_name,
      last_name,
      avatar_url,
      display_name: [first_name, last_name].join(' ').trim(),
      email,
    },
  });

  // // add user roles in Hasura
  await sdk.addAccountRoles({
    objects: [
      {
        user_id: hasuraUser.id,
        role: Auth_Roles_Enum.User,
      },
      {
        user_id: hasuraUser.id,
        role: Auth_Roles_Enum.Customer,
        is_default: true,
      },
    ],
  });

  // // authenticate new user using firebase
  await admin.auth().createUser({
    uid: hasuraUser.id,
    email,
    emailVerified: false,
    password,
    displayName: [first_name, last_name].join(' ').trim(),
    disabled: false,
  });

  // set custom claims for hasura access
  await admin.auth().setCustomUserClaims(hasuraUser.id, {
    role: Auth_Roles_Enum.Customer,
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': [
        Auth_Roles_Enum.User,
        Auth_Roles_Enum.Customer,
      ],
      'x-hasura-default-role': Auth_Roles_Enum.Customer,
      'x-hasura-user-id': hasuraUser.id,
    },
  });

  return formatJSONResponse(
    {
      userId: String(hasuraUser.id),
    },
    200
  );
});
