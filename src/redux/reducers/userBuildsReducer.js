const userBuildsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ALLBUILDS':
        return action.payload;
      case 'UNSET_ALLBUILDS':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default userBuildsReducer;