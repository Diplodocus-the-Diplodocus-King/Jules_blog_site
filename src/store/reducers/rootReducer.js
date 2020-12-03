//  import reducers
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import interviewReducer from './interviewReducer';
import contentReducer from './contentReducer';

// redux
import { combineReducers } from 'redux';

// firestore
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    article: articleReducer,
    interview: interviewReducer,
    content: contentReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;