import { getProductsList } from '../handler';

describe('GetProductList Handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return code 200', async () => {
    // @ts-ignore
    const result = await getProductsList();
    expect(result).toMatchObject({ statusCode: 200 });
  });
});
