export const getOrderParam = () => {
    return {
      url: "/orders",
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

  export const postOrderParam = () => {
    return {
      url: "/create-order",
      method: "POST",
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