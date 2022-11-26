import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = "https://sushi-raketa.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:3001";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function signUpUserApi(userData) {
  const res = await axios.post("/api/users/registration", userData);
  return res;
}

export async function signInUserApi(userData) {
  console.log("userData :>> ", userData);
  const { data } = await axios.post("/api/users/login", userData);
  console.log("data :>> ", data);
  token.set(data.ResponseBody.token);
  return data.ResponseBody;
}

// export async function logoutUserApi(persistedToken) {
//   token.set(persistedToken);
//   const { data } = await axios.post("/auth/logout", persistedToken);
//   token.unset();
//   return data;
// }
export async function getRollsApi() {
  const { data } = await axios.get("/api/menu/rolls");

  return data;
}
export async function getSetsApi() {
  const { data } = await axios.get("/api/menu/sets");

  return data;
}
export async function getPizzasApi() {
  const { data } = await axios.get("/api/menu/pizzas");

  return data;
}
export async function getBurgersApi() {
  const { data } = await axios.get("/api/menu/burgers");

  return data;
}
export async function getNoodlesApi() {
  const { data } = await axios.get("/api/menu/noodles");

  return data;
}

export async function userDeliveryApi(orderInfo) {
  const res = await axios.post("/api/checkout/delivery", orderInfo);
  return res.status;
}
export async function userSelfDeliveryApi(orderInfo) {
  console.log("orderInfo", orderInfo);
  await axios.post("/api/checkout/selfDelivery", orderInfo);
}
