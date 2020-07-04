import * as Actions from "./types";

const initialState = {
  phones: [],
  loading: {}
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOADING_PHONE_PAGE:
      return {
        ...state,
        loading: { phones_page: true },
      };
    case Actions.GET_PHONES:
      return {
        ...state,
        loading: { ...state.loading, phones_page: false },
        phones: action.payload
      };
    default:
      return state;
  }
};
