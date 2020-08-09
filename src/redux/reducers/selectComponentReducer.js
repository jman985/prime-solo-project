// Used to store the build selected for detailed viewing, editing 
const selectComponentReducer= (state = [], action) => {
    switch (action.type) {
        case 'SELECT_COMPONENT':
            return action.payload;
        default:
            return state;
    }
}

  // user will be on the redux state at:
  // state.user
  export default selectComponentReducer;