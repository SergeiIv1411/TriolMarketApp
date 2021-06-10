import React, { useEffect, useState } from 'react';

export const useProductDetails = (props) => {
    const getProductDetails = () => {};
    
    return {
        getProductDetails,
        loading: false,
    };
};