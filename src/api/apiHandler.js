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
  getEvents() {
    return service.get("/api/user/events").then((res) => res.data).catch(errorHandler);
  },
  getItems() {
    return service
      .get("/api/items")
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
  getSports() {
    return service
      .get("/api/sports")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  postSoloSport(data) {
    return service
      .post("/api/events/solo/new", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  postTeamSport(data) {
    return service
      .post("/api/events/multi/new", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getSoloSport() {
    return service
      .get("/api/events/solo")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  getTeamSport() {
    return service
      .get("/api/events/multi")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  addEventSolo() {
    return service
      .post("/api/events/solo/:id/join")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  addEventMulti() {
    return service
      .post("/api/events/multi/:id/join")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  deleteEventSolo() {
    return service
      .delete("/api/events/solo/:id/leave")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  deleteEventMulti() {
    return service
      .delete("/api/events/multi/:id/leave")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  // getUserSport() {
  //   return service.get(`/api/user/${id}/sports`)
  //   .then((res)=>res.data)
  //   .catch(errorHandler)
  // }

  getAllEvents() {
    return service.get("/api/events").then((res) => res.data).catch(errorHandler)
  }
};