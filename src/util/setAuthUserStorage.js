const user = {
  name: "John Doe",
  profilePic: "profile1.jpg",
  address: "123 Main St, City, Country",
};

export const setAuthUserStorage = () => {
  localStorage.setItem("userDetails", JSON.stringify(user));
};

export const getAuthUserStorage = () => {
  const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
  return storedUserDetails
};
