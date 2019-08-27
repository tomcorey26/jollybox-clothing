const INITIAL_STATE = {
  currentUser: null
};

//action object just consists of type and a payload

//es6 feature for functions
//if state is undefined
// takes initial state as its starting value
//acts as default value
//null counts as value
//only assings when state is undefined

//each reuducer gets every action that is fired
//even if actions arent related to reducer
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      //return object that represents new state
      //that our user reducer is going to transform into
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
