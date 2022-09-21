import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        documentation: {
          summary: 'Get product list',
          description: 'Get all products',
        },
      },
    },
  ],
};
