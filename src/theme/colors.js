const categoryColors = [
    '#e5cabb',
    '#cb6442',
    '#ddb875',
    '#8d9969',
    '#7ab2c9',
    '#ae8a95',
];

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

export const getCategoryColors = () => shuffle(categoryColors); 