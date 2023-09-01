export const getWishlistParam = () => {
  return {
    url: "/wishlist",
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

export const addWishlistParam = (id) => {
  return {
    url: "/add-wishlist",
    method: "Post",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: {
      productId:id,
    },
  };
};

export const deleteWishlistParam = (id) => {
  return {
    url: "/delete-wishlist",
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
