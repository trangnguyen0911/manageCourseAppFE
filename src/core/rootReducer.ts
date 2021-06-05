import { useReducer } from "react";
import { combineReducers } from "redux";

import courseReducer from "./course/reducer";
import registerCourseReducer from "./registerCourse/reducer"
import userReducer from "./user/reducer"

const rootReducer = combineReducers({
  course: courseReducer,
  registerCourse: registerCourseReducer,
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;