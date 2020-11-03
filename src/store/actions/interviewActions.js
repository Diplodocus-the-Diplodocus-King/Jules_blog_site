export const createInterview = (interview) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('interviews').add({...interview})
            .then(() => dispatch({type: 'CREATE_INTERVIEW', interview}))
            .catch(error => dispatch({type: 'CREATE_INTERVIEW_ERROR', error}))
    }
}