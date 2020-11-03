export const createArticle = (article) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('articles').add({...article})
            .then(() => dispatch({type: 'CREATE_ARTICLE', article}))
            .catch(error => dispatch({type: 'CREATE_ARTICLE_ERROR', error}))
    }
}