import * as Actions from "./types";
import axios from "axios";

const apiHost = "https://5ea5689e2d86f00016b45bf7.mockapi.io";

export const getPhones = () => {
  return (dispatch) => {
    dispatch({
      type: Actions.LOADING_PAGE,
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