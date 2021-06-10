/**
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CATEGORYPRODUCT } from '../../apollo/queries/getCategoryProducts';

const PAGE_SIZE = 10;

export const useCategoryProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(props.totalCount);

  const [getCategoryProducts, queryResponse] = useLazyQuery(
    GET_CATEGORYPRODUCT,
    {
      variables: {
        categoryId: props.categoryId,
        pageSize: 10,
        currentPage: currentPage,
      },
      onCompleted: (responseData) => {
        if (responseData?.categoryProducts && currentPage === 1) {
          setProducts(responseData?.categoryProducts);
        } else if (
          responseData?.categoryProducts &&
          products.length < totalCount &&
          products.length < currentPage * PAGE_SIZE
        ) {
          setProducts([...products, ...responseData?.categoryProducts]);
        }
      },
    },
  );
  const { loading, error, data } = queryResponse;

  useEffect(() => {
    if (!loading) {
      getCategoryProducts();
    }
  }, [currentPage, getCategoryProducts]);

  const refresh = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    } else {
      getCategoryProducts();
    }
  };

  const loadMore = () => {
    if (loading) {
      return;
    }
    if (currentPage * PAGE_SIZE === products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    products,
    getCategoryProducts,
    loading,
    refreshing: loading,
    refresh,
    loadMore,
  };
};
