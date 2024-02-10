export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case "ADDNEW_TODO":
      return [...state, action.payload];
    case "GETALL_TODO":
      return action.payload;

    default:
      return state;
  }
};
