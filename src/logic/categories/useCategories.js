/**
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../apollo/queries/getCategory';

export const useCategories = props => {
  const [categories, setCategories] = useState([]);
  const [getCategories, { called, loading, data, error }] = useLazyQuery(
    GET_CATEGORIES,
    { variables: { parentId: props.parentId } },
  );

  useEffect(() => {
    if (data) {
      const list = data;

      setCategories(list.categoryByParent);
    }
    if (error) {
        console.log({ error });
    }

  }, [data, error]);
  return {
    getCategories,
    categories,
    loading,
  };
};
