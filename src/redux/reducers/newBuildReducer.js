const newBuildReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_NEWBUILD':
        return action.payload;
      case 'UNSET_NEWBUILD':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default newBuildReducer;