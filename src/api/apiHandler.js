import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}
function get(endPoint) {
  return service.get(endPoint);
}
function patch(endPoint) {
  return service.patch(endPoint);
}
function post(endPoint) {
  return service.post(endPoint);
}
export default {
  service,
  get,
  patch,
  post,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getItems() {
    return service
      .get("/api/items")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getSports() {
    return service
      .get("/api/sports")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  editProfile(updatedUserInfo) {
    return service
      .post("/api/auth/edit-profile", updatedUserInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  // deleteSports() {
  //   return service
  //     .patch(`/api/user/sports/${id}`)
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  // getUserSport() {
  //   return service.get(`/api/user/${id}/sports`)
  //   .then((res)=>res.data)
  //   .catch(errorHandler)
  // }
};
