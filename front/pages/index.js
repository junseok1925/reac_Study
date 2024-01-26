// 초기값 설정
const initialState = {
  user: { isLoggedIn: false, user: null, signUpData: {}, loginData: {} },
  post: { mainPosts: [] },
};

const login = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
//async action creator
// action creator

const changeNickname = (data) => {
  return {
    type: " CHANGE_NICKNAME",
    data,
  };
};

//                  (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
  }
};

export default rootReducer;
