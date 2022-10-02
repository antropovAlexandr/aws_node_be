import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { createProductService } from '@functions/createProduct/service';

export const createProduct: ValidatedEventAPIGatewayProxyEvent<void> = async (event) => {
  // @ts-ignore
  const { item } = event.body;
  const products = await createProductService(item);
  return formatJSONResponse(products);
};

export const main = middyfy(createProduct);
