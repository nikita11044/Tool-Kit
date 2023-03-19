import { GraphQLClient } from 'graphql-request';

const headers = {
    authorization: 'Bearer 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',
};

export const requestClient = new GraphQLClient('https://api.github.com/graphql', { headers });
