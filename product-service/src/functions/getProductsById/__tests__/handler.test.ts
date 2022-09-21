import { getProductsById } from '../handler';
import { products } from '../../mock/mock';

describe('GetProduct Handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return code 200', async () => {
    //@ts-ignore
    const result = await getProductsById({
      pathParameters: {
        productId: products[0].id,
      },
    });
    expect(result).toMatchObject({ statusCode: 200 });
  });

  it('should return code 404', async () => {
    // @ts-ignore
    const result = await getProductsById({
      pathParameters: {
        productId: '123',
      },
    });
    expect(result).toMatchObject({ statusCode: 404 });
  });
});
