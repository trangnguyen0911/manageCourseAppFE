import { combineReducers } from 'redux'
import courseReducer from "./course/reducer";
import registerCourseReducer from "./registerCourse/reducer"
import userReducer from "./user/reducer"
import sercureReducer from "./sercurity/reducer"

/** 
 * Root Reducer
 * 
 * Version 1.0
 * 
 * Date 01-6-2021
 * 
 * Copyright
 * 
 * Modification Logs: 
 * DATE        AUTHOR    DESCRIPTION
 * ----------------------------------- 
 * 01-6-2021  TrangNTT46    Create
 */
const rootReducer = combineReducers({
  course: courseReducer,
  registerCourse: registerCourseReducer,
  user: userReducer,
  sercure: sercureReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

// const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['sercure']
// }
 
// const authPersistConfig = {
//   key: 'sercure',
//   storage: storage,
//   whitelist: ['role']
// }