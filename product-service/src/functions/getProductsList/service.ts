import AWS from 'aws-sdk';

export const getProductService = () => {
  const dynamo = new AWS.DynamoDB.DocumentClient();
  return dynamo
    .scan({
      TableName: process.env.AWS_PRODUCT_TABLE_NAME,
    })
    .promise();
};
