
const filePath = 'api/brands.json';

export const getBrands = async () => {
  try {
      const response = await fetch(filePath);
      console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
};
