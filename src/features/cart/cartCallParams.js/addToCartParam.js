export const addToCartParam = (payload) => {
  return {
    url: `/cart`,
    method: "POST",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: {
      ...payload,
      cartQty: 1,
    },
  };
};

export const getCartParam = () => {
  return {
    url: `/cart`,
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

export const editCartParam = (id,payload) => {
  return {
    url: `https://651d110444e393af2d591767.mockapi.io/cart/${id}`,
    method: "PUT",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: {
      ...payload,
      cartQty: payload.cartQty + 1,
    },
  };
};

export const deleteCartParam = (id) => {
  return {
    url: `/cart/${id}`,
    method: "DELETE",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: {
      productId: id,
    },
  };
};
