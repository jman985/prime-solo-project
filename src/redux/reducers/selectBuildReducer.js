

// Used to store the build selected for detailed viewing, editing 
const selectBuildReducer= (state = [], action) => {
    switch (action.type) {
        case 'SELECT_BUILD':
            return action.payload;
        default:
            return state;
    }
}

  // user will be on the redux state at:
  // state.user
  export default selectBuildReducer;