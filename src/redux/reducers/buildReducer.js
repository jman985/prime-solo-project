const buildReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BUILD':
        return action.payload;
      case 'UNSET_BUILD':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default buildReducer;