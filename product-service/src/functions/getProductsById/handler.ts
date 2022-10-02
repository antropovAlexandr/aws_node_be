import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse, formatNotFoundResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { products } from '@functions/mock/mock';
import { Product } from '../../types';
import schema from './schema';

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(event);
  const { productId } = event.pathParameters;
  const item: Product = products.find((product: Product) => product.id === productId);
  if (!item) {
    return formatNotFoundResponse('Product not found');
  }
  return formatJSONResponse({
    ...item,
  });
};

export const main = middyfy(getProductsById);
