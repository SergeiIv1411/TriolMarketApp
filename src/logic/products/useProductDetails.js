import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_PRODUCT_DETAILS } from '../../apollo/queries/getProductDetails';

export const useProductDetails = (props) => {
    const [productData, setProductData] = useState({});
    const [getProductDetailsQuery, responseObject] = useLazyQuery(
    GET_PRODUCT_DETAILS,
    {
      variables: { id: props.id },
      onCompleted: response => {
        console.log(response);
        setProductData(response?.productDetail);
      },
    },
  );

  const { loading } = responseObject;

  const getProductDetails = () => {
    getProductDetailsQuery();
  };

  return {
    getProductDetails,
    loading,
    productData,
  };
};
