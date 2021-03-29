/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type DataOutput = {
  __typename: "DataOutput",
  date?: string | null,
  temp?: string | null,
};

export type GetAllQueryVariables = {
  zipcode?: string,
};

export type GetAllQuery = {
  getAll?:  Array< {
    __typename: "DataOutput",
    date?: string | null,
    temp?: string | null,
  } | null > | null,
};

export type GetCurrentQueryVariables = {
  zipcode?: string,
};

export type GetCurrentQuery = {
  getCurrent: string,
};
