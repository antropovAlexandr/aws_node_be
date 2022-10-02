import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse, formatNotFoundResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { getProductByIdService } from '@functions/getProductsById/service';

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(event);
  const { productId } = event.pathParameters;
  const item = await getProductByIdService(productId);
  if (!item) {
    return formatNotFoundResponse('Product not found');
  }
  return formatJSONResponse({
    ...item,
  });
};

export const main = middyfy(getProductsById);
