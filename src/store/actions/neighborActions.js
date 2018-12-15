export const createNeighbor = neighbor => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log({ firestore });
    firestore.collection("neighbors").add({
      ...neighbor,
      createdAt: new Date()
    });
    dispatch({ type: "CREATE_NEIGHBOR", neighbor });
  };
};
