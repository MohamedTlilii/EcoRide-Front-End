const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {};
    case "TOGGLE_TASK":
      return {};
    case "SET_FILTER":
      return {};

    case "DELETE_TASK":
      return {};
    case "EDIT_TASK":
      return {};

    default:
      return state;
  }
};

export default reducer;
