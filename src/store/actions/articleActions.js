export const createArticle = (article) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('articles').add({...article})
            .then(() => dispatch({type: 'CREATE_ARTICLE', article}))
            .catch(error => dispatch({type: 'CREATE_ARTICLE_ERROR', error}))
    }
}

export const deleteArticle = (article) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('articles').doc(article.id).delete()
            .then(() => dispatch({type: 'DELETE_ARTICLE', article}))
            .catch(error => dispatch({type: 'DELETE_ARTICLE_ERROR', error}))
    }
}