import * as Actions from "./types";
import axios from "axios";

const apiHost = "https://5ea5689e2d86f00016b45bf7.mockapi.io";

export const getPhones = () => {
  return (dispatch) => {
    dispatch({
      type: Actions.LOADING_PHONE_PAGE,
    });
    axios
      .get(`${apiHost}/phones`)
      .then((result) => {
        dispatch({
          type: Actions.GET_PHONES,
          payload: result.data,
        });
      })
      .catch((err) => {
        console.log("Axios err", err);
      });
  };
};

export const getComments = () => {
  return (dispatch) => {
    axios
      .get(`${apiHost}/comments`)
      .then((result) => {
        dispatch({
          type: Actions.GET_COMMENTS,
          payload: result.data,
        });
      })
      .catch((err) => {
        console.log("Axios err", err);
      });
  };
};

export const addPhone = (phone) => {
  return (dispatch) => {
    axios
      .post(`${apiHost}/phones`, phone)
      .then((result) => {
        dispatch({
          type: Actions.ADD_PHONE,
          payload: result.data,
        });
      })
      .catch((err) => {
        console.log("Axios err", err);
      });
  };
};
