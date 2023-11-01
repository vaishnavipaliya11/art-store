import axios from "axios";

// Create a common API call function
export const makeApiCall = async ({
  url,
  method = "GET",
  headers = {},
  data = null,
}) => {
  try {
    const instance = axios.create({
      baseURL: "https://651d110444e393af2d591767.mockapi.io/",
      headers,
    });

    const response = await instance({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
