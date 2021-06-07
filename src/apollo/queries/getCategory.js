/**
 *  @flow
 */

import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories($parentId: ID) {
    categoryByParent(parentId: $parentId) {
      _id
      name
      parentId
    }
  }
`;
