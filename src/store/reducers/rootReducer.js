//  import reducers
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import interviewReducer from './interviewReducer';

// redux
import { combineReducers } from 'redux';

// firestore
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    article: articleReducer,
    interview: interviewReducer,
    firestore: firestoreReducer
});

export default rootReducer;