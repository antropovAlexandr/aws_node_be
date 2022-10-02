import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'put',
        path: 'products',
        cors: true,
        documentation: {
          summary: 'Create product',
          description: 'Create new products',
        },
      },
    },
  ],
};
