
const productsFormatterWithFavProp = (productsArray, allFavProductsApiData) => {
  let formattedProducts;
  let allFavProductsId = {};
  let newProducts;

  // creating a new formatted object and assigning it to formattedProducts 
  formattedProducts = productsArray?.map((product) => {
    return {
      fields: product.fields || product._source || product,
      id: product.productId  || product.id || product._id,
    }
  });

  // getting all favourite products IDs in allFavProductsId
  allFavProductsApiData?.forEach((product) => {
    if (product.productId !== undefined) {
      allFavProductsId[product.productId] = product.productId;
    }
  });

  // adding isAddedToFav property in formattedProduct object and returning a new object
  newProducts = formattedProducts?.map((product) => {
    if (allFavProductsId[product.id] === undefined) {
      return { ...product, isAddedToFav: false };
    } else {
      return { ...product, isAddedToFav: true };
    }
  });
  return newProducts;
};

const productsFormatter = (productsArray) => {
  let formattedProducts;

  // creating a new formatted object and assigning it to formattedProducts 
  formattedProducts = productsArray?.map((product) => {
    return {
      fields: product.fields || product._source || product,
      id: product.productId  || product.id || product._id,
    }
  });
  return formattedProducts;
}

export { productsFormatterWithFavProp, productsFormatter };