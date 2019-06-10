import { combineReducers } from "redux";

//
// ─── AUTH REDUCERS ──────────────────────────────────────────────────────────────
//

import authReducers from "./auth/authReducers";




export default combineReducers({
 
    // auth reducers
    auth: authReducers,
  });