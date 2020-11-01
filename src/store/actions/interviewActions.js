export const createInterview = (interview) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({type: 'CREATE_INTERVIEW', interview})
    }
}