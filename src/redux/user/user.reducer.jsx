const INITIAL_STATE = {
  currentUser: null
};


const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":

      return {
        ...state,
        currentUser: action.payload
      };


    //if action type doesnt match switch statements
    //return the state you already had
    default:
      return state;
  }
};

export default userReducer;
