export const createInterview = (interview) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        dispatch({type: 'CREATE_INTERVIEW', interview})
    }
}