import React, { useState, useEffect } from 'react';
import { getCategoryColors } from '../../theme/colors';

export const useCategoryColors = () => {
    const [colors, setColors] = useState([]);
    
    useEffect(() => {
        setColors(getCategoryColors());
    },[])

    const getCategoryColorByIndex = (index) => {
        const colorIndex = index % colors.length;
        return colors[colorIndex];
    }

    return {
        getCategoryColorByIndex,
    };
}