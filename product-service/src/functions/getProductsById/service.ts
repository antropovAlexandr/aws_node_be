import AWS from 'aws-sdk';

export const getProductByIdService = (id) => {
  const dynamo = new AWS.DynamoDB.DocumentClient();
  return dynamo
    .query({
      TableName: process.env.AWS_PRODUCT_TABLE_NAME,
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: { ':id': id },
    })
    .promise();
};
