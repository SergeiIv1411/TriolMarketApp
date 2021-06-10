/**
 *  @flow
 */

import { gql } from '@apollo/client';

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($id: ID!) {
	productDetail(id: $id) {
    name
    article
    count
    priceForOne
    weight
    description
    composition
    new_product
    sale
    brand
    country
    images
    packages{
      price
      package_name
    }
  }
}
`;
