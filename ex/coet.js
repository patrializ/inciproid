const encoding = {
    fill: '#0000ff', // Example property
    stroke: '#ff0000' // Example property
};

const config = {
    stroke: 'stroke' in encoding,
    fill: 'fill' in encoding
};

console.log(config); 
// Output: { stroke: true, fill: true }
