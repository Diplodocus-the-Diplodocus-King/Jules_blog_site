export const editContent = ({docId, fields}) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('contents').doc(docId).update(fields)
            .then(() => dispatch({type: 'EDIT_CONTENT', content: fields}))
            .catch(error => dispatch({type: 'EDIT_CONTENT_ERROR', error}))
    }
}