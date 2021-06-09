/**
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CATEGORYPRODUCT } from '../../apollo/queries/getCategoryProducts';

export const useCategoryProducts = props => {
  const [products, setProducts] = useState([]);

  const [getCategoryProducts, queryResponse] = useLazyQuery(
    GET_CATEGORYPRODUCT,
    {
      variables: { categoryId: props.categoryId, pageSize: 10, currentPage: 0 },
    },
  );
  const { loading, error, data } = queryResponse;

  useEffect(() => {
    const responseData = data;
    if (responseData?.categoryProducts) {
        setProducts(responseData?.categoryProducts)
    }
  }, [data]);
  return {
    products,
    getCategoryProducts,
    loading,
  };
};
