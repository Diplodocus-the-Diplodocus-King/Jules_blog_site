export const editContent = ({docId, contentId, content}) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('contents').doc(docId).update({[`${contentId}`]: content})
            .then(() => dispatch({type: 'EDIT_CONTENT', content: content}))
            .catch(error => dispatch({type: 'EDIT_CONTENT_ERROR', error}))
    }
}