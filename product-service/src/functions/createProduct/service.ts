import AWS from 'aws-sdk';

export const createProductService = (item) => {
  const dynamo = new AWS.DynamoDB.DocumentClient();
  return dynamo
    .put({
      TableName: process.env.AWS_PRODUCT_TABLE_NAME,
      Item: item,
    })
    .promise();
};
