//  import reducers
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import interviewReducer from './interviewReducer';

// import combine
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    article: articleReducer,
    interview: interviewReducer
});

export default rootReducer;