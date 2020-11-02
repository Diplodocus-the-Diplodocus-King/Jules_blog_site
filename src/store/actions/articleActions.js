export const createArticle = (article) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        dispatch({type: 'CREATE_ARTICLE', article})
    }
}