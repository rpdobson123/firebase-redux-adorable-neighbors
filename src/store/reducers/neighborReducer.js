const initState = {
  neighbors: [
    {
      id: 1,
      name: "Fred",
      picture: "https://api.adorable.io/avatars/100/Fred"
    }
  ]
};
const neighborReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NEIGHBOR":
      return state;
    default:
      return state;
  }
};

export default neighborReducer;
