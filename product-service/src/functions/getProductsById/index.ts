import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products/{productId}',
        request: {
          parameters: {
            paths: {
              productId: true,
            },
          },
        },
        documentation: {
          summary: 'Get product',
          description: 'Get product by Id',
        },
      },
    },
  ],
};
