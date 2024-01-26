export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

// async action creator
// action  creator
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state, // initalState의 user객체의 'isLoggedIn' 속성을 변경 ( 다른 값들은 그대로 )
        isLoggedIn: true,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state, // initalState의 user객체의 'isLoggedIn' 속성을 변경 ( 다른 값들은 그대로 )
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
