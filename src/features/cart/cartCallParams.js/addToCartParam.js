export const addToCartParam = (id) => {
  return {
    url: `cart`,
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

export const getCartParam = () => {
  return {
    url: `cart`,
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

export const deleteCartParam = (id) => {
  return {
    url: `/cart-delete-item`,
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