/**
 *  @flow
 */

import { gql } from '@apollo/client';

export const GET_CATEGORYPRODUCT = gql`
  query GetCategoryProducts(
    $categoryId: ID!
    $pageSize: Int!
    $currentPage: Int!
  ) {
    categoryProducts(
      category_id: $categoryId
      pageSize: $pageSize
      currentPage: $currentPage
    ) {
      _id
      name
      article
      images
      priceForOne
    }
  }
`;
