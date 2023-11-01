export const getAllProductsParam = {
  url: "/products",
  method: "GET",
  headers: {
    Authorization: "Bearer yourAccessToken",
    "Content-Type": "application/json",
  },
  data: {
    key1: "value1",
    key2: "value2",
  },
};

export const getSingleProdParam = (id) => {
  return {
    url: `/products/${id}`,
    method: "GET",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: {
      key1: "value1",
      key2: "value2",
    },
  };
};

export const addNewProductParam = (payload) => {
  return {
    url: "/admin/add-product",
    method: "POST",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: payload,
  };
};

export const deleteProdParam = (id) => {
  return {
    url: `admin/delete-product`,
    method: "POST",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: {
      productId: id,
    },
  };
};

export const getCategoryProdParam = (category) => {
  return {
    url: `/admin/products/${category}`,
    method: "GET",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: {
      key1: "value1",
      key2: "value2",
    },
  };
};

export const editProductParam = (payload) => {
  return {
    url: "/admin/edit-product",
    method: "POST",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: payload,
  };
};
