import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

// import { products } from '@functions/mock/mock';
import { getProductService } from '@functions/getProductsList/service';

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<void> = async () => {
  const products = await getProductService();
  return formatJSONResponse(products);
};

export const main = middyfy(getProductsList);
