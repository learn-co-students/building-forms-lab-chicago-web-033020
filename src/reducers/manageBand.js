export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type){
    case "ADD_BAND":
      console.log(state.bands)
      return { bands: [...state.bands, action.payload] }
    default:
      return state
  }
};
