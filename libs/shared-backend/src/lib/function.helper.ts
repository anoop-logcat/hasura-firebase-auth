import { get, has, omit } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';
import { HasuraException } from './exceptions';

export const formatJSONResponse = (
  response: Record<string, unknown>,
  statusCode = 200
) => {
  return {
    statusCode,
    ...(response || {}),
  };
};

export const prepareHandler =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (req.method !== 'POST') {
        res.status(400).json({ message: 'Method Not Allowed' });
      } else {
        const response = await handler({ ...req });
        if (!has(response, 'statusCode')) {
          res.status(200).json(response);
        } else {
          res
            .status(get(response, 'statusCode'))
            .json({ ...omit(response, 'statusCode') });
        }
      }
    } catch (error) {
      if (error instanceof HasuraException) {
        res.status(400).json({
          message: get(error, 'message'),
          extensions: get(error, 'extensions'),
        });
      } else if (has(error, 'response.data.message')) {
        res.status(400).json({
          message: get(error, 'response.data.message'),
          extensions: get(error, 'response.data.extensions'),
        });
      } else if (has(error, 'message')) {
        res.status(400).json({ message: get(error, 'message') });
      } else {
        res.status(400).json({ message: 'Internal System Error' });
      }
    }
  };
