import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { products } from '@functions/mock/mock';

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<void> = async () => {
  return formatJSONResponse(products);
};

export const main = middyfy(getProductsList);
