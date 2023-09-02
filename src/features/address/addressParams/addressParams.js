export const postAddressParam = (payload) => {
  console.log(payload, "post add");
  return {
    url: "/add-address",
    method: "POST",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: payload,
  };
};
export const getAddressParam = () => {
  return {
    url: "/address",
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

export const singleAddressParam = (id) => {
    return {
      url: `address/${id}`,
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
export const updateAddressParam = (id, payload) => {
  return {
    url: `/address/${id}`,
    method: "PUT",
    headers: {
      Authorization: "Bearer yourAccessToken",
      "Content-Type": "application/json",
    },
    data: payload,
  };
};
export const deleteAddressParam = (id) => {
  return {
    url: `address/${id}`,
    method: "DELETE",
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
