import apiClient from "../../libs/apiClient"; 
  
export const getAllProducts = async () => {
  const response = await apiClient.get("/api/products/");
  return response.data;
};

export const getAllCategories = async () => {
  const response = await apiClient.get("/api/categories/");
  return response.data;
};

export const getRelatedProducts = async (productId) => {
  const response = await apiClient.get(`/api/related-products/${productId}/`);
  return response.data;
};


export const getPatentProducts = async () => {
  const response = await apiClient.get("/api/products/patent/");
  return response.data;
};

export const getBestSellerProducts = async () => {
  const response = await apiClient.get("/api/products/best-seller/");
  return response.data;
};

