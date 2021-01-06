export const createInterview = (interview) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('interviews').add({...interview})
            .then(() => dispatch({type: 'CREATE_INTERVIEW', interview}))
            .catch(error => dispatch({type: 'CREATE_INTERVIEW_ERROR', error}))
    }
}

export const deleteInterview = (interview) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('interviews').doc(interview.id).delete()
            .then(() => dispatch({type: 'DELETE_INTERVIEW', interview}))
            .catch(error => dispatch({type: 'DELETE_INTERVIEW_ERROR', error}))
    }
}

export const editInterview = (interview) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('interviews').doc(interview.id).set({...interview})
            .then(() => dispatch({type: 'EDIT_ARTICLE', interview}))
            .catch(error => dispatch({type: 'EDIT_ARTICLE_ERROR'}))
    }
}