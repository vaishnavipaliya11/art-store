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
      baseURL: "http://localhost:3000",
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
