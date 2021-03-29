/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAll = /* GraphQL */ `
  query GetAll($zipcode: String!) {
    getAll(zipcode: $zipcode) {
      date
      temp
    }
  }
`;
export const getCurrent = /* GraphQL */ `
  query GetCurrent($zipcode: String!) {
    getCurrent(zipcode: $zipcode)
  }
`;
